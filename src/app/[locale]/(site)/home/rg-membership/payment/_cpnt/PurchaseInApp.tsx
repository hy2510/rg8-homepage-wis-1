'use client'

import SITE_PATH from '@/app/site-path'
import { useTrack } from '@/external/marketing-tracker/component/MarketingTrackerContext'
import useTranslation from '@/localization/client/useTranslations'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFetchInappPurchase } from '@/client/store/payment/inapp/hook'
import { useOnLoadProductList } from '@/client/store/payment/purchase/hook'
import { useStudentInfoMainPhone } from '@/client/store/student/info/selector'
import { useStyle } from '@/ui/context/StyleContext'
import LoadingScreen from '@/ui/modules/LoadingScreen'
import BillPaper from './BillPaper'
import PayerInfo from './PayerInfo'
import PaymentStudentInfo from './PaymentStudentInfo'
import ProductCardList from './ProductCard'

const STYLE_ID = 'page_purchase'

export default function PurchaseInApp({
  purchaseType,
  isChangeUserInfo = false,
}: {
  purchaseType: 'ios' | 'android'
  isChangeUserInfo?: boolean
}) {
  const style = useStyle(STYLE_ID)

  // @Language 'common'
  const { t } = useTranslation()

  const maketingEventTracker = useTrack()

  const router = useRouter()
  const userPhone = useStudentInfoMainPhone()

  const { loading, error, payload } = useOnLoadProductList(purchaseType)

  const [selectItem, setSelectItem] = useState<string | undefined>(undefined)
  const [isPolicyAgree, setPolicyAgree] = useState(!isChangeUserInfo)

  const [iapInterface, setIapInterface] = useState<any>(undefined)
  const { loading: purchaseLoading, fetch: purchaseFetch } =
    useFetchInappPurchase({ iapInterface, platform: purchaseType })

  useEffect(() => {
    const iap = new (window as any).RgIapInterface()
    iap.init()
    setIapInterface(iap)
  }, [])

  const onProductClick = (itemId: string) => {
    setSelectItem(itemId)
  }

  const onBuyClick = () => {
    if (!iapInterface) {
      return
    }
    if (!targetProduct) {
      alert(t('t690')) // 구매하실 이용권을 선택해주세요.
      return
    }
    if (!userPhone) {
      alert(t('t691')) // 연락처를 입력해주세요.
      return
    }
    if (!isPolicyAgree) {
      alert(t('t692')) // 결제를 진행하기 위해서는 개인정보 수집에 동의하셔야 합니다.
      return
    }

    if (targetProduct) {
      const itemId = targetProduct.id

      purchaseFetch({
        itemId,
        callback: (isSuccess, errorCode) => {
          if (isSuccess) {
            maketingEventTracker.eventAction('Purchase', {
              value: targetProduct.totalFee,
              currency,
            })
            alert(t('t694')) // 결제가 완료 되었습니다.
            router.push(SITE_PATH.HOME.MEMBERSHIP_PAYMENT_HISTORY)
          } else {
            if (errorCode !== -99) {
              alert('errorCode: ' + errorCode)
            }
          }
        },
      })
    }
  }

  if (loading) {
    return <div></div>
  }
  const filteredItem = payload?.product?.filter(
    (item) => item.id === selectItem,
  )
  const currency = payload?.currency || 'KRW'
  const targetProduct =
    filteredItem && filteredItem.length > 0 ? filteredItem[0] : undefined

  return (
    <div className={style.purchase}>
      <PaymentStudentInfo STYLE_ID={STYLE_ID} />
      <div className={style.page_container}>
        <div className={style.col_left}>
          <ProductCardList
            STYLE_ID={STYLE_ID}
            currency={currency}
            product={payload?.product}
            activeId={selectItem}
            onProductClick={onProductClick}
          />
          {selectItem && (
            <>
              <PayerInfo
                STYLE_ID={STYLE_ID}
                isChangeUserInfo={isChangeUserInfo}
                onPolicyAgreeChange={(checked) => {
                  setPolicyAgree(checked)
                }}
              />
            </>
          )}
        </div>
        <div className={style.col_right}>
          <BillPaper
            STYLE_ID={STYLE_ID}
            currency={currency}
            product={targetProduct}
            active={!!targetProduct && !!userPhone && isPolicyAgree}
            onBuyClick={onBuyClick}
          />
        </div>
      </div>
      {purchaseLoading && <LoadingScreen />}
    </div>
  )
}

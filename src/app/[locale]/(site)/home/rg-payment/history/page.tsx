'use client'

import ClientTo from '@/app/_app/ClientTo'
import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import SITE_PATH from '@/app/site-path'
import useTranslation from '@/localization/client/useTranslations'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useStudentInfoFlagLogin } from '@/client/store/student/info/selector'
import PaymentHistory from '../../rg-membership/payment/_cpnt/PaymentHistory'

export default function Page() {
  const { target, isPaymentable } = useSiteBlueprint()

  // @language 'common'
  const { t } = useTranslation()

  const path = usePathname()
  const isLogOff = useStudentInfoFlagLogin() === 'off'
  const [redirect, setRedirect] = useState('')

  if (isPaymentable && (target.school || target.academy)) {
    if (isLogOff) {
      if (!redirect) {
        alert(t('t929'))
        // setRedirect(`${SITE_PATH.ACCOUNT.SIGN_IN}?to=${path}`)
        setRedirect(`${SITE_PATH.ACCOUNT.SIGN_IN}`)
      }
      return <>{redirect && <ClientTo to={redirect}></ClientTo>}</>
    }
  }
  return <PaymentHistory />
}

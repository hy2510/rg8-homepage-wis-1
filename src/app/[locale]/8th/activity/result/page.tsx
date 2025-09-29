'use client'

import ReviewList from '@/8th/features/review/ui/ReviewList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title={'Study Results'}
        onBack={() => router.push(SITE_PATH.NW8.ACTIVITY)}
      />
      <BoxStyle
        padding="10px 15px"
        backgroundColor="rgba(212, 220, 230, 0.50)"
        borderRadius={10}>
        <TextStyle fontSize="small" fontFamily="sans" fontColor="primary">
          학습을 PASS로 완료하면 모드에 따라 획득 포인트가 달라집니다. 1st·Full
          모드는 100%, 2nd·Easy 모드는 50%, 그 외에는 포인트가 지급되지
          않습니다.
        </TextStyle>
      </BoxStyle>
      <ReviewList />
    </BasicGridLayout>
  )
}

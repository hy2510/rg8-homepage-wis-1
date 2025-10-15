'use client'

import { Assets } from '@/8th/assets/asset-library'
import ChallengeTrophyCard from '@/8th/features/achieve/ui/ChallengeTrophyCard'
import LevelMasterCard from '@/8th/features/achieve/ui/LevelMasterCard'
import RankCard from '@/8th/features/rank/ui/RankCard'
import RecentReviewList from '@/8th/features/review/ui/RecentReviewList'
import StudentInfoCard from '@/8th/features/student/ui/StudentInfoCard'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { RoundedFullButton } from '@/8th/shared/ui/Buttons'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import SITE_PATH from '@/app/site-path'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <BasicGridLayout>
      <StudentInfoCard />
      <StudentAchievements />
      <RecentReviewList />
      <RoundedFullButton
        onClick={() => router.push(SITE_PATH.NW8.REVIEW)}
        fontColor="var(--font-color-primary)">
        <BoxStyle
          display="flex"
          alignItems="center"
          flexDirection="row"
          gap={5}>
          <TextStyle fontSize="medium" fontWeight="bolder" fontFamily="sans">
            {/* All Study Results */}
            학습 결과 더보기
          </TextStyle>
          <Image
            src={Assets.Icon.arrowRightBlack}
            alt="right-arrow"
            width={14}
            height={14}
          />
        </BoxStyle>
      </RoundedFullButton>
    </BasicGridLayout>
  )
}

function StudentAchievements() {
  return (
    <BoxStyle display="flex" flexDirection="column" gap={20}>
      <TextStyle fontSize="xlarge">Achievements</TextStyle>
      <BoxStyle display="flex" flexDirection="row" gap={20}>
        <LevelMasterCard level="KA" earnPoints={1.2} levelMasterPoint={100} />
        <RankCard rank={10} />
        <ChallengeTrophyCard />
      </BoxStyle>
    </BoxStyle>
  )
}

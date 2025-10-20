'use client'

import RankCategory, {
  RankCategoryItem,
} from '@/8th/features/rank/ui/RankCategory'
import RankChallengeHeader from '@/8th/features/rank/ui/RankChallengeHeader'
import RankChallengeList from '@/8th/features/rank/ui/RankChallengeList'
import RankHallOfFameHeader from '@/8th/features/rank/ui/RankHallOfFameHeader'
import RankHallOfFameList from '@/8th/features/rank/ui/RankHallOfFameList'
import RankLevelMasterHeader from '@/8th/features/rank/ui/RankLevelMasterHeader'
import RankLevelMasterList from '@/8th/features/rank/ui/RankLevelMasterList'
import RankMonthlyHeader from '@/8th/features/rank/ui/RankMonthlyHeader'
import RankMonthlyList from '@/8th/features/rank/ui/RankMonthlyList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import Pagenation from '@/8th/shared/ui/Pagenation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const router = useRouter()

  const tabs: RankCategoryItem[] = [
    { label: '다독/포인트', value: 'earned-points-rank' },
    { label: '영어 독서왕', value: 'reading-king' },
    { label: '레벨 마스터', value: 'level-master' },
    { label: '명예의 전당', value: 'hall-of-fame' },
  ]

  const [selectedTab, setSelectedTab] = useState(
    'earned-points-rank' as
      | 'earned-points-rank'
      | 'reading-king'
      | 'level-master'
      | 'hall-of-fame',
  ) // earned-points-rank, reading-king, level-master, hall-of-fame

  const getCurrentMonth = (): string => {
    const now = new Date()
    const month = now.getMonth() + 1
    return month.toString()
  }

  const currentMonth = getCurrentMonth()
  const [selectedGrade, setSelectedGrade] = useState('3')
  const [selectedPeriod, setSelectedPeriod] = useState(`${currentMonth}월 랭킹`)

  const [selectedChallengePeriod, setSelectedChallengePeriod] =
    useState('2025 하반기 영어독서왕선발대회')

  return (
    <BasicGridLayout>
      <SubPageNavHeader title="Ranking" onBack={() => router.back()} />
      <RankCategory
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={(tab) =>
          setSelectedTab(
            tab as
              | 'earned-points-rank'
              | 'reading-king'
              | 'level-master'
              | 'hall-of-fame',
          )
        }
      />

      {selectedTab === 'earned-points-rank' && (
        <>
          <RankMonthlyHeader
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />
          <RankMonthlyList />
          <Pagenation />
        </>
      )}
      {selectedTab === 'reading-king' && (
        <>
          <RankChallengeHeader
            selectedChallengePeriod={selectedChallengePeriod}
            setSelectedChallengePeriod={setSelectedChallengePeriod}
          />
          <RankChallengeList />
          <Pagenation />
        </>
      )}
      {selectedTab === 'level-master' && (
        <>
          <RankLevelMasterHeader />
          <RankLevelMasterList />
          <Pagenation />
        </>
      )}
      {selectedTab === 'hall-of-fame' && (
        <>
          <RankHallOfFameHeader />
          <RankHallOfFameList />
          <Pagenation />
        </>
      )}
    </BasicGridLayout>
  )
}

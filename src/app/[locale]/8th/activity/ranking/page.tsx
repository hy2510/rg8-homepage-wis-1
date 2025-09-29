'use client'

import RankCategory, {
  RankCategoryItem,
} from '@/8th/features/rank/ui/RankCategory'
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
    { label: '학년', value: 'grade' },
    { label: '학교', value: 'school' },
    { label: '영어 독서왕', value: 'reading-king' },
    { label: '레벨 마스터', value: 'level-master' },
    { label: '명예의 전당', value: 'hall-of-fame' },
  ]

  const [selectedGrade, setSelectedGrade] = useState('3')
  const [selectedMonth, setSelectedMonth] = useState('6')

  return (
    <BasicGridLayout>
      <SubPageNavHeader title="Ranking" onBack={() => router.back()} />
      <RankCategory tabs={tabs} />
      <RankMonthlyHeader
        selectedMonth={selectedMonth}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
      />
      <RankMonthlyList />
      <Pagenation />
    </BasicGridLayout>
  )
}

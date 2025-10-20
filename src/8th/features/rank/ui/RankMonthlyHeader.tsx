'use client'

import { BoxStyle, SelectBox, TextStyle } from '@/8th/shared/ui/Misc'

/**
 * 랭킹 월간 헤더
 */
export default function RankMonthlyHeader({
  selectedGrade,
  setSelectedGrade,
  selectedPeriod,
  setSelectedPeriod,
}: {
  selectedGrade: string
  setSelectedGrade: (value: string) => void
  selectedPeriod: string
  setSelectedPeriod: (value: string) => void
}) {
  const grades = [
    '전체 학년',
    '1학년',
    '2학년',
    '3학년',
    '4학년',
    '5학년',
    '6학년',
  ]

  // 현재 월 가져오기
  const getCurrentMonth = (): string => {
    const now = new Date()
    const month = now.getMonth() + 1
    return month.toString()
  }

  const currentMonth = getCurrentMonth()

  const periods = ['전체 랭킹', `${currentMonth}월 랭킹`]

  return (
    <BoxStyle
      display="flex"
      flexDirection="column"
      gap={5}
      padding="0 0 0 10px">
      <BoxStyle display="flex" gap={10} alignItems="center">
        <SelectBox
          selectedValue={selectedPeriod}
          onChange={(value) => setSelectedPeriod(value)}
          options={periods}
        />
        <SelectBox
          selectedValue={selectedGrade}
          onChange={(value) => setSelectedGrade(value)}
          options={grades}
        />
      </BoxStyle>
      <TextStyle
        fontColor="secondary"
        fontFamily="sans"
        fontSize="small"
        fontWeight={500}>
        오늘 학습한 기록은 내일 오전에 반영됩니다.
      </TextStyle>
    </BoxStyle>
  )
}

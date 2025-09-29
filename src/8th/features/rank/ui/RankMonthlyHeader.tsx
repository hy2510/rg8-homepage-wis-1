'use client'

import { BoxStyle, SelectBox, TextStyle } from '@/8th/shared/ui/Misc'

/**
 * 랭킹 월간 헤더
 */
export default function RankMonthlyHeader({
  selectedMonth,
  selectedGrade,
  setSelectedGrade,
}: {
  selectedMonth: string
  selectedGrade: string
  setSelectedGrade: (value: string) => void
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

  return (
    <BoxStyle
      display="flex"
      flexDirection="column"
      gap={5}
      padding="0 0 0 10px">
      <BoxStyle display="flex" gap={10} alignItems="center">
        <TextStyle fontFamily="sans" fontWeight={700}>
          {selectedMonth}월 랭킹
        </TextStyle>
        <span></span>
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

'use client'

import { BoxStyle, SelectBox, TextStyle } from '@/8th/shared/ui/Misc'

/**
 * 영어독서왕 헤더
 */
export default function RankChallengeHeader({
  selectedChallengePeriod,
  setSelectedChallengePeriod,
  challengeStartDate = '11/1',
  challengeEndDate = '11/29',
}: {
  selectedChallengePeriod?: string
  setSelectedChallengePeriod?: (value: string) => void
  challengeStartDate?: string
  challengeEndDate?: string
}) {
  const periods = [
    '2025 하반기 영어독서왕선발대회',
    '2025 상반기 영어독서왕선발대회',
  ]

  return (
    <BoxStyle
      display="flex"
      flexDirection="column"
      gap={5}
      padding="0 0 0 10px">
      <BoxStyle display="flex" gap={10} alignItems="center">
        <SelectBox
          selectedValue={selectedChallengePeriod || ''}
          onChange={(value) => setSelectedChallengePeriod?.(value)}
          options={periods}
        />
      </BoxStyle>
      <TextStyle
        fontColor="secondary"
        fontFamily="sans"
        fontSize="small"
        fontWeight={500}>
        대회 기간: {challengeStartDate}~{challengeEndDate}
      </TextStyle>
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

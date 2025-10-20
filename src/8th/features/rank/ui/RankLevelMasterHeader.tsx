'use client'

import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'

/**
 * 레벨마스터 헤더
 */
export default function RankLevelMasterHeader() {
  return (
    <BoxStyle
      display="flex"
      flexDirection="column"
      gap={5}
      padding="0 0 0 10px">
      <TextStyle
        fontColor="secondary"
        fontFamily="sans"
        fontSize="small"
        fontWeight={500}>
        최근 30일간 레벨 마스터를 획득한 학생입니다. 오늘 학습한 기록은 내일
        오전 랭킹에 반영됩니다.
      </TextStyle>
    </BoxStyle>
  )
}

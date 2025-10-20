'use client'

import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'

/**
 * 명예의전당 헤더
 */
export default function RankHallOfFameHeader() {
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
        명예의 전당에 등재된 학생들은 Reading Gate의 R포인트를 10,000점 이상
        획득한 학생들입니다.
      </TextStyle>
      <TextStyle
        fontColor="lightBlue"
        fontFamily="sans"
        fontSize="small"
        fontWeight={500}>
        등급 및 장학혜택
      </TextStyle>
    </BoxStyle>
  )
}

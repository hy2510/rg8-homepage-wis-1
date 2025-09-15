'use client'

import { Assets } from '@/8th/assets/asset-library'
import { ChallengeTrophyCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'

/**
 * 영어독서왕 수상 이력(퍼포먼스)
 */
export default function ChallengeTrophyCard() {
  return (
    <ChallengeTrophyCardStyle>
      <BoxStyle className="title-link" gap={5}>
        <span>영어 독서왕 수상 이력</span>
        <Image
          src={Assets.Icon.arrowUpRightBlack}
          alt="arrow-up-right-black"
          width={14}
          height={14}
        />
      </BoxStyle>
      <BoxStyle
        display="flex"
        alignItems="center"
        gap={10}
        padding="10px 0 0 0">
        <Image
          className="challenge-trophy-image"
          src={Assets.Challenge.best}
          alt="Award Challenge"
          width={72}
          height={72}
        />
        <BoxStyle
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          className="challenge-award-name">
          <span>2022 하반기 최우수상 수상</span>
          <span>2022-09-20</span>
        </BoxStyle>
      </BoxStyle>
    </ChallengeTrophyCardStyle>
  )
}

'use client'

import { Assets } from '@/8th/assets/asset-library'
import { RankCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'

/**
 * 레벨마스터 카드(퍼포먼스)
 */
export default function RankCard() {
  return (
    <RankCardStyle>
      <BoxStyle className="title-link">
        <span>랭킹</span>
        <Image
          src={Assets.Icon.arrowUpRightBlack}
          alt="arrow-up-right-black"
          width={14}
          height={14}
        />
      </BoxStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={5}
        padding="20px 10px">
        <div className="rank">10</div>
      </BoxStyle>
    </RankCardStyle>
  )
}

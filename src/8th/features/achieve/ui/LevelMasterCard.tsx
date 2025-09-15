'use client'

import { Assets } from '@/8th/assets/asset-library'
import { LevelMasterCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'

/**
 * 랭킹 카드(퍼포먼스)
 */
export default function RankCard() {
  return (
    <LevelMasterCardStyle>
      <BoxStyle className="title-link" gap={5}>
        <span>레벨 마스터</span>
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
        <div className="level">KA</div>
        <div className="earn-points">1/100P</div>
      </BoxStyle>
    </LevelMasterCardStyle>
  )
}

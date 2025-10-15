'use client'

import { Assets } from '@/8th/assets/asset-library'
import { LevelMasterCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import LevelMasterModal from './LevelMasterModal'

/**
 * 랭킹 카드(퍼포먼스)
 */

interface LevelMasterCardProps {
  level: string
  earnPoints: number
  levelMasterPoint: number
}

export default function LevelMasterCard({
  level = 'KA',
  earnPoints = 1.2,
  levelMasterPoint = 100,
}: LevelMasterCardProps) {
  const [isLevelMasterModalOpen, setIsLevelMasterModalOpen] = useState(false)

  return (
    <LevelMasterCardStyle>
      <BoxStyle className="title-link">
        <span>학습 레벨</span>
        {/* <Image
          src={Assets.Icon.arrowUpRightBlack}
          alt="arrow-up-right-black"
          width={14}
          height={14}
        /> */}
      </BoxStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={5}
        padding="20px 10px"
        onClick={() => setIsLevelMasterModalOpen(true)}>
        <div className="level">{level}</div>
        <div className="earn-points">
          {earnPoints}/{levelMasterPoint}P
        </div>
      </BoxStyle>
      {isLevelMasterModalOpen && (
        <LevelMasterModal
          onCloseModal={() => setIsLevelMasterModalOpen(false)}
        />
      )}
    </LevelMasterCardStyle>
  )
}

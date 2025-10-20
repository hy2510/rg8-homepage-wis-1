'use client'

import { Assets } from '@/8th/assets/asset-library'
import { ChallengeTrophyCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import ChallengeTrophyModal from './ChallengeTrophyModal'

/**
 * 영어독서왕 수상 이력(퍼포먼스)
 */

interface ChallengeTrophyCardProps {
  awardName?: string
  awardDate?: string
}

export default function ChallengeTrophyCard({
  awardName = '2022 하반기 최우수상 수상',
  awardDate = '2022-09-20',
}: ChallengeTrophyCardProps) {
  const [isChallengeTrophyModalOpen, setIsChallengeTrophyModalOpen] =
    useState(false)

  return (
    <ChallengeTrophyCardStyle>
      <BoxStyle className="title-link">
        <span>영어 독서왕 수상 이력</span>
        {/* <Image
          src={Assets.Icon.arrowUpRightBlack}
          alt="arrow-up-right-black"
          width={14}
          height={14}
        /> */}
      </BoxStyle>
      {/* 최근 수상 이력이 있을 때 */}
      <BoxStyle
        display="flex"
        alignItems="center"
        gap={5}
        padding="10px 0 0 0"
        onClick={() => setIsChallengeTrophyModalOpen(true)}>
        <Image
          className="challenge-trophy-image"
          src={Assets.Challenge.best}
          alt="Award Challenge"
          width={72}
          height={72}
        />
        <BoxStyle display="flex" flexDirection="column" alignItems="flex-start">
          <TextStyle fontColor="lightBlue" fontFamily="sans" fontWeight={800}>
            {awardName}
          </TextStyle>
          <TextStyle fontSize="medium" fontColor="secondary" fontFamily="sans">
            {awardDate}
          </TextStyle>
        </BoxStyle>
      </BoxStyle>
      {/* 최근 수상 이력이 없을 때 */}
      {/* <BoxStyle
        width="100%"
        height="80px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="challenge-award-name">
        <span>현재는 수상 이력이 없습니다.</span>
      </BoxStyle> */}
      {isChallengeTrophyModalOpen && (
        <ChallengeTrophyModal
          onClickClose={() => setIsChallengeTrophyModalOpen(false)}
        />
      )}
    </ChallengeTrophyCardStyle>
  )
}

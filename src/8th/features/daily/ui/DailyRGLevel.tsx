import { Assets } from '@/8th/assets/asset-library'
import { DailyRGLevelStyle } from '@/8th/features/FeaturesStyled'
import DropdownMenu from '@/8th/shared/ui/Dropdowns'
import { TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'

export default function DailyRGLevel() {
  // PK -> Stage 1
  // KA~KC -> Stage 2
  // 1A~1C -> Stage 3
  // 2A~2C -> Stage 4
  // 3A~3C -> Stage 5
  // 4A~6C -> Stage 6
  const [currentStage] = useState(1) // 고정된 현재 트랙 (Daily RG에서 마지막 학습한 레벨에 따라 변경)
  const [selectedStage, setSelectedStage] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <DailyRGLevelStyle onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <TextStyle fontSize="xxlarge">Stage</TextStyle>
      <TextStyle fontSize="xxlarge">{selectedStage}</TextStyle>
      <Image
        src={Assets.Icon.chevronDownGray}
        alt="chevron-down"
        width={24}
        height={24}
      />
      <DropdownMenu
        items={[
          {
            text: 'Stage 1 (Lv.PK)',
            subText: '유치원',
            onClick: () => setSelectedStage(1),
          },
          {
            text: 'Stage 2 (Lv.K)',
            subText: '초등 저학년',
            onClick: () => setSelectedStage(2),
          },
          {
            text: 'Stage 3 (Lv.1)',
            subText: '초등 고학년',
            onClick: () => setSelectedStage(3),
          },
          {
            text: 'Stage 4 (Lv.2)',
            subText: '중등',
            onClick: () => setSelectedStage(4),
          },
          {
            text: 'Stage 5 (Lv.3)',
            subText: '중등 ~ 고등',
            onClick: () => setSelectedStage(5),
          },
          {
            text: 'Stage 6 (Lv.4 to 6)',
            subText: '고등 ~ 성인',
            onClick: () => setSelectedStage(6),
          },
        ]}
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        showArrow={false}
        viewGrid={false}
        currentStage={currentStage}
      />
    </DailyRGLevelStyle>
  )
}

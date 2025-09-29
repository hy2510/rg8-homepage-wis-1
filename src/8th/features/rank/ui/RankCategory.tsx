'use client'

import { TabBarStyle } from '@/8th/shared/SharedStyled'
import { TextStyle } from '@/8th/shared/ui/Misc'
import { useState } from 'react'

export interface RankCategoryItem {
  label: string
  value: string
}

export default function RankCategory({ tabs }: { tabs: RankCategoryItem[] }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <TabBarStyle>
      {tabs &&
        tabs.map((tab, index) => (
          <RankCategoryItem
            key={tab.value}
            label={tab.label}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
    </TabBarStyle>
  )
}

function RankCategoryItem({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <TextStyle
      onClick={onClick}
      fontFamily="sans"
      fontColor={active ? 'primary' : 'secondary'}
      fontSize="medium"
      fontWeight={700}>
      • {label}
    </TextStyle>
  )
}

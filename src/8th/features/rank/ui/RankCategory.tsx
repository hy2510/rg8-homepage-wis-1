'use client'

import { TabBarStyle } from '@/8th/shared/SharedStyled'
import { TextStyle } from '@/8th/shared/ui/Misc'

export interface RankCategoryItem {
  label: string
  value: string
}

export default function RankCategory({
  tabs,
  selectedTab,
  setSelectedTab,
}: {
  tabs: RankCategoryItem[]
  selectedTab: string
  setSelectedTab: (tab: string) => void
}) {
  return (
    <TabBarStyle>
      {tabs &&
        tabs.map((tab, index) => (
          <RankCategoryItem
            key={tab.value}
            label={tab.label}
            active={selectedTab === tab.value}
            onClick={() => setSelectedTab(tab.value)}
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
      {label}
    </TextStyle>
  )
}

'use client'

import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import { ReactNode } from 'react'
import { RankingNavBar } from '@/ui/modules/ranking-nav-bar/ranking-nav-bar'

export default function Layout({ children }: { children?: ReactNode }) {
  const {
    isChallengeMenu: isOpenChallenge,
    isShowLevelMasterRanking: isOpenLevelMaster,
    custom,
    country,
  } = useSiteBlueprint()

  const isOpenHallOfFame =
    !country.vietnam && custom?.menu?.ranking?.hideHallOfFame !== true

  return (
    <div className="container compact">
      <RankingNavBar
        isOpenChallenge={isOpenChallenge}
        isOpenLevelMaster={isOpenLevelMaster}
        isOpenHallOfFame={isOpenHallOfFame}
      />
      {children}
    </div>
  )
}

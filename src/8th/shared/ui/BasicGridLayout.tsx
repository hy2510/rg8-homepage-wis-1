'use client'

import { Assets } from '@/8th/assets/asset-library'
import CalendarModal from '@/8th/features/achieve/ui/CalendarModal'
import DailyGoalCard from '@/8th/features/achieve/ui/DailyGoalCard'
import ReadingUnitCard from '@/8th/features/achieve/ui/ReadingUnitCard'
import StreakCard, {
  StreakCardClassic,
} from '@/8th/features/achieve/ui/StreakCard'
import LevelTestInfoModal from '@/8th/features/student/ui/LevelTestInfoModal'
import StudentProfileCard from '@/8th/features/student/ui/StudentProfileCard'
import {
  BasicGridLayoutStyle,
  LeftContainerStyle,
  MenuItemStyle,
  MobileTopPlaceholderStyle,
  RightContainerStyle,
} from '@/8th/shared/SharedStyled'
import { useLockBodyScroll } from '@/8th/shared/ui/Misc'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

// 페이지 타입별 제목 및 아이콘 매핑
const PAGE_CONFIG = {
  '/daily': {
    title: 'DAILY RG',
    icon: Assets.Icon.Gnb.main,
  },
  '/library/eb': {
    title: 'E-BOOKS',
    icon: Assets.Icon.Gnb.ebooks,
  },
  '/library/pb': {
    title: 'PB',
    icon: Assets.Icon.Gnb.bookQuiz,
  },
  '/activity': {
    title: 'MY ACTIVITY',
    icon: Assets.Icon.Gnb.myActivity,
  },
} as const

const getPageConfig = (
  pathname: string,
): { title: string; icon: StaticImageData } | null => {
  for (const [path, config] of Object.entries(PAGE_CONFIG)) {
    if (pathname.endsWith(path)) {
      return config
    }
  }
  return null
}

/**
 * 기본 그리드 레이아웃
 */
export default function BasicGridLayout({
  children,
  leftContainerGap = 25,
}: {
  children: React.ReactNode
  leftContainerGap?: number
}) {
  const pathname = usePathname()
  const [pageConfig, setPageConfig] = useState<{
    title: string
    icon: StaticImageData
  } | null>(null)
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [isLevelTestModalOpen, setIsLevelTestModalOpen] = useState(false)
  const [isRightContainerOpen, setIsRightContainerOpen] = useState(false)

  // 페이지 설정 업데이트
  useEffect(() => {
    const updatePageConfig = () => setPageConfig(getPageConfig(pathname))
    updatePageConfig()

    const handleRouteChange = () => updatePageConfig()
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [pathname])

  // 모달 이벤트 리스너
  useEffect(() => {
    const handleOpenCalendar = () => setIsCalendarModalOpen(true)
    const handleOpenLevelTest = () => setIsLevelTestModalOpen(true)
    const handleOpenRightContainer = () => setIsRightContainerOpen(true)

    window.addEventListener('openCalendarModal', handleOpenCalendar)
    window.addEventListener('openLevelTestModal', handleOpenLevelTest)
    window.addEventListener('openRightContainer', handleOpenRightContainer)

    return () => {
      window.removeEventListener('openCalendarModal', handleOpenCalendar)
      window.removeEventListener('openLevelTestModal', handleOpenLevelTest)
      window.removeEventListener('openRightContainer', handleOpenRightContainer)
    }
  }, [])

  // 모달 핸들러
  const handleCloseCalendar = useCallback(
    () => setIsCalendarModalOpen(false),
    [],
  )
  const handleCloseLevelTest = useCallback(
    () => setIsLevelTestModalOpen(false),
    [],
  )
  const handleCloseRightContainer = useCallback(
    () => setIsRightContainerOpen(false),
    [],
  )

  return (
    <>
      {pageConfig && <MobileTopPlaceholderStyle />}
      <BasicGridLayoutStyle>
        <LeftContainerStyle leftContainerGap={leftContainerGap}>
          {pageConfig && (
            <div className="left-container-title-box">
              <div className="title" onClick={() => window.location.reload()}>
                <Image
                  src={pageConfig.icon}
                  alt={pageConfig.title.toLowerCase().replace(' ', '-')}
                  width={38}
                  height={38}
                />
                {pageConfig.title}
              </div>
              <div className="menu">
                <MenuItemStyle
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openCalendarModal'))
                  }}>
                  <Image
                    src={Assets.Icon.Gnb.calendar}
                    alt="DAILY RG"
                    width={34}
                    height={34}
                  />
                </MenuItemStyle>
                <MenuItemStyle
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openRightContainer'))
                  }}>
                  <Image
                    src={
                      'https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_09.png'
                    }
                    alt="MY ACTIVITY"
                    width={34}
                    height={34}
                  />
                </MenuItemStyle>
              </div>
            </div>
          )}
          {children}
        </LeftContainerStyle>
        <RightContainer
          isRightContainerOpen={isRightContainerOpen}
          handleCloseRightContainer={handleCloseRightContainer}
        />
      </BasicGridLayoutStyle>
      {/* 모달 */}
      {isCalendarModalOpen && (
        <CalendarModal onCloseModal={handleCloseCalendar} />
      )}
      {isLevelTestModalOpen && (
        <LevelTestInfoModal onCloseModal={handleCloseLevelTest} />
      )}
    </>
  )
}

export function RightContainer({
  children,
  isRightContainerOpen,
  handleCloseRightContainer,
}: {
  children?: React.ReactNode
  isRightContainerOpen: boolean
  handleCloseRightContainer: () => void
}) {
  // 모달이 열렸을 때 body 스크롤 막기
  useLockBodyScroll(isRightContainerOpen)

  const isStreakAwardMode = true

  return (
    <>
      <RightContainerStyle className={isRightContainerOpen ? 'active' : ''}>
        <div
          className="right-container-close-button"
          onClick={handleCloseRightContainer}>
          <Image
            src={Assets.Icon.deleteBlack}
            alt="CLOSE"
            width={24}
            height={24}
          />
        </div>
        <StudentProfileCard
          studentName="하이도도"
          studentLevel="KA"
          pointRank={10}
          booksRead={40000}
          earnedPoints="9999.9"
          toDoCount={10}
          favoriteCount={10}
        />
        {isStreakAwardMode ? (
          <StreakCard
            todayStreak={true}
            streakCount={10}
            awardCount={20}
            earnedDates={{
              20: '2022.09.23',
              40: '2023.09.23',
              60: '2024.09.23',
              80: '2025.01.23',
              100: '2025.03.23',
              120: '2025.04.23',
              140: '2025.05.23',
            }}
          />
        ) : (
          <StreakCardClassic />
        )}
        <DailyGoalCard dailyProgress={2} dailyGoal={3} totalDailyGoals={50} />
        <ReadingUnitCard
          friendName="MILLO"
          friendThumbnail="https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png"
          friendProgress={1000}
          friendPoint={1250}
        />
        {children}
      </RightContainerStyle>
      {isRightContainerOpen && (
        <div
          className="right-container-overlay"
          onClick={handleCloseRightContainer}
        />
      )}
    </>
  )
}

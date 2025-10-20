'use client'

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
  RightContainerStyle,
} from '@/8th/shared/SharedStyled'
import { useEffect, useState } from 'react'

/**
 * 기본 그리드 레이아웃
 */
export default function BasicGridLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BasicGridLayoutStyle>
      <LeftContainerStyle>{children}</LeftContainerStyle>
      <RightContainer />
    </BasicGridLayoutStyle>
  )
}

export function RightContainer({ children }: { children?: React.ReactNode }) {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [isLevelTestModalOpen, setIsLevelTestModalOpen] = useState(false)
  const [isStreakAwardMode] = useState<boolean>(true)

  useEffect(() => {
    const handleOpenCalendarModal = () => {
      setIsCalendarModalOpen(true)
    }

    const handleOpenLevelTestModal = () => {
      setIsLevelTestModalOpen(true)
    }

    window.addEventListener('openCalendarModal', handleOpenCalendarModal)
    window.addEventListener('openLevelTestModal', handleOpenLevelTestModal)

    return () => {
      window.removeEventListener('openCalendarModal', handleOpenCalendarModal)
      window.removeEventListener('openLevelTestModal', handleOpenLevelTestModal)
    }
  }, [])

  const handleCloseCalendarModal = () => {
    setIsCalendarModalOpen(false)
  }

  const handleCloseLevelTestModal = () => {
    setIsLevelTestModalOpen(false)
  }

  return (
    <RightContainerStyle>
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
          streakCount={40}
          awardCount={40}
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
      <DailyGoalCard dailyProgress={3} dailyGoal={3} totalDailyGoals={50} />
      <ReadingUnitCard
        friendName="MILLO"
        friendThumbnail="https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png"
        friendProgress={20}
        friendPoint={100}
      />
      {children}
      {isCalendarModalOpen && (
        <CalendarModal onCloseModal={handleCloseCalendarModal} />
      )}

      {isLevelTestModalOpen && (
        <LevelTestInfoModal onCloseModal={handleCloseLevelTestModal} />
      )}
    </RightContainerStyle>
  )
}

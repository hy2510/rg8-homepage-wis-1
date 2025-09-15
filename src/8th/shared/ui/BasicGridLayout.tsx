'use client'

import DailyGoalCard from '@/8th/features/achieve/ui/DailyGoalCard'
import ReadingUnitCard from '@/8th/features/achieve/ui/ReadingUnitCard'
import StreakCard from '@/8th/features/achieve/ui/StreakCard'
import StudentProfileCard from '@/8th/features/student/ui/StudentProfileCard'
import {
  BasicGridLayoutStyle,
  LeftContainerStyle,
  RightContainerStyle,
} from '@/8th/shared/SharedStyled'

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
  return (
    <RightContainerStyle>
      <StudentProfileCard
        studentName="하이도도"
        pointRank={10}
        booksRead={40000}
        earnedPoints="9999.9"
        toDoCount={10}
        favoriteCount={10}
      />
      <StreakCard streakCount={130} totalCount={140} />
      <DailyGoalCard dailyProgress={2} dailyGoal={3} />
      <ReadingUnitCard
        friendName="MILLO"
        friendThumbnail="https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png"
        friendProgress={20}
        friendPoint={100}
      />
      {children}
    </RightContainerStyle>
  )
}

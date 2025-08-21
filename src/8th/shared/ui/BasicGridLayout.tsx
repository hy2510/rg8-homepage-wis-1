'use client'

import DailyGoalCard from '@/8th/features/achieve/ui/DailyGoalCard'
import ReadingUnitCard from '@/8th/features/achieve/ui/ReadingUnitCard'
import StreakCard from '@/8th/features/achieve/ui/StreakCard'
import StudentProfileCard from '@/8th/features/student/ui/StudentProfileCard'
import styled from 'styled-components'

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
      <StudentProfileCard studentName="퉁퉁퉁 사후르" />
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

const BasicGridLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 50px;
  position: relative;
  padding: 20px 0;
`

const LeftContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  gap: 30px;
`

const RightContainerStyle = styled.div`
  width: 320px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

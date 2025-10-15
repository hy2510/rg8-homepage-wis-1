import { CalendarHeaderStyle } from '../../FeaturesStyled'

interface CalendarHeaderProps {
  goalType: 'books' | 'point'
  onGoalTypeChange: (type: 'books' | 'point') => void
  totalPoints: number
  totalBooks: number
  dailyGoalAchievements: number
  dailyGoalType: 'point' | 'books'
  totalAttendance: number
}

/**
 * 캘린더 요약 정보 및 목표 타입 토글
 */
export default function CalendarHeader({
  goalType,
  onGoalTypeChange,
  totalPoints,
  totalBooks,
  dailyGoalAchievements,
  dailyGoalType,
  totalAttendance,
}: CalendarHeaderProps) {
  return (
    <CalendarHeaderStyle>
      <div className="left-group">
        <div className="goal-toggle">
          <button
            className={`toggle-button ${goalType === 'books' ? 'active' : ''}`}
            onClick={() => onGoalTypeChange('books')}>
            R
          </button>
          <button
            className={`toggle-button ${goalType === 'point' ? 'active' : ''}`}
            onClick={() => onGoalTypeChange('point')}>
            P
          </button>
        </div>
        {goalType === 'point' ? (
          <div className="comment">
            <span className="title">이달의 획득 포인트</span>
            <span className="value">{totalPoints.toFixed(1)}P</span>
          </div>
        ) : (
          <div className="comment">
            <span className="title">이달의 학습 권수</span>
            <span className="value">{totalBooks}</span>
          </div>
        )}
      </div>
      <div className="right-group">
        {dailyGoalType === goalType && (
          <div className="comment">
            <span className="icon blue" />
            <span className="title">일일 목표 달성</span>
            <span className="value black">{dailyGoalAchievements}</span>
          </div>
        )}
        <div className="comment">
          <span className="icon yellow" />
          <span className="title">출석</span>
          <span className="value black">{totalAttendance}</span>
        </div>
      </div>
    </CalendarHeaderStyle>
  )
}

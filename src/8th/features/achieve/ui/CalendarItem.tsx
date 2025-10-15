import { CalendarItemStyle } from '../../FeaturesStyled'

interface CalendarItemProps {
  dayNumber: number
  isToday: boolean
  goalType: 'books' | 'point'
  earnedPoints?: number
  booksRead?: number
  isCurrentMonth: boolean
  dailyGoalPointValue?: number
  dailyGoalBooksValue?: number
  dailyGoalType?: 'point' | 'books'
  attendance?: boolean
}

export default function CalendarItem({
  dayNumber,
  isToday,
  goalType,
  earnedPoints,
  booksRead,
  isCurrentMonth,
  dailyGoalPointValue,
  dailyGoalBooksValue,
  dailyGoalType,
  attendance,
}: CalendarItemProps) {
  return (
    <CalendarItemStyle
      className={`calendar-item ${!isCurrentMonth ? 'other-month' : ''} ${
        dailyGoalType === 'point' &&
        goalType === 'point' &&
        typeof earnedPoints === 'number' &&
        earnedPoints > 0 &&
        typeof dailyGoalPointValue === 'number' &&
        earnedPoints >= dailyGoalPointValue &&
        'daily-goal-achievement-bg'
      }`}>
      <div
        className={`day-number ${isToday ? 'today' : ''} ${
          !isCurrentMonth ? 'other-month' : ''
        }`}>
        {dayNumber}
      </div>
      {typeof booksRead === 'number' &&
        booksRead > 0 &&
        typeof earnedPoints === 'number' &&
        earnedPoints > 0 && (
          <div className="content">
            <div
              className={`books-read ${goalType === 'books' ? 'active' : ''}`}>
              {booksRead}
            </div>
            <div className={`points ${goalType === 'point' ? 'active' : ''}`}>
              {earnedPoints}
              <span className="point-unit">P</span>
            </div>
          </div>
        )}
      {/* 포인트 목표 달성 표시 */}
      {dailyGoalType === 'point' &&
        goalType === 'point' &&
        typeof earnedPoints === 'number' &&
        earnedPoints > 0 &&
        typeof dailyGoalPointValue === 'number' &&
        earnedPoints >= dailyGoalPointValue && (
          <div className="daily-goal-achievement-line" />
        )}

      {/* 책 읽기 목표 달성 표시 */}
      {dailyGoalType === 'books' &&
        goalType === 'books' &&
        typeof booksRead === 'number' &&
        booksRead > 0 &&
        typeof dailyGoalBooksValue === 'number' &&
        booksRead >= dailyGoalBooksValue && (
          <div className="daily-goal-achievement-line" />
        )}
      {/* 출석 표시 */}
      {attendance && <div className="attendance-line" />}
    </CalendarItemStyle>
  )
}

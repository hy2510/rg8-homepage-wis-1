import { useState } from 'react'
import { CalendarGridStyle, CalendarWeekdayStyle } from '../../FeaturesStyled'
import CalendarEventItem from './CalendarEventItem'
import CalendarHeader from './CalendarHeader'
import CalendarItem from './CalendarItem'

const WEEKDAY_LABELS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const TOTAL_CALENDAR_CELLS = 42 // 6주 * 7일

type CalendarEntry = {
  date: string
  earnedPoints?: number
  booksRead?: number
  status?: 'books' | 'point'
  eventType?:
    | 'setGoalChangeBooks'
    | 'setGoalChangePoint'
    | 'achieveLevelMaster'
    | 'achieveExtensiveReading'
  eventValue?: number | string
  attendance?: boolean
  dailyGoalType?: 'point' | 'books'
}

type CalendarCellData = {
  dayNumber: number
  dateLabel: string
  isCurrentMonth: boolean
  isToday: boolean
  weekday: number
  goalType: 'books' | 'point'
  points?: number
  books?: number
  earnedPoints?: number
  booksRead?: number
  attendance?: boolean
}

interface CalendarGridProps {
  year?: number
  month?: number
  dailyGoalPointValue?: number
  dailyGoalBooksValue?: number
  dailyGoalType?: 'point' | 'books'
  entries?: CalendarEntry[]
}

/**
 * 목표 타입을 결정하는 함수
 */
function determineGoalType({
  entry,
  earnedPoints,
  isCurrentMonth,
  isToday,
  isFuture,
  dailyGoalPointValue,
}: {
  entry?: CalendarEntry
  earnedPoints?: number
  isCurrentMonth: boolean
  isToday: boolean
  isFuture: boolean
  dailyGoalPointValue: number
}): 'books' | 'point' {
  // 1. 엔트리에 명시적으로 설정된 상태가 있으면 사용
  if (entry?.status) {
    return entry.status
  }

  // 2. 다른 달의 날짜는 항상 책 목표
  if (!isCurrentMonth) {
    return 'books'
  }

  // 3. 미래 날짜는 책 목표
  if (isFuture) {
    return 'books'
  }

  // 4. 포인트 데이터가 있는 경우 목표 달성 여부에 따라 결정
  if (typeof earnedPoints === 'number') {
    const isGoalAchieved = earnedPoints >= dailyGoalPointValue
    return isGoalAchieved ? 'point' : 'books'
  }

  // 5. 오늘 날짜는 포인트 목표 (기본값)
  if (isToday) {
    return 'point'
  }

  // 6. 기본값은 책 목표
  return 'books'
}

/**
 * 프로토타입 데이터를 실제 날짜 형식으로 변환
 */
function createPrototypeEntries(year: number, month: number): CalendarEntry[] {
  const monthData = PROTOTYPE_DATA.find(
    (data) => data.year === year && data.month === month,
  )

  if (!monthData) return []

  return monthData.entries.map(
    ({
      day,
      earnedPoints,
      booksRead,
      eventType,
      eventValue,
      attendance,
      dailyGoalType,
    }) => ({
      date: formatDateKey(new Date(year, month - 1, day)),
      earnedPoints,
      booksRead,
      eventType,
      eventValue,
      attendance,
      dailyGoalType,
    }),
  )
}

type ServerCalendarData = {
  year: number
  month: number
  entries: Array<{
    day: number
    earnedPoints?: number
    booksRead?: number
    eventType?:
      | 'setGoalChangeBooks'
      | 'setGoalChangePoint'
      | 'achieveLevelMaster'
      | 'achieveExtensiveReading'
    eventValue?: number | string
    attendance?: boolean
    dailyGoalType?: 'point' | 'books'
  }>
}

/**
 * 프로토타입 데이터 (9월 1일 ~ 10월 1일)
 */
const PROTOTYPE_DATA: ServerCalendarData[] = [
  {
    year: 2025,
    month: 9,
    entries: [
      {
        day: 1,
        earnedPoints: 10.3,
        booksRead: 3,
        eventType: 'setGoalChangeBooks',
        eventValue: 5,
        attendance: true,
        dailyGoalType: 'books',
      },
      {
        day: 3,
        earnedPoints: 7.0,
        booksRead: 2,
        eventType: 'setGoalChangePoint',
        eventValue: 8,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 5,
        earnedPoints: 12.4,
        booksRead: 4,
        eventType: 'achieveLevelMaster',
        eventValue: 'KA',
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 8,
        earnedPoints: 3.5,
        booksRead: 1,
        eventType: 'achieveExtensiveReading',
        eventValue: 50,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 12,
        earnedPoints: 10.7,
        booksRead: 3,
        eventType: 'setGoalChangeBooks',
        eventValue: 7,
        attendance: true,
        dailyGoalType: 'books',
      },
      {
        day: 15,
        earnedPoints: 6.9,
        booksRead: 2,
        eventType: 'setGoalChangePoint',
        eventValue: 12,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 18,
        earnedPoints: 11.8,
        booksRead: 3,
        eventType: 'achieveLevelMaster',
        eventValue: 'KB',
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 22,
        earnedPoints: 8.4,
        booksRead: 2,
        eventType: 'achieveExtensiveReading',
        eventValue: 75,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 25,
        earnedPoints: 15.0,
        booksRead: 4,
        eventType: 'setGoalChangeBooks',
        eventValue: 6,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 26,
        earnedPoints: 0,
        booksRead: 0,
        eventType: 'setGoalChangeBooks',
        eventValue: 6,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 28,
        earnedPoints: 3.2,
        booksRead: 1,
        eventType: 'setGoalChangePoint',
        eventValue: 9,
        attendance: true,
        dailyGoalType: 'point',
      },
      {
        day: 30,
        earnedPoints: 9.6,
        booksRead: 3,
        eventType: 'achieveLevelMaster',
        eventValue: 'KA',
        attendance: true,
        dailyGoalType: 'point',
      },
    ],
  },
  {
    year: 2025,
    month: 10,
    entries: [
      {
        day: 1,
        earnedPoints: 10.7,
        booksRead: 3,
        eventType: 'setGoalChangeBooks',
        eventValue: 8,
        attendance: true,
        dailyGoalType: 'point',
      },
    ],
  },
]

function createEventEntries(year: number, month: number): CalendarEntry[] {
  const monthData = PROTOTYPE_DATA.find(
    (data) => data.year === year && data.month === month,
  )

  if (!monthData) return []

  return monthData.entries
    .filter((entry) => entry.eventType)
    .map(({ day, earnedPoints, booksRead, eventType, eventValue }) => ({
      date: formatDateKey(new Date(year, month - 1, day)),
      earnedPoints: earnedPoints || 0,
      booksRead: booksRead || 0,
      eventType,
      eventValue,
    }))
}

/**
 * 달력 셀 데이터를 생성
 * 6주 * 7일 = 42개의 셀을 생성하여 달력 그리드를 구성
 */
function buildCalendarCells({
  year,
  month,
  entryMap,
  today,
  dailyGoalPointValue,
}: {
  year: number
  month: number
  entryMap: Map<string, CalendarEntry>
  today: Date
  dailyGoalPointValue: number
}): CalendarCellData[] {
  const firstDayOfMonth = new Date(year, month - 1, 1)
  const startDate = new Date(firstDayOfMonth)
  startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay())

  return Array.from({ length: TOTAL_CALENDAR_CELLS }, (_, index) => {
    const current = new Date(startDate)
    current.setDate(startDate.getDate() + index)
    const dateKey = formatDateKey(current)
    const entry = entryMap.get(dateKey)
    const isCurrentMonth = current.getMonth() === month - 1
    const isToday = isSameDay(current, today)

    const earnedPoints = entry?.earnedPoints
    const booksRead = entry?.booksRead
    const attendance = entry?.attendance

    // 목표 타입 결정 로직
    const goalType = determineGoalType({
      entry,
      earnedPoints,
      isCurrentMonth,
      isToday,
      isFuture: current.getTime() > today.getTime(),
      dailyGoalPointValue,
    })

    return {
      dayNumber: current.getDate(),
      dateLabel: dateKey,
      isCurrentMonth,
      isToday,
      weekday: current.getDay(),
      goalType,
      earnedPoints,
      booksRead,
      attendance,
    }
  })
}

/**
 * 날짜를 YYYY-MM-DD 형식의 문자열로 변환
 */
function formatDateKey(date: Date): string {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 날짜의 시간을 00:00:00으로 설정
 */
function toStartOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

/**
 * 두 날짜가 같은 날인지 확인
 */
function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

/**
 * 달력 그리드 컴포넌트
 * 일일 목표 달성 현황을 달력 형태로 표시
 */
export default function CalendarGrid({
  year,
  month,
  dailyGoalPointValue = 120,
  dailyGoalBooksValue = 10,
  dailyGoalType = 'books',
  entries,
}: CalendarGridProps) {
  const today = toStartOfDay(new Date())
  const resolvedYear = year ?? today.getFullYear()
  const resolvedMonth = month ?? today.getMonth() + 1

  const resolvedEntries =
    entries ?? createPrototypeEntries(resolvedYear, resolvedMonth)

  const entryMap = new Map(resolvedEntries.map((item) => [item.date, item]))

  const calendarCells = buildCalendarCells({
    year: resolvedYear,
    month: resolvedMonth,
    entryMap,
    dailyGoalPointValue,
    today,
  })

  const [goalType, setGoalType] = useState<'books' | 'point'>(dailyGoalType)

  // 해당 달의 이벤트 데이터를 날짜순으로 정렬 (오름차순)
  const sortedEvents = createEventEntries(resolvedYear, resolvedMonth).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )

  // 총 포인트 및 총 책 수 계산
  const totalPoints = resolvedEntries.reduce((sum, entry) => {
    return sum + (entry.earnedPoints || 0)
  }, 0)

  const totalBooks = resolvedEntries.reduce((sum, entry) => {
    return sum + (entry.booksRead || 0)
  }, 0)

  // 일일 목표 달성 건수 계산 (goalType에 따라 다르게 계산)
  const dailyGoalAchievements = resolvedEntries.filter((entry) => {
    if (goalType === 'point') {
      const earnedPoints = entry.earnedPoints || 0
      return earnedPoints >= dailyGoalPointValue
    } else {
      const booksRead = entry.booksRead || 0
      return booksRead >= dailyGoalBooksValue
    }
  }).length

  // 출석 합계 계산
  const totalAttendance = resolvedEntries.filter(
    (entry) => entry.attendance,
  ).length

  return (
    <CalendarGridStyle>
      <div className="current-daily-goal">
        {dailyGoalType === 'point' ? (
          <>
            <span className="text-gray">일일 목표</span> · 하루{' '}
            {dailyGoalPointValue}P 획득하기
          </>
        ) : (
          <>
            <span className="text-gray">일일 목표</span> · 하루{' '}
            {dailyGoalBooksValue}
            권씩 학습하기
          </>
        )}
      </div>
      <CalendarHeader
        goalType={goalType}
        onGoalTypeChange={setGoalType}
        totalPoints={totalPoints}
        totalBooks={totalBooks}
        dailyGoalAchievements={dailyGoalAchievements}
        dailyGoalType={dailyGoalType}
        totalAttendance={totalAttendance}
      />
      <div className="calendar-week-header">
        {WEEKDAY_LABELS.map((label, index) => (
          <CalendarWeekdayStyle
            key={label}
            variant={index === 0 ? 'sun' : index === 6 ? 'sat' : 'weekday'}>
            {label}
          </CalendarWeekdayStyle>
        ))}
      </div>
      <div className="calendar-body">
        {calendarCells.map((cell) => (
          <CalendarItem
            key={cell.dateLabel}
            dayNumber={cell.dayNumber}
            isToday={cell.isToday}
            isCurrentMonth={cell.isCurrentMonth}
            goalType={goalType}
            earnedPoints={cell.earnedPoints}
            booksRead={cell.booksRead}
            dailyGoalPointValue={dailyGoalPointValue}
            dailyGoalBooksValue={dailyGoalBooksValue}
            dailyGoalType={dailyGoalType}
            attendance={cell.attendance}
          />
        ))}
      </div>
      <div className="calendar-event-items">
        {sortedEvents.map((event) => (
          <CalendarEventItem
            key={`${event.date}-${event.eventType}`}
            day={new Date(event.date).getDate()}
            eventType={event.eventType!}
            eventValue={event.eventValue!}
          />
        ))}
      </div>
    </CalendarGridStyle>
  )
}

'use client'

import { CalendarEventItemStyle } from '../../FeaturesStyled'

/**
 * 이벤트 변경 이력
 */
type EventType =
  | 'setGoalChangeBooks'
  | 'setGoalChangePoint'
  | 'achieveLevelMaster'
  | 'achieveExtensiveReading'

interface CalendarEventItemProps {
  day: number
  eventType: EventType
  eventValue: number | string
}

export default function CalendarEventItem({
  day,
  eventType,
  eventValue,
}: CalendarEventItemProps) {
  const getEventMessage = () => {
    switch (eventType) {
      case 'setGoalChangeBooks':
        return `Daily goal has been changed to reading ${eventValue} books`
      case 'setGoalChangePoint':
        return `Daily goal has been changed to earning ${eventValue} points`
      case 'achieveLevelMaster':
        return `Level Master Achieved: ${eventValue}`
      case 'achieveExtensiveReading':
        return `Extensive Reading Milestone: ${eventValue} books`
    }
  }

  return (
    <CalendarEventItemStyle>
      <div className="event-day">• Day {day}</div>
      <div className="event-message">{getEventMessage()}</div>
    </CalendarEventItemStyle>
  )
}

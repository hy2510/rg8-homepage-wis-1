import { Assets } from '@/8th/assets/asset-library'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { useLockBodyScroll } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import { BookInfoModalStyle } from '../../FeaturesStyled'
import CalendarGrid from './CalendarGrid'

/**
 * 캘린더 모달
 */

interface CalendarModalProps {
  onCloseModal: () => void
}

export default function CalendarModal({ onCloseModal }: CalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date()) // 현재 날짜로 초기화

  // 모달이 열렸을 때 body 스크롤 막기
  useLockBodyScroll()

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    )
  }

  const formatMonthYear = (date: Date) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
  }

  // 일일 목표 포인트
  const dailyGoalType = 'point' as 'point' | 'books'
  const dailyGoalPointValue = 10
  const dailyGoalBooksValue = 3

  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="calendar-header">
            <button
              className="nav-button prev"
              onClick={handlePrevMonth}
              aria-label="이전 달">
              <Image
                src={Assets.Icon.chevronLeftGray}
                alt=""
                width={20}
                height={20}
              />
            </button>
            <div className="title">{formatMonthYear(currentDate)}</div>
            <button
              className="nav-button next"
              onClick={handleNextMonth}
              aria-label="다음 달">
              <Image
                src={Assets.Icon.chevronRightGray}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="btn-close" onClick={onCloseModal} />
        </ModalHeaderStyle>
        <ModalBodyStyle calendarBody>
          <CalendarGrid
            year={currentDate.getFullYear()}
            month={currentDate.getMonth() + 1}
            dailyGoalType={dailyGoalType}
            dailyGoalPointValue={dailyGoalPointValue}
            dailyGoalBooksValue={dailyGoalBooksValue}
          />
        </ModalBodyStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

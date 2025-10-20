'use client'

import { Assets } from '@/8th/assets/asset-library'
import { ChallengeBoardEditMenu } from '@/8th/shared/ui/Dropdowns'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  ChallengeBoardGoalInfoStyle,
  ChallengeBoardProgressInfoStyle,
  ChallengeBoardProgressItemStyle,
  ChallengeBoardStyle,
} from '../../FeaturesStyled'

// 상수 정의
const CHALLENGE_TITLE = '2025 하반기 영어독서왕선발대회'
const CHALLENGE_END_DATE = '11/29'

// 유틸리티 함수
const calculateDaysLeft = (endDate: string): number => {
  const today = new Date()
  const currentYear = today.getFullYear()
  const [month, day] = endDate.split('/').map(Number)
  const endDateObj = new Date(currentYear, month - 1, day)

  today.setHours(0, 0, 0, 0)
  endDateObj.setHours(0, 0, 0, 0)

  const timeDiff = endDateObj.getTime() - today.getTime()
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return daysLeft > 0 ? daysLeft : daysLeft === 0 ? 0 : -1
}

// 메인 컴포넌트
export default function ChallengeBoard() {
  const [isOpen, setIsOpen] = useState(false)
  const daysLeft = calculateDaysLeft(CHALLENGE_END_DATE)

  const handleToggle = () => setIsOpen(!isOpen)

  const renderStatusMessage = () => {
    if (daysLeft > 0) {
      return `종료일(${CHALLENGE_END_DATE})까지 ${daysLeft + 1}일 남았습니다.`
    } else if (daysLeft === 0) {
      return `오늘(${CHALLENGE_END_DATE})은 대회 마지막 날입니다.`
    } else {
      return `대회가 종료되었습니다. 종료일: ${CHALLENGE_END_DATE}`
    }
  }

  return (
    <ChallengeBoardStyle>
      <BoxStyle className="challenge-board-top" onClick={handleToggle}>
        <Image
          src="/src/8th/images/challenge_symbol_edmond.png"
          alt="challenge-board"
          width={100}
          height={100}
          className="challenge-board-symbol"
        />
        <BoxStyle className="challenge-board-title">
          <TextStyle fontSize="large" fontWeight="bold" fontFamily="sans">
            {CHALLENGE_TITLE} 진행중
          </TextStyle>
          <TextStyle
            fontSize="medium"
            fontWeight="bold"
            fontFamily="sans"
            fontColor="secondary">
            {renderStatusMessage()}
          </TextStyle>
        </BoxStyle>
        <BoxStyle className="challenge-board-arrow">
          <Image
            src={Assets.Icon.chevronRightGray}
            alt="arrow-right"
            width={24}
            height={24}
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </BoxStyle>
      </BoxStyle>
      {isOpen && (
        <>
          <GoalInfo />
          <ProgressInfo />
        </>
      )}
    </ChallengeBoardStyle>
  )
}

// 목표 옵션 상수
const GOAL_OPTIONS = [
  {
    subText: '대상 (6,500포인트 이상 + 학습일수 80일 이상)',
    value: '대상 (6,500포인트 이상 + 학습일수 80일 이상)',
  },
  {
    subText: '최우수상 (4,000포인트 이상 + 학습일수 80일 이상)',
    value: '최우수상 (4,000포인트 이상 + 학습일수 80일 이상)',
  },
  {
    subText: '우수상 (2,000포인트 이상 + 학습일수 80일 이상)',
    value: '우수상 (2,000포인트 이상 + 학습일수 80일 이상)',
  },
  {
    subText: '성실상 (1,000포인트 이상 + 학습일수 80일 이상)',
    value: '성실상 (1,000포인트 이상 + 학습일수 80일 이상)',
  },
]

// 목표 정보 컴포넌트
function GoalInfo() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState(GOAL_OPTIONS[2].value)

  const handleGoalClick = () => setIsDropdownOpen(!isDropdownOpen)

  const goalOptionsWithHandlers = GOAL_OPTIONS.map((option) => ({
    ...option,
    onClick: () => setSelectedGoal(option.value),
  }))

  return (
    <ChallengeBoardGoalInfoStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={5}>
        <TextStyle fontSize="medium" fontWeight="bold" fontFamily="sans">
          나의 목표 · {selectedGoal}
        </TextStyle>
        <TextStyle
          fontSize="small"
          fontWeight="bold"
          fontFamily="sans"
          fontColor="secondary">
          💡 나의 목표와 달라도, 제시된 시상 기준을 달성하면 상품을 받을 수
          있어요!
        </TextStyle>
      </BoxStyle>
      <BoxStyle
        className="challenge-board-goal-edit-button"
        onClick={handleGoalClick}>
        <Image src={Assets.Icon.EditGray} alt="edit" width={20} height={20} />
        <ChallengeBoardEditMenu
          items={goalOptionsWithHandlers}
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          showArrow={false}
          viewGrid={false}
        />
      </BoxStyle>
    </ChallengeBoardGoalInfoStyle>
  )
}

// 참여 현황 컴포넌트
function ProgressInfo() {
  return (
    <ChallengeBoardProgressInfoStyle>
      <BoxStyle display="flex" gap={20}>
        <ProgressItem
          title="획득한 포인트"
          progressType="earned-point"
          point={500}
          totalPoint={2000}
        />
        <ProgressItem
          title="학습일수"
          progressType="study-day"
          days={75}
          goalDays={80}
          totalDays={90}
          fillColor="red"
        />
      </BoxStyle>
      <TextStyle
        fontSize="small"
        fontWeight="bold"
        fontFamily="sans"
        fontColor="#F02E3E">
        ⚠️ 목표 달성을 위한 포인트와 학습일 수가 부족해요. 다음에 다시 도전해
        주세요.
      </TextStyle>
    </ChallengeBoardProgressInfoStyle>
  )
}

// 프로그레스 아이템 타입 정의
interface ProgressItemProps {
  title: string
  days?: number
  goalDays?: number
  totalDays?: number
  point?: number
  totalPoint?: number
  progressType: 'study-day' | 'earned-point'
  fillColor?: string
}

// 프로그레스 아이템 컴포넌트
function ProgressItem({
  title,
  days,
  goalDays,
  totalDays,
  point,
  totalPoint,
  progressType,
  fillColor,
}: ProgressItemProps) {
  const [isVisible, setIsVisible] = useState(false)

  // 현재 진행률 계산
  const progressPercentage =
    progressType === 'study-day'
      ? days
        ? (days / (totalDays || 1)) * 100
        : 0
      : point
        ? (point / (totalPoint || 1)) * 100
        : 0

  // 목표 길이 계산 (totalDays 기준)
  const goalLengthPercentage =
    progressType === 'study-day'
      ? goalDays && totalDays
        ? (goalDays / totalDays) * 100
        : 100
      : 100

  // 목표 달성률 계산 (goalDays 기준)
  const goalAchievementPercentage =
    progressType === 'study-day'
      ? days && goalDays
        ? (days / goalDays) * 100
        : 0
      : progressPercentage

  // 컴포넌트가 마운트되면 애니메이션 시작
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100) // 약간의 지연 후 애니메이션 시작

    return () => clearTimeout(timer)
  }, [])

  return (
    <ChallengeBoardProgressItemStyle>
      <BoxStyle display="flex" gap={5}>
        <span className="title-text">{title} ·</span>
        {progressType === 'study-day' ? (
          <span className="title-text">
            {days}/{totalDays}일
          </span>
        ) : (
          <span className="title-text">
            {point}/{totalPoint}P
          </span>
        )}
      </BoxStyle>
      <div className="progress-bar">
        <div
          className={`progress-bar-fill ${fillColor ? fillColor : ''}`}
          style={{
            width: isVisible
              ? `${Math.min(progressPercentage, 100).toFixed(1)}%`
              : '0%',
          }}></div>
        {goalDays && totalDays && (
          <div
            className="progress-bar-fill-goal"
            style={{
              width: isVisible ? `${goalLengthPercentage.toFixed(1)}%` : '0%',
            }}></div>
        )}
      </div>
      <span className="sub-text">
        {goalAchievementPercentage.toFixed(1)}%{' '}
        {progressType === 'study-day' ? `달성 (${goalDays}일 기준)` : '달성'}
      </span>
    </ChallengeBoardProgressItemStyle>
  )
}

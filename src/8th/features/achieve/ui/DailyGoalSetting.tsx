'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import React, { useState } from 'react'
import { DailyGoalSettingStyle } from '../../FeaturesStyled'

/**
 * 변경 이력 아이템 타입
 */
interface HistoryItem {
  id: string
  title: string
  date: string
}

/**
 * 목표 달성 방법 섹션 컴포넌트
 */
const GoalMethodSection = ({
  onCancel,
  onSave,
  selectedMethod,
  onMethodChange,
  hasChanges,
  isSaving,
}: {
  onCancel: () => void
  onSave: () => void
  selectedMethod: string
  onMethodChange: (value: string) => void
  hasChanges: boolean
  isSaving: boolean
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const goalMethods = [
    { value: 'points', label: '포인트 획득' },
    { value: 'complete', label: '학습 도서 권수' },
  ]

  const selectedLabel =
    goalMethods.find((method) => method.value === selectedMethod)?.label ||
    '포인트 획득'

  const dropdownItems = goalMethods.map((method) => ({
    text: method.label,
    onClick: () => {
      onMethodChange(method.value)
      setIsDropdownOpen(false)
    },
  }))

  return (
    <div className="goal-method-section">
      <span className="section-title">목표 달성 방법</span>
      <div className="goal-method-header">
        <div
          className="goal-method-select-container"
          style={{ position: 'relative' }}>
          <div
            className="goal-method-item"
            onClick={() => {
              console.log('Clicked! Current state:', isDropdownOpen)
              setIsDropdownOpen(!isDropdownOpen)
            }}>
            <span className="goal-method-item-text">{selectedLabel}</span>
            <Image
              src={Assets.Icon.chevronDownGraySmall}
              alt="chevronDown"
              width={16}
              height={16}
            />
          </div>
          {isDropdownOpen && (
            <div className="goal-method-dropdown">
              {dropdownItems.map((item, index) => (
                <div
                  key={index}
                  onClick={item.onClick}
                  className="goal-method-dropdown-item">
                  {item.text}
                </div>
              ))}
            </div>
          )}
        </div>
        {hasChanges && (
          <div className="goal-method-actions">
            <span className="cancel-button" onClick={onCancel}>
              cancel
            </span>
            <span className="save-button" onClick={onSave}>
              {isSaving ? 'saved' : 'save'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * 카운트 설정 섹션 컴포넌트
 */
const CountSection = ({
  count,
  onDecrease,
  onIncrease,
  selectedMethod,
  onStartDecrease,
  onStopDecrease,
  onStartIncrease,
  onStopIncrease,
}: {
  count: number
  onDecrease: () => void
  onIncrease: () => void
  selectedMethod: string
  onStartDecrease: () => void
  onStopDecrease: () => void
  onStartIncrease: () => void
  onStopIncrease: () => void
}) => {
  const getCountText = () => {
    return selectedMethod === 'points'
      ? `하루 ${count}P 획득`
      : `하루 ${count}권 학습`
  }

  return (
    <div className="count-box">
      <div
        className="btn-count"
        onClick={onDecrease}
        onMouseDown={onStartDecrease}
        onMouseUp={onStopDecrease}
        onMouseLeave={onStopDecrease}>
        -
      </div>
      <span className="count-text">{getCountText()}</span>
      <div
        className="btn-count"
        onClick={onIncrease}
        onMouseDown={onStartIncrease}
        onMouseUp={onStopIncrease}
        onMouseLeave={onStopIncrease}>
        +
      </div>
    </div>
  )
}

/**
 * 변경 이력 섹션 컴포넌트
 */
const HistorySection = ({ historyData }: { historyData: HistoryItem[] }) => (
  <div className="change-history-section">
    <span className="section-title">변경 이력</span>
    {historyData.slice(0, 3).map((item) => (
      <div key={item.id} className="change-history-item">
        <span className="history-item-title">· {item.title}</span>
        <span className="history-item-date">{item.date}</span>
      </div>
    ))}
  </div>
)

interface DailyGoalSettingProps {
  onMethodChange?: (method: string) => void
  onCountChange?: (count: number) => void
  maxCount?: number
  initialMethod?: string
  initialCount?: number
}

/**
 * 일일목표설정
 */
export default function DailyGoalSetting({
  onMethodChange,
  onCountChange,
  maxCount = 10,
  initialMethod = 'points',
  initialCount = 3,
}: DailyGoalSettingProps) {
  const [count, setCount] = useState(initialCount)
  const [selectedMethod, setSelectedMethod] = useState(initialMethod)
  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [currentInitialCount, setCurrentInitialCount] = useState(initialCount)
  const [currentInitialMethod, setCurrentInitialMethod] =
    useState(initialMethod)

  // 변경 이력 데이터
  const [historyData, setHistoryData] = useState<HistoryItem[]>([
    { id: '1', title: '하루 3권 학습', date: '(2025-09-24)' },
    { id: '2', title: '하루 2권 학습', date: '(2025-09-22)' },
    { id: '3', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '4', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '5', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '6', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '7', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '8', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '9', title: '하루 1권 학습', date: '(2025-09-21)' },
    { id: '10', title: '하루 1권 학습', date: '(2025-09-21)' },
  ])

  // 이벤트 핸들러들
  const handleDecreaseCount = () => {
    const newCount = Math.max(1, count - 1)
    setCount(newCount)
    onCountChange?.(newCount)
  }

  const handleIncreaseCount = () => {
    const newCount = Math.min(maxCount, count + 1)
    setCount(newCount)
    onCountChange?.(newCount)
  }

  // 자동 증가/감소를 위한 타이머
  const [decreaseTimer, setDecreaseTimer] = useState<NodeJS.Timeout | null>(
    null,
  )
  const [increaseTimer, setIncreaseTimer] = useState<NodeJS.Timeout | null>(
    null,
  )

  const startDecrease = () => {
    if (count > 1) {
      const timer = setInterval(() => {
        setCount((prev) => {
          const newCount = Math.max(1, prev - 1)
          onCountChange?.(newCount)
          return newCount
        })
      }, 100) // 100ms마다 감소
      setDecreaseTimer(timer)
    }
  }

  const startIncrease = () => {
    if (count < maxCount) {
      const timer = setInterval(() => {
        setCount((prev) => {
          const newCount = Math.min(maxCount, prev + 1)
          onCountChange?.(newCount)
          return newCount
        })
      }, 100) // 100ms마다 증가
      setIncreaseTimer(timer)
    }
  }

  const stopDecrease = () => {
    if (decreaseTimer) {
      clearInterval(decreaseTimer)
      setDecreaseTimer(null)
    }
  }

  const stopIncrease = () => {
    if (increaseTimer) {
      clearInterval(increaseTimer)
      setIncreaseTimer(null)
    }
  }

  // 컴포넌트 언마운트 시 타이머 정리
  React.useEffect(() => {
    return () => {
      if (decreaseTimer) clearInterval(decreaseTimer)
      if (increaseTimer) clearInterval(increaseTimer)
    }
  }, [decreaseTimer, increaseTimer])

  // selectedMethod가 변경될 때 count가 maxCount를 초과하지 않도록 조정
  React.useEffect(() => {
    if (count > maxCount) {
      setCount(maxCount)
      onCountChange?.(maxCount)
    }
  }, [selectedMethod, maxCount, count, onCountChange])

  // 변경사항 감지
  React.useEffect(() => {
    const hasMethodChanged = selectedMethod !== currentInitialMethod
    const hasCountChanged = count !== currentInitialCount
    setHasChanges(hasMethodChanged || hasCountChanged)
  }, [selectedMethod, count, currentInitialMethod, currentInitialCount])

  const handleMethodChange = (value: string) => {
    setSelectedMethod(value)
    onMethodChange?.(value)
  }
  const handleCancel = () => {
    setSelectedMethod(currentInitialMethod)
    setCount(currentInitialCount)
    setHasChanges(false)
    onMethodChange?.(currentInitialMethod)
    onCountChange?.(currentInitialCount)
  }

  const handleSave = () => {
    setIsSaving(true)
    setCurrentInitialMethod(selectedMethod)
    setCurrentInitialCount(count)
    setHasChanges(false)

    // 변경이력 추가
    const getHistoryTitle = () => {
      if (selectedMethod === 'points') {
        return `하루 ${count}P 획득`
      } else {
        return `하루 ${count}권 학습`
      }
    }

    const getCurrentDate = () => {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      return `(${year}-${month}-${day})`
    }

    const newHistoryItem: HistoryItem = {
      id: Date.now().toString(),
      title: getHistoryTitle(),
      date: getCurrentDate(),
    }

    setHistoryData((prev) => {
      const newHistory = [newHistoryItem, ...prev]
      // 최대 3개까지만 유지
      return newHistory.slice(0, 3)
    })

    // 2초 후 "saved" 메시지 숨기기
    setTimeout(() => {
      setIsSaving(false)
    }, 2000)
  }

  return (
    <DailyGoalSettingStyle>
      <GoalMethodSection
        onCancel={handleCancel}
        onSave={handleSave}
        selectedMethod={selectedMethod}
        onMethodChange={handleMethodChange}
        hasChanges={hasChanges}
        isSaving={isSaving}
      />
      <CountSection
        count={count}
        onDecrease={handleDecreaseCount}
        onIncrease={handleIncreaseCount}
        selectedMethod={selectedMethod}
        onStartDecrease={startDecrease}
        onStopDecrease={stopDecrease}
        onStartIncrease={startIncrease}
        onStopIncrease={stopIncrease}
      />
      <HistorySection historyData={historyData} />
    </DailyGoalSettingStyle>
  )
}

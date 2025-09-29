'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import { useState } from 'react'
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
}: {
  onCancel: () => void
  onSave: () => void
}) => (
  <div className="goal-method-section">
    <span className="section-title">목표 달성 방법</span>
    <div className="goal-method-header">
      <div className="goal-method-item">
        <span className="goal-method-item-text">• 학습 완료하기</span>
        <Image
          src={Assets.Icon.chevronDownGraySmall}
          alt="chevronDown"
          width={16}
          height={16}
        />
      </div>
      <div className="goal-method-actions">
        <span className="cancel-button" onClick={onCancel}>
          cancel
        </span>
        <span className="save-button" onClick={onSave}>
          save
        </span>
      </div>
    </div>
  </div>
)

/**
 * 카운트 설정 섹션 컴포넌트
 */
const CountSection = ({
  count,
  onDecrease,
  onIncrease,
}: {
  count: number
  onDecrease: () => void
  onIncrease: () => void
}) => (
  <div className="count-box">
    <div className="btn-count" onClick={onDecrease}>
      -
    </div>
    <span className="count-text">하루 {count}권</span>
    <div className="btn-count" onClick={onIncrease}>
      +
    </div>
  </div>
)

/**
 * 변경 이력 섹션 컴포넌트
 */
const HistorySection = ({ historyData }: { historyData: HistoryItem[] }) => (
  <div className="change-history-section">
    <span className="section-title">변경 이력</span>
    {historyData.map((item) => (
      <div key={item.id} className="change-history-item">
        <span className="history-item-title">{item.title}</span>
        <span className="history-item-date">{item.date}</span>
      </div>
    ))}
  </div>
)

/**
 * 일일목표설정
 */
export default function DailyGoalSetting() {
  const [count, setCount] = useState(3)

  // 변경 이력 데이터
  const historyData: HistoryItem[] = [
    { id: '1', title: '• 하루 3권씩 학습 완료하기', date: '(2025-09-24)' },
    { id: '2', title: '• 하루 2권씩 학습 완료하기', date: '(2025-09-22)' },
    { id: '3', title: '• 하루 1권씩 학습 완료하기', date: '(2025-09-21)' },
  ]

  // 이벤트 핸들러들
  const handleDecreaseCount = () => setCount((prev) => Math.max(1, prev - 1))
  const handleIncreaseCount = () => setCount((prev) => prev + 1)
  const handleCancel = () => {
    // TODO: 취소 로직 구현
  }
  const handleSave = () => {
    // TODO: 저장 로직 구현
  }

  return (
    <DailyGoalSettingStyle>
      <GoalMethodSection onCancel={handleCancel} onSave={handleSave} />
      <CountSection
        count={count}
        onDecrease={handleDecreaseCount}
        onIncrease={handleIncreaseCount}
      />
      <HistorySection historyData={historyData} />
    </DailyGoalSettingStyle>
  )
}

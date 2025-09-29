import { Assets } from '@/8th/assets/asset-library'
import {
  StreakCardStyle,
  StreakStatusStyle,
} from '@/8th/features/FeaturesStyled'
import { CommonTitleStyle, WidgetBoxStyle } from '@/8th/shared/SharedStyled'
import Image from 'next/image'
import { useState } from 'react'
import StreakModal from './StreakModal'

/**
 * 연속학습 카드
 */

interface StreakCardProps {
  streakCount?: number
  totalCount?: number
  earnedDates?: { [key: number]: string }
}

export default function StreakCard({
  streakCount = 0,
  totalCount = 0,
  earnedDates = {},
}: StreakCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <WidgetBoxStyle>
        <StreakCardStyle>
          <CommonTitleStyle onClick={() => setIsModalOpen(true)}>
            연속 학습
          </CommonTitleStyle>
          <StreakStatus
            isStreak={totalCount - streakCount !== 20}
            streakCount={streakCount}
            totalCount={totalCount}
          />
        </StreakCardStyle>
      </WidgetBoxStyle>
      {isModalOpen && (
        <StreakModal
          currentUserStreak={streakCount}
          onClose={() => setIsModalOpen(false)}
          earnedDates={earnedDates}
        />
      )}
    </>
  )
}

function StreakStatus({
  isStreak,
  streakCount,
  totalCount,
}: {
  isStreak: boolean
  streakCount: number
  totalCount: number
}) {
  return (
    <StreakStatusStyle>
      <div className={`streak-progress ${isStreak ? 'active' : ''}`}>
        <div
          className={`streak-progress-fill ${isStreak ? 'active' : ''}`}
          style={{
            width: `${Math.max(0, Math.min(100, ((streakCount - totalCount + 20) / 20) * 100))}%`,
          }}>
          <Image
            src={Assets.Icon.Side.streakFire}
            alt=""
            width={50}
            height={50}
            className="streak-fire-icon"
          />
        </div>
      </div>
      <div className={`streak-progress-text ${isStreak ? 'active' : ''}`}>
        {streakCount}
        <span>/{totalCount} Days in a Row</span>
      </div>
    </StreakStatusStyle>
  )
}

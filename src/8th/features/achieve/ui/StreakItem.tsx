'use client'

import { Assets } from '@/8th/assets/asset-library'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { StreakItemStyle } from '../../FeaturesStyled'

/**
 * 연속학습달성 뱃지
 */

interface StreakItemProps {
  todayStreak?: boolean
  isProgress: boolean
  getAward: boolean
  streakDays?: string
  earnDate?: string
  currentStreak?: number
  targetDays?: number
  totalDays?: number
  currentUserStreak?: number
}

export default function StreakItem({
  todayStreak = false,
  isProgress,
  getAward,
  streakDays,
  earnDate,
  currentStreak = 0,
  targetDays = 0,
  totalDays = 0,
  currentUserStreak = 0,
}: StreakItemProps) {
  return (
    <StreakItemStyle streakDays={streakDays || ''}>
      {getAward ? (
        <BoxStyle
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={10}>
          <Image
            src={streakDays || ''}
            alt="Streak Award"
            width={120}
            height={120}
          />
          <TextStyle fontFamily="sans" fontColor="secondary" fontWeight="bold">
            +{earnDate}
          </TextStyle>
        </BoxStyle>
      ) : isProgress ? (
        <BoxStyle
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={10}>
          {/* 이미지는 연속학습 중, 연속학습 끊김, 연속학습 달성 3가지 케이스가 있음 */}
          <BoxStyle className="container">
            {todayStreak && (
              <Image
                src={Assets.Icon.Side.streakFire}
                alt="Streak Award"
                width={60}
                height={60}
                className="streak-fire-icon"
              />
            )}
            <Image
              src={streakDays || ''}
              alt="Streak Award"
              width={100}
              height={100}
              className="streak-award-gray-image"
            />
            <div className="progress">
              <div
                className={`progress-bar ${todayStreak ? 'today-streak' : ''}`}>
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${Math.min(100, (currentStreak / targetDays) * 100)}%`,
                  }}></div>
              </div>
            </div>
          </BoxStyle>
          <TextStyle fontFamily="sans" fontColor="secondary" fontWeight="bold">
            <TextStyle
              type="span"
              fontFamily="sans"
              fontColor={`${todayStreak ? '#ff374b' : 'secondary'}`}
              fontWeight="bold">
              {currentUserStreak}
            </TextStyle>
            /{totalDays} Days in a Row
          </TextStyle>
        </BoxStyle>
      ) : (
        <BoxStyle className="container">
          <Image
            src={streakDays || ''}
            alt="Streak Award"
            width={100}
            height={100}
            className="streak-award-gray-image"
          />
        </BoxStyle>
      )}
    </StreakItemStyle>
  )
}

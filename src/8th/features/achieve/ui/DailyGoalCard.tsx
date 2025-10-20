'use client'

import { Assets } from '@/8th/assets/asset-library'
import { DailyGoalCardStyle } from '@/8th/features/FeaturesStyled'
import {
  AwardBgStyle,
  AwardImageStyle,
  CommonTitleStyle,
  WidgetBoxStyle,
} from '@/8th/shared/SharedStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import DailyGoalModal from './DailyGoalModal'

// 일일 목표 어워드 이미지 데이터
const DAILY_GOAL_AWARDS = [
  { threshold: 1000, image: Assets.Icon.DailyGoal.dailyGoal1000 },
  { threshold: 950, image: Assets.Icon.DailyGoal.dailyGoal950 },
  { threshold: 900, image: Assets.Icon.DailyGoal.dailyGoal900 },
  { threshold: 850, image: Assets.Icon.DailyGoal.dailyGoal850 },
  { threshold: 800, image: Assets.Icon.DailyGoal.dailyGoal800 },
  { threshold: 750, image: Assets.Icon.DailyGoal.dailyGoal750 },
  { threshold: 700, image: Assets.Icon.DailyGoal.dailyGoal700 },
  { threshold: 650, image: Assets.Icon.DailyGoal.dailyGoal650 },
  { threshold: 600, image: Assets.Icon.DailyGoal.dailyGoal600 },
  { threshold: 550, image: Assets.Icon.DailyGoal.dailyGoal550 },
  { threshold: 500, image: Assets.Icon.DailyGoal.dailyGoal500 },
  { threshold: 450, image: Assets.Icon.DailyGoal.dailyGoal450 },
  { threshold: 400, image: Assets.Icon.DailyGoal.dailyGoal400 },
  { threshold: 350, image: Assets.Icon.DailyGoal.dailyGoal350 },
  { threshold: 300, image: Assets.Icon.DailyGoal.dailyGoal300 },
  { threshold: 250, image: Assets.Icon.DailyGoal.dailyGoal250 },
  { threshold: 200, image: Assets.Icon.DailyGoal.dailyGoal200 },
  { threshold: 175, image: Assets.Icon.DailyGoal.dailyGoal175 },
  { threshold: 150, image: Assets.Icon.DailyGoal.dailyGoal150 },
  { threshold: 125, image: Assets.Icon.DailyGoal.dailyGoal125 },
  { threshold: 100, image: Assets.Icon.DailyGoal.dailyGoal100 },
  { threshold: 75, image: Assets.Icon.DailyGoal.dailyGoal75 },
  { threshold: 50, image: Assets.Icon.DailyGoal.dailyGoal50 },
  { threshold: 25, image: Assets.Icon.DailyGoal.dailyGoal25 },
]

interface DailyGoalCardProps {
  dailyGoal?: number
  dailyProgress?: number
  totalDailyGoals?: number
}

export default function DailyGoalCard({
  dailyGoal = 1,
  dailyProgress = 3,
  totalDailyGoals = 1,
}: DailyGoalCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hasAward = DAILY_GOAL_AWARDS.some(
    ({ threshold }) => totalDailyGoals === threshold,
  )

  return (
    <>
      <WidgetBoxStyle
        todayGoal={dailyProgress === dailyGoal && !hasAward}
        getAward={dailyProgress === dailyGoal && hasAward}>
        <DailyGoalCardStyle>
          <CommonTitleStyle
            todayGoal={dailyProgress === dailyGoal && !hasAward}
            getAward={dailyProgress === dailyGoal && hasAward}
            onClick={() => setIsModalOpen(true)}>
            일일 목표
          </CommonTitleStyle>
          {dailyProgress === dailyGoal ? (
            <DailyGoalComplete
              dailyGoal={dailyGoal}
              dailyProgress={dailyProgress}
              totalDailyGoals={totalDailyGoals}
            />
          ) : (
            <DailyGoalProgress
              dailyProgress={dailyProgress}
              dailyGoal={dailyGoal}
            />
          )}
        </DailyGoalCardStyle>
        {dailyProgress === dailyGoal && hasAward && (
          <>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={`petal${i + 3}`} className={`petal${i + 3}`} />
            ))}
          </>
        )}
      </WidgetBoxStyle>
      {isModalOpen && <DailyGoalModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

// 일일 목표 진행 중 컴포넌트
interface DailyGoalProgressProps {
  dailyProgress: number
  dailyGoal: number
}

function DailyGoalProgress({
  dailyProgress,
  dailyGoal,
}: DailyGoalProgressProps) {
  return (
    <div className="body">
      {/* 일일 목표가 학습 권수인 경우 */}
      {/* <div className="comment">
        오늘 {dailyGoal}권,
        <br /> 학습을 완료하세요!
      </div> */}
      {/* 일일 목표가 포인트 획득인 경우 */}
      <div className="comment">
        오늘 {dailyGoal}P,
        <br />
        포인트를 획득하세요!
      </div>
      <div className="progress">
        <div className="donut-progress">
          <svg className="donut-chart" width="100" height="100">
            <circle
              className="donut-hole"
              cx="50"
              cy="50"
              r="35"
              fill="transparent"
            />
            <circle
              className="donut-ring"
              cx="50"
              cy="50"
              r="35"
              fill="transparent"
              stroke="var(--line-color-primary)"
              strokeWidth="6"
            />
            <circle
              className="donut-segment"
              cx="50"
              cy="50"
              r="35"
              fill="transparent"
              stroke="var(--color-red-medium)"
              strokeWidth="6"
              strokeDasharray={`${(dailyProgress / dailyGoal) * 220} 220`}
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
              strokeLinecap="round"
            />
          </svg>
          {/* 일일 목표가 학습 권수인 경우 */}
          {/* <div className="donut-text">
            <span
              className={`daily-progress ${dailyProgress > 0 ? 'active' : ''}`}>
              {dailyProgress}
            </span>
            <span className="daily-goal">/{dailyGoal}</span>
          </div> */}
          {/* 일일 목표가 포인트 획득인 경우 */}
          <div className="donut-text">
            <span
              className={`daily-progress ${dailyProgress > 0 ? 'active' : ''}`}>
              +{dailyProgress}P
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface DailyGoalCompleteProps {
  dailyGoal: number
  dailyProgress: number
  totalDailyGoals: number
}

// 일일 목표 달성 완료 컴포넌트
function DailyGoalComplete({
  dailyGoal,
  dailyProgress,
  totalDailyGoals,
}: DailyGoalCompleteProps) {
  const hasAward = DAILY_GOAL_AWARDS.some(
    ({ threshold }) => totalDailyGoals === threshold,
  )

  const getAwardImage = () => {
    const award = DAILY_GOAL_AWARDS.find(
      ({ threshold }) => totalDailyGoals === threshold,
    )
    return award?.image || Assets.Icon.DailyGoal.dailyGoal25
  }

  const getRandomTitle = () => {
    const titles = [
      'Awesome job!',
      'Great work!',
      'Way to go!',
      'Superstar!',
      'High five!',
      "You're amazing!",
      'Fantastic job!',
      'Boom! You did it!',
    ]
    return titles[Math.floor(Math.random() * titles.length)]
  }

  return (
    <div className="body-complete">
      {hasAward ? (
        <div className="comment award">
          <div className="comment-title">Achieved {totalDailyGoals} times!</div>
        </div>
      ) : (
        <div className="comment">
          <div className="comment-title">{getRandomTitle()}</div>
          <div className="comment-text">오늘의 목표를 달성했어요!</div>
        </div>
      )}
      {hasAward ? (
        <BoxStyle position="relative" width="100px" height="100px">
          <AwardImageStyle>
            <Image
              src={getAwardImage()}
              alt="Daily Goal Award"
              width={80}
              height={80}
            />
          </AwardImageStyle>
          <AwardBgStyle />
        </BoxStyle>
      ) : (
        <div className="complete">
          {dailyGoal}/{dailyProgress}
        </div>
      )}
    </div>
  )
}

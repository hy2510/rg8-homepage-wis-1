import { DailyGoalCardStyle } from '@/8th/features/FeaturesStyled'
import { CommonTitleStyle, WidgetBoxStyle } from '@/8th/shared/SharedStyled'

/**
 * 일일목표 카드
 */

interface DailyGoalCardProps {
  dailyGoal?: number
  dailyProgress?: number
}

export default function DailyGoalCard({
  dailyGoal = 3,
  dailyProgress = 2,
}: DailyGoalCardProps) {
  return (
    <WidgetBoxStyle>
      <DailyGoalCardStyle>
        <CommonTitleStyle>일일 목표</CommonTitleStyle>
        <div className="body">
          <div className="comment">
            오늘 {dailyGoal}권,
            <br /> 학습을 완료하세요!
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
              <div className="donut-text">
                <span
                  className={`daily-progress ${dailyProgress > 0 ? 'active' : ''}`}>
                  {dailyProgress}
                </span>
                <span className="daily-goal">/{dailyGoal}</span>
              </div>
            </div>
          </div>
        </div>
      </DailyGoalCardStyle>
    </WidgetBoxStyle>
  )
}

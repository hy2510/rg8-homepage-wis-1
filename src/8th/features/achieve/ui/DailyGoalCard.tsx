import { CommonTitleStyle, WidgetBoxStyle } from '@/8th/shared/ui/Widgets'
import styled from 'styled-components'

/**
 * 일일목표 카드
 */

export default function DailyGoalCard({
  dailyGoal = 3,
  dailyProgress = 2,
}: {
  dailyGoal?: number
  dailyProgress?: number
}) {
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

const DailyGoalCardStyle = styled.div`
  width: 100%;

  .body {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 10px;
    align-items: center;
  }

  .comment {
    font-size: 1.1em;
    font-weight: bold;
    font-family: var(--font-family-secondary);
    padding-left: 10px;
  }

  .progress {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .donut-progress {
    position: relative;
    width: 100px;
    height: 100px;

    &::after {
      content: '';
      position: absolute;
      top: 14px;
      left: calc(50% - 1px);
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 50%;
      z-index: 10;
    }
  }

  .donut-chart {
    position: absolute;
    top: 0;
    left: 0;
  }

  .donut-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1em;
    text-align: center;

    .daily-progress {
      color: var(--font-color-secondary);

      &.active {
        color: var(--font-color-primary);
      }
    }

    .daily-goal {
      color: var(--font-color-secondary);
    }
  }
`

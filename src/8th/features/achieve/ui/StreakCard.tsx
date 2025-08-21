import { Assets } from '@/8th/assets/asset-library'
import { CommonTitleStyle, WidgetBoxStyle } from '@/8th/shared/ui/Widgets'
import Image from 'next/image'
import styled from 'styled-components'

/**
 * 연속학습 카드
 */
export default function StreakCard({
  streakCount = 0,
  totalCount = 20,
}: {
  streakCount?: number
  totalCount?: number
}) {
  return (
    <WidgetBoxStyle>
      <StreakCardStyle>
        <CommonTitleStyle>연속 학습</CommonTitleStyle>
        <StreakStatus
          isStreak={totalCount - streakCount !== 20}
          streakCount={streakCount}
          totalCount={totalCount}
        />
      </StreakCardStyle>
    </WidgetBoxStyle>
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

const StreakCardStyle = styled.div`
  width: 100%;
`

const StreakStatusStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  .streak-progress {
    width: 100%;
    height: 24px;
    border-radius: 100px;
    background-color: var(--color-gray-light);

    &.active {
      background-color: rgb(255, 55, 75, 0.2);
    }

    .streak-progress-fill {
      height: 100%;
      border-radius: 100px;
      background-color: var(--color-gray-medium);
      background-image: url(${Assets.Icon.checkWhite.src});
      background-size: 24px;
      background-repeat: repeat-x;
      position: relative;
      transition: width 1s ease-in-out;

      .streak-fire-icon {
        position: absolute;
        top: calc(50% - 15px);
        right: -15px;
        width: 30px;
        height: 30px;
        z-index: 1;
        filter: grayscale(100%);
        opacity: 0.8;
      }

      &.active {
        background-color: var(--color-red-medium);

        .streak-fire-icon {
          top: calc(50% - 30px);
          right: -25px;
          width: 50px;
          height: 50px;
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }

  .streak-progress-text {
    width: 100%;
    font-size: 0.9em;
    color: var(--font-color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      color: var(--color-red-medium);
    }

    span {
      color: var(--font-color-secondary);
    }
  }
`

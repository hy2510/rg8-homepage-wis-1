import { Assets } from '@/8th/assets/asset-library'
import {
  StreakCardStyle,
  StreakStatusStyle,
} from '@/8th/features/FeaturesStyled'
import {
  AwardBgStyle,
  AwardImageStyle,
  CommonTitleStyle,
  WidgetBoxStyle,
} from '@/8th/shared/SharedStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import StreakModal from './StreakModal'

interface StreakCardProps {
  todayStreak?: boolean
  streakCount?: number
  awardCount?: number
  earnedDates?: { [key: number]: string }
}

/**
 * 연속학습 카드 클래식 버전 컴포넌트
 */
export function StreakCardClassic() {
  return (
    <WidgetBoxStyle>
      <StreakCardStyle>
        <CommonTitleStyle noLink>연속 학습</CommonTitleStyle>
        <BoxStyle
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
          padding="10px">
          <Image
            src={Assets.Icon.Side.streakFire}
            alt=""
            width={50}
            height={50}
          />
          <TextStyle fontSize="xlarge">20 Days</TextStyle>
        </BoxStyle>
      </StreakCardStyle>
    </WidgetBoxStyle>
  )
}

/**
 * 연속학습 카드 컴포넌트
 */
export default function StreakCard({
  todayStreak = false,
  streakCount = 0,
  awardCount = 0,
  earnedDates = {},
}: StreakCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <WidgetBoxStyle getAward={awardCount === streakCount}>
        <StreakCardStyle>
          <CommonTitleStyle
            onClick={() => setIsModalOpen(true)}
            getAward={awardCount === streakCount}>
            연속 학습
          </CommonTitleStyle>
          <StreakStatus
            isReady={!todayStreak && awardCount - streakCount === 20}
            isStreak={todayStreak}
            streakCount={streakCount}
            awardCount={awardCount}
          />
        </StreakCardStyle>
        {awardCount === streakCount && (
          <>
            <div className="petal3" />
            <div className="petal4" />
            <div className="petal5" />
            <div className="petal6" />
            <div className="petal7" />
            <div className="petal8" />
            <div className="petal9" />
            <div className="petal10" />
            <div className="petal11" />
            <div className="petal12" />
            <div className="petal13" />
            <div className="petal14" />
          </>
        )}
      </WidgetBoxStyle>
      {isModalOpen && (
        <StreakModal
          todayStreak={todayStreak}
          currentUserStreak={streakCount}
          onClose={() => setIsModalOpen(false)}
          earnedDates={earnedDates}
        />
      )}
    </>
  )
}

interface StreakStatusProps {
  isReady: boolean
  isStreak: boolean
  streakCount: number
  awardCount: number
}

/**
 * 연속학습 상태 표시 컴포넌트
 */
function StreakStatus({
  isReady,
  isStreak,
  streakCount,
  awardCount,
}: StreakStatusProps) {
  const hasAward = streakCount === awardCount && streakCount > 0

  const getAwardImage = () => {
    const awardImages = [
      { threshold: 320, image: Assets.Icon.Streak.streakMax1.src },
      { threshold: 300, image: Assets.Icon.Streak.streak300Days.src },
      { threshold: 260, image: Assets.Icon.Streak.streak260Days.src },
      { threshold: 240, image: Assets.Icon.Streak.streak240Days.src },
      { threshold: 220, image: Assets.Icon.Streak.streak220Days.src },
      { threshold: 200, image: Assets.Icon.Streak.streak200Days.src },
      { threshold: 180, image: Assets.Icon.Streak.streak180Days.src },
      { threshold: 160, image: Assets.Icon.Streak.streak160Days.src },
      { threshold: 140, image: Assets.Icon.Streak.streak140Days.src },
      { threshold: 120, image: Assets.Icon.Streak.streak120Days.src },
      { threshold: 100, image: Assets.Icon.Streak.streak100Days.src },
      { threshold: 80, image: Assets.Icon.Streak.streak80Days.src },
      { threshold: 60, image: Assets.Icon.Streak.streak60Days.src },
      { threshold: 40, image: Assets.Icon.Streak.streak40Days.src },
      { threshold: 20, image: Assets.Icon.Streak.streak20Days.src },
    ]

    const award = awardImages.find(({ threshold }) => awardCount >= threshold)
    return award?.image || ''
  }

  const renderAwardStatus = () => (
    <BoxStyle
      display="grid"
      gridTemplateColumns="1fr 100px"
      alignItems="center"
      gap={5}>
      <TextStyle
        fontFamily="sans"
        fontColor="#fff"
        fontWeight="bold"
        fontSize="xlarge"
        padding="0 0 0 5px">
        Great job! {awardCount}-Day Streak!
      </TextStyle>
      <BoxStyle position="relative" width="100px" height="100px">
        <AwardImageStyle>
          <Image
            src={getAwardImage()}
            alt="Streak Award"
            width={80}
            height={80}
          />
        </AwardImageStyle>
        <AwardBgStyle />
      </BoxStyle>
    </BoxStyle>
  )

  const renderReadyStatus = () => (
    <div className="streak-status-ready">
      <Image
        src={Assets.Icon.Side.streakReady}
        alt=""
        width={50}
        height={50}
        className="streak-status-ready-icon"
      />
      <div className="streak-progress-text">Keep going! Study today!</div>
    </div>
  )

  const renderProgressStatus = () => {
    const progressWidth = Math.max(
      0,
      Math.min(100, ((streakCount - awardCount + 20) / 20) * 100),
    )

    return (
      <>
        <div className={`streak-progress ${isStreak ? 'active' : ''}`}>
          <div
            className={`streak-progress-fill ${isStreak ? 'active' : ''}`}
            style={{ width: `${progressWidth}%` }}>
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
          <span>/{awardCount} Days in a Row</span>
        </div>
      </>
    )
  }

  return (
    <StreakStatusStyle>
      {hasAward
        ? renderAwardStatus()
        : isReady
          ? renderReadyStatus()
          : renderProgressStatus()}
    </StreakStatusStyle>
  )
}

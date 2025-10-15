import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LevelMasterItemStyle } from '../../FeaturesStyled'

/**
 * 레벨마스터 뱃지
 */

interface LevelMasterItemProps {
  isComplete: boolean
  level: string
  booksRead: number
  earnPoints: number
  totalPoints: number
  imgSrc: string
  isCurrentLevel: string
  onClick?: (level: string) => void
}

export default function LevelMasterItem({
  isComplete,
  level,
  booksRead,
  earnPoints,
  totalPoints,
  imgSrc,
  isCurrentLevel,
  onClick,
}: LevelMasterItemProps) {
  const [isCurrent, setIsCurrent] = useState(level === isCurrentLevel)

  // isCurrentLevel이 변경되면 isCurrent 상태도 업데이트
  useEffect(() => {
    setIsCurrent(level === isCurrentLevel)
  }, [level, isCurrentLevel])

  const handleClick = () => {
    if (onClick) {
      onClick(level)
    }
  }

  return (
    <LevelMasterItemStyle>
      {isComplete && (
        <BoxStyle
          className={`container ${isCurrent ? 'current' : ''} complete`}
          onClick={handleClick}>
          <Image src={imgSrc} alt="Award Challenge" width={100} height={100} />
          <BoxStyle className={`check-mark ${isCurrent ? 'current' : ''}`} />
        </BoxStyle>
      )}
      {!isComplete && (
        <BoxStyle
          className={`container ${isCurrent ? 'current' : ''}`}
          onClick={handleClick}>
          <TextStyle className={`level ${isCurrent ? 'current' : ''}`}>
            {level}
          </TextStyle>
          <BoxStyle className={`check-mark ${isCurrent ? 'current' : ''}`} />
          {isCurrent && (
            <div className="progress">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${(earnPoints / totalPoints) * 100}%`,
                  }}></div>
              </div>
            </div>
          )}
        </BoxStyle>
      )}
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}>
        <TextStyle className="books-read">
          {isComplete ? '[Level Master] ' : ''}
          {booksRead} Books Read
        </TextStyle>
        <TextStyle className="earn-points">
          Earn {earnPoints}/{totalPoints}P
        </TextStyle>
        {isComplete && (
          <TextStyle className="complete-text">CERTIFICATE</TextStyle>
        )}
      </BoxStyle>
    </LevelMasterItemStyle>
  )
}

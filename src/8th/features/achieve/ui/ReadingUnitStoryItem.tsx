'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import { useState } from 'react'
import {
  CurrentReadingUnitImageStyle,
  EarnedReadingUnitImageStyle,
  NotCompletedReadingUnitImageStyle,
  ReadingUnitPrologueStyle,
  ReadingUnitStoryItemStyle,
} from '../../FeaturesStyled'

/**
 * 리딩유닛 스토리
 */

interface ReadingUnitStoryItemProps {
  type: 'prologue' | 'earned' | 'current' | 'notCompleted'
  readingUnitName?: string
  readingUnitPrologueText?: string
  imgSrc?: string
  imgAniSrc?: string
  earnedTitle?: string
  earnedMessage?: string
  currentPoint?: number
  maxPoint?: number
  previousMaxPoint?: number
}

export default function ReadingUnitStoryItem({
  type,
  readingUnitName,
  readingUnitPrologueText,
  imgSrc,
  imgAniSrc,
  earnedTitle,
  earnedMessage,
  currentPoint,
  maxPoint,
  previousMaxPoint,
}: ReadingUnitStoryItemProps) {
  return (
    <ReadingUnitStoryItemStyle>
      {type === 'prologue' && (
        <ReadingUnitPrologue
          readingUnitName={readingUnitName || ''}
          readingUnitPrologueText={readingUnitPrologueText || ''}
        />
      )}
      {type === 'earned' && (
        <EarnedReadingUnitImage
          imgSrc={imgSrc || ''}
          imgAniSrc={imgAniSrc || ''}
          earnedTitle={earnedTitle || ''}
          earnedMessage={earnedMessage || ''}
        />
      )}
      {type === 'current' && (
        <CurrentReadingUnitImage
          imgSrc={imgSrc || ''}
          currentPoint={currentPoint || 0}
          maxPoint={maxPoint || 0}
          previousMaxPoint={previousMaxPoint || 0}
        />
      )}
      {type === 'notCompleted' && (
        <NotCompletedReadingUnitImage imgSrc={imgSrc || ''} />
      )}
    </ReadingUnitStoryItemStyle>
  )
}

// 진행중인 리딩유닛의 프롤로그
function ReadingUnitPrologue({
  readingUnitName,
  readingUnitPrologueText,
}: {
  readingUnitName: string
  readingUnitPrologueText: string
}) {
  return (
    <ReadingUnitPrologueStyle>
      <div className="reading-unit-name">··· {readingUnitName} ···</div>
      <div className="reading-unit-prologue-container">
        <div className="reading-unit-prologue-text">
          {readingUnitPrologueText}
        </div>
      </div>
    </ReadingUnitPrologueStyle>
  )
}

// 획득한 리딩유닛 이미지
function EarnedReadingUnitImage({
  imgSrc = '',
  imgAniSrc = '',
  earnedTitle = '',
  earnedMessage = '',
}: {
  imgSrc: string
  imgAniSrc: string
  earnedTitle: string
  earnedMessage: string
}) {
  const [isShowAni, setIsShowAni] = useState(false)

  return (
    <EarnedReadingUnitImageStyle onClick={() => setIsShowAni(!isShowAni)}>
      <Image
        src={isShowAni ? imgAniSrc : imgSrc}
        alt=""
        width={150}
        height={150}
        className={`earned-reading-unit-image ${isShowAni ? 'active' : ''}`}
      />

      {!isShowAni && (
        <div className="play-icon-container">
          <Image
            src={Assets.Icon.playRed}
            alt=""
            width={30}
            height={30}
            className="play-icon"
          />
        </div>
      )}

      {isShowAni && (
        <div className="earned-reading-unit-text-container">
          <div className="title">{earnedTitle}</div>
          <div className="message">{earnedMessage}</div>
        </div>
      )}
    </EarnedReadingUnitImageStyle>
  )
}

// 진행중인 리딩유닛 이미지
function CurrentReadingUnitImage({
  imgSrc,
  currentPoint,
  maxPoint,
  previousMaxPoint,
}: {
  imgSrc: string
  currentPoint: number
  maxPoint: number
  previousMaxPoint: number
}) {
  // 이전 maxPoint를 뺀 나머지 구간에서의 진행률 계산
  const progressRange = maxPoint - previousMaxPoint
  const currentProgress = Math.max(0, currentPoint - previousMaxPoint)
  const progressPercentage =
    progressRange > 0
      ? Math.min(100, (currentProgress / progressRange) * 100)
      : 0

  return (
    <CurrentReadingUnitImageStyle>
      <div className="current-reading-unit-image-container heartbeat">
        <div className="current-reading-unit-image-overlay" />
        <Image
          src={imgSrc}
          alt=""
          width={150}
          height={150}
          className="current-reading-unit-image"
        />
      </div>
      <div className="progress">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: `${progressPercentage}%`,
            }}></div>
        </div>
      </div>
      <div className="current-reading-unit-point">
        <div className="user-point">{currentPoint}</div>
        <div>/</div>
        <div>{maxPoint}P</div>
      </div>
    </CurrentReadingUnitImageStyle>
  )
}

// 미진행 리딩유닛 이미지
function NotCompletedReadingUnitImage({ imgSrc }: { imgSrc: string }) {
  return (
    <NotCompletedReadingUnitImageStyle>
      <div className="not-completed-reading-unit-image-container">
        <div className="not-completed-reading-unit-image-overlay" />
        <Image
          src={imgSrc}
          alt=""
          width={150}
          height={150}
          className="not-completed-reading-unit-image"
        />
      </div>
    </NotCompletedReadingUnitImageStyle>
  )
}

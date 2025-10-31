'use client'

import { Assets } from '@/8th/assets/asset-library'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { StreakLine } from '@/8th/shared/ui/Misc'
import { useEffect, useRef, useState } from 'react'
import { BookInfoModalStyle } from '../../FeaturesStyled'
import LevelMasterItem from './LevelMasterItem'

// 레벨 데이터 타입 정의
export interface LevelData {
  level: string
  booksRead: number
  earnPoints: number
  totalPoints: number
  imgSrc: string
  isComplete: boolean
}

/**
 * 레벨마스터 모달
 */
export default function LevelMasterModal({
  onCloseModal,
  levelData: externalLevelData,
  currentLevel: externalCurrentLevel = 'KB',
}: {
  onCloseModal: () => void
  levelData?: LevelData[]
  currentLevel?: string
}) {
  const [currentLevel, setCurrentLevel] = useState(externalCurrentLevel)
  const modalBodyRef = useRef<HTMLDivElement>(null)

  // 외부에서 받은 currentLevel이 변경되면 내부 상태도 업데이트
  useEffect(() => {
    setCurrentLevel(externalCurrentLevel)
  }, [externalCurrentLevel])

  // 모달이 열릴 때 현재 레벨로 스크롤
  useEffect(() => {
    const scrollToCurrentLevel = () => {
      if (modalBodyRef.current) {
        const currentLevelElement = modalBodyRef.current.querySelector(
          `[data-level="${currentLevel}"]`,
        )
        if (currentLevelElement) {
          currentLevelElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }
    }

    // 모달이 완전히 렌더링된 후 스크롤 실행
    const timeoutId = setTimeout(scrollToCurrentLevel, 100)

    return () => clearTimeout(timeoutId)
  }, [currentLevel])

  // 레벨 클릭 핸들러
  const handleLevelClick = (level: string) => {
    const confirmMessage = `학습 레벨을 ${level}로 변경하시겠습니까?
(이 설정은 DAILY RG와 E-BOOK, BOOK QUIZ의 기본 레벨로 적용됩니다.)`
    if (window.confirm(confirmMessage)) {
      setCurrentLevel(level)
    }
  }

  // 외부에서 받은 데이터가 있으면 사용하고, 없으면 기본 데이터 사용
  const levelData: LevelData[] = externalLevelData || [
    {
      level: 'PK',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.levelprek,
      isComplete: true,
    },
    {
      level: 'KA',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.levelka,
      isComplete: true,
    },
    {
      level: 'KB',
      booksRead: 130,
      earnPoints: 40,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.levelkb,
      isComplete: false,
    },
    {
      level: 'KC',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.levelkc,
      isComplete: false,
    },
    {
      level: '1A',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level1a,
      isComplete: false,
    },
    {
      level: '1B',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level1b,
      isComplete: false,
    },
    {
      level: '1C',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level1c,
      isComplete: false,
    },
    {
      level: '2A',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level2a,
      isComplete: false,
    },
    {
      level: '2B',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level2b,
      isComplete: false,
    },
    {
      level: '2C',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level2c,
      isComplete: false,
    },
    {
      level: '3A',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level3a,
      isComplete: false,
    },
    {
      level: '3B',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level3b,
      isComplete: false,
    },
    {
      level: '3C',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level3c,
      isComplete: false,
    },
    {
      level: '4A',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level4a,
      isComplete: false,
    },
    {
      level: '4B',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level4b,
      isComplete: false,
    },
    {
      level: '4C',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level4c,
      isComplete: false,
    },
    {
      level: '5A',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level5a,
      isComplete: false,
    },
    {
      level: '5B',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level5b,
      isComplete: false,
    },
    {
      level: '5C',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level5c,
      isComplete: false,
    },
    {
      level: '6A',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level6a,
      isComplete: false,
    },
    {
      level: '6B',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level6b,
      isComplete: false,
    },
    {
      level: '6C',
      booksRead: 130,
      earnPoints: 100,
      totalPoints: 100,
      imgSrc: Assets.LevelMaster.level6c,
      isComplete: false,
    },
  ]

  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="title">학습 레벨</div>
          <div className="btn-close" onClick={onCloseModal} />
        </ModalHeaderStyle>
        <ModalBodyStyle viewCloud ref={modalBodyRef}>
          {levelData.map((level, index) => (
            <div key={level.level} data-level={level.level}>
              <LevelMasterItem
                level={level.level}
                booksRead={level.booksRead}
                earnPoints={level.earnPoints}
                totalPoints={level.totalPoints}
                imgSrc={level.imgSrc}
                isComplete={level.isComplete}
                isCurrentLevel={currentLevel}
                onClick={handleLevelClick}
              />
              {index < levelData.length - 1 && <StreakLine />}
            </div>
          ))}
        </ModalBodyStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

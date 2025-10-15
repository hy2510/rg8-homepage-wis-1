'use client'

import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { BoxStyle, StreakLine } from '@/8th/shared/ui/Misc'
import { useLanguagePackContext } from '@/localization/client/LanguagePackContext'
import { useEffect, useRef } from 'react'
import { BookInfoModalStyle } from '../../FeaturesStyled'
import { getDodoFriends8thData } from '../dodoFriends8thData'
import ReadingUnitStoryItem from './ReadingUnitStoryItem'

/**
 * 리딩유닛 모달
 */
interface ReadingUnitStoryModalProps {
  onClose: () => void
}

export default function ReadingUnitStoryModal({
  onClose,
}: ReadingUnitStoryModalProps) {
  const { language } = useLanguagePackContext()
  const point = 1200 // 학생 토탈 포인트
  const dodofriends = getDodoFriends8thData(language)

  // 전체 캐릭터 중에서 current 스토리 찾기
  const findGlobalCurrentStory = () => {
    for (const friend of dodofriends) {
      if (point < friend.minPoint) continue // 잠금된 캐릭터는 제외

      for (let i = 0; i < friend.list.length; i++) {
        const story = friend.list[i]
        const isCurrent =
          point < story.point && (i === 0 || point >= friend.list[i - 1].point)

        if (isCurrent) {
          return { friend, story, index: i }
        }
      }
    }
    return null
  }

  const globalCurrentStory = findGlobalCurrentStory()
  const modalContentRef = useRef<HTMLDivElement | null>(null)

  // current 스토리 위치로 자동 스크롤
  useEffect(() => {
    if (globalCurrentStory) {
      const timer = setTimeout(() => {
        const currentElement = document.querySelector(
          `[data-story-id="${globalCurrentStory.friend.id}_${globalCurrentStory.index}"]`,
        )

        if (currentElement) {
          currentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [globalCurrentStory])

  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="title">프렌즈 스토리</div>
          <div className="btn-close" onClick={onClose} />
        </ModalHeaderStyle>

        <ModalBodyStyle viewCloud ref={modalContentRef}>
          <BoxStyle display="flex" flexDirection="column">
            <BoxStyle
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between">
              {dodofriends.map((friend, friendIndex) => {
                const isFriendUnlocked = point >= friend.minPoint

                return (
                  <div key={friend.id} style={{ width: '100%' }}>
                    {friendIndex > 0 && <StreakLine />}
                    {isFriendUnlocked && (
                      <>
                        <ReadingUnitStoryItem
                          type="prologue"
                          readingUnitName={friend.name}
                          readingUnitPrologueText={friend.description}
                        />
                        <StreakLine />
                      </>
                    )}
                    {friend.list.map((story, storyIndex) => {
                      const isEarned = point >= story.point
                      const isCurrent =
                        globalCurrentStory &&
                        globalCurrentStory.friend.id === friend.id &&
                        globalCurrentStory.index === storyIndex

                      // 이전 스토리의 포인트 계산
                      const previousMaxPoint =
                        storyIndex > 0
                          ? friend.list[storyIndex - 1].point
                          : friend.minPoint

                      return (
                        <div
                          key={`${friend.id}_${storyIndex}`}
                          data-story-id={`${friend.id}_${storyIndex}`}>
                          <ReadingUnitStoryItem
                            type={
                              isEarned
                                ? 'earned'
                                : isCurrent
                                  ? 'current'
                                  : 'notCompleted'
                            }
                            imgSrc={story.imagePath}
                            imgAniSrc={story.imagePath2}
                            earnedTitle={story.title}
                            earnedMessage={story.description}
                            currentPoint={point}
                            maxPoint={story.point}
                            previousMaxPoint={previousMaxPoint}
                          />
                          {storyIndex < friend.list.length - 1 && (
                            <StreakLine />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </BoxStyle>
          </BoxStyle>
        </ModalBodyStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

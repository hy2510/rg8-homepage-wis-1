'use client'

import { Assets } from '@/8th/assets/asset-library'
import {
  DailyRGCourseListStyle,
  QuickJumpButtonStyle,
} from '@/8th/features/FeaturesStyled'
import DailyRGBookItem from '@/8th/features/daily/ui/DailyRGBookItem'
import DailyRGCourse from '@/8th/features/daily/ui/DailyRGCourse'
import DailyRGLevel from '@/8th/features/daily/ui/DailyRGLevel'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { Gap } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { dailyRgBooksData } from './sampleDailyRgList'

export default function Page() {
  const currentItemRef = useRef<HTMLDivElement>(null)
  const quickButtonRef = useRef<HTMLButtonElement>(null)
  const [showQuickJump, setShowQuickJump] = useState(false)
  const [isCurrentBelow, setIsCurrentBelow] = useState(false)
  const [currentBookId, setCurrentBookId] = useState<string>(() => {
    const incompleteBook = dailyRgBooksData.find(
      (book) => book.isCompleted === 0,
    )
    return incompleteBook?.id || dailyRgBooksData[0]?.id || ''
  })
  const [themeColor] = useState<string>('#B535DC')

  // 현재 책으로 스크롤하는 함수
  const scrollToCurrentBook = (smooth = false) => {
    if (!currentItemRef.current) return

    const element = currentItemRef.current
    const elementRect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const elementHeight = elementRect.height

    const targetScrollTop =
      window.scrollY + elementRect.top - viewportHeight / 2 + elementHeight / 2

    window.scrollTo({
      top: targetScrollTop,
      behavior: smooth ? 'smooth' : 'auto',
    })

    // 즉시 스크롤의 경우 정확성 재확인
    if (!smooth) {
      // 첫 번째 재확인
      setTimeout(() => {
        if (currentItemRef.current) {
          const rect = currentItemRef.current.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementHeight = rect.height
          const newTargetScrollTop =
            elementTop - window.innerHeight / 2 + elementHeight / 2

          window.scrollTo({
            top: newTargetScrollTop,
            behavior: 'auto',
          })

          // 두 번째 재확인
          setTimeout(() => {
            if (currentItemRef.current) {
              const finalRect = currentItemRef.current.getBoundingClientRect()
              const finalTop = finalRect.top + window.scrollY
              const finalElementHeight = finalRect.height
              const finalTargetScrollTop =
                finalTop - window.innerHeight / 2 + finalElementHeight / 2

              window.scrollTo({
                top: finalTargetScrollTop,
                behavior: 'auto',
              })
            }
          }, 50)
        }
      }, 50)
    }

    if (smooth) {
      setTimeout(() => setShowQuickJump(false), 1000)
    }
  }

  // 현재 책이 화면 중간에 있는지 확인
  const checkIfCurrentInView = () => {
    if (!currentItemRef.current) return

    const element = currentItemRef.current
    const elementRect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    const isInCenter =
      elementRect.top <= viewportHeight / 2 + 100 &&
      elementRect.bottom >= viewportHeight / 2 - 100

    setShowQuickJump(!isInCenter)

    // 현재 아이템이 버튼 기준 위/아래에 있는지 계산
    if (quickButtonRef.current) {
      const buttonRect = quickButtonRef.current.getBoundingClientRect()
      const elementCenterY = elementRect.top + elementRect.height / 2
      const buttonCenterY = buttonRect.top + buttonRect.height / 2
      setIsCurrentBelow(elementCenterY > buttonCenterY)
    }
  }

  // 책 완료 처리
  const completeBook = (bookId: string) => {
    console.log(`Book ${bookId} completed!`)
    const nextIncompleteBook = dailyRgBooksData.find(
      (book) => book.isCompleted === 0,
    )
    if (nextIncompleteBook) {
      setCurrentBookId(nextIncompleteBook.id)
    }
  }

  // 초기 스크롤 설정
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      scrollToCurrentBook(false)
      setTimeout(checkIfCurrentInView, 100)
    }, 300)

    return () => clearTimeout(scrollTimeout)
  }, [currentBookId])

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => checkIfCurrentInView()
    window.addEventListener('scroll', handleScroll, { passive: true })

    // 초기 체크
    const initialCheck = setTimeout(checkIfCurrentInView, 150)

    return () => {
      clearTimeout(initialCheck)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <BasicGridLayout leftContainerGap={5}>
      <DailyRGLevel />
      <DailyRGCourseListStyle>
        <DailyRGCourse
          title="1. Learn the Alphabet"
          bookCount={10}
          total={26}
          isCurrent={true}
          bgColor={themeColor}
          progressColor="#ffca2b"
        />

        {dailyRgBooksData.map((book) => (
          <DailyRGBookItem
            key={book.id}
            ref={book.id === currentBookId ? currentItemRef : null}
            bookNumber={book.bookNumber}
            imgUrl={book.imgUrl}
            title={book.title}
            point={book.point}
            isCurrent={book.id === currentBookId}
            isCompleted={book.isCompleted}
            isPreK={book.isPreK}
            onComplete={() => completeBook(book.id)}
            color={themeColor}
          />
        ))}

        <DailyRGCourse
          title="2. Learn Phonics 1"
          bookCount={26}
          total={26}
          isCompleted={true}
        />
        <DailyRGCourse title="3. Learn Phonics 2" bookCount={2} total={26} />
        <DailyRGCourse title="4. Sight Words 1" bookCount={2} total={26} />
        <DailyRGCourse title="5. Sight Words 2" bookCount={2} total={26} />
      </DailyRGCourseListStyle>

      <Gap size={100} />

      <QuickJumpButtonStyle
        ref={quickButtonRef}
        isVisible={showQuickJump}
        onClick={() => scrollToCurrentBook(true)}
        title="현재 책으로 이동">
        {isCurrentBelow ? (
          <Image
            src={Assets.Icon.arrowDownBlue}
            alt="arrow up right"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src={Assets.Icon.arrowUpBlue}
            alt="arrow up right"
            width={30}
            height={30}
          />
        )}
      </QuickJumpButtonStyle>
    </BasicGridLayout>
  )
}

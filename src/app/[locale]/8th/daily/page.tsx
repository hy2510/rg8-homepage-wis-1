'use client'

import DailyRGBookItem from '@/8th/features/daily/ui/DailyRGBookItem'
import DailyRGCourse from '@/8th/features/daily/ui/DailyRGCourse'
import DailyRGLevel from '@/8th/features/daily/ui/DailyRGLevel'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { BoxStyle, Gap } from '@/8th/shared/ui/Misc'
import { useEffect, useRef, useState } from 'react'
import { dailyRgBooksData } from './sampleDailyRgList'

export default function Page() {
  const currentItemRef = useRef<HTMLDivElement>(null)

  // 외부에서 import한 책 데이터 사용
  const booksData = dailyRgBooksData

  // isCompleted: 0인 첫 번째 책을 초기값으로 설정
  const initialBookId =
    booksData.find((book) => book.isCompleted === 0)?.id ||
    booksData[0]?.id ||
    ''
  const [currentBookId, setCurrentBookId] = useState<string>(initialBookId)

  // 현재 책으로 스크롤하는 함수
  const scrollToCurrentBook = () => {
    if (currentItemRef.current) {
      currentItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  // 다음 책으로 이동하는 함수 (isCompleted: 0인 책 중 가장 처음)
  const moveToNextBook = () => {
    const nextIncompleteBook = booksData.find((book) => book.isCompleted === 0)
    if (nextIncompleteBook) {
      setCurrentBookId(nextIncompleteBook.id)
    }
  }

  // 책 완료 처리 함수
  const completeBook = (bookId: string) => {
    // 여기서 서버에 완료 상태를 업데이트하는 로직을 추가할 수 있습니다
    console.log(`Book ${bookId} completed!`)
    // 다음 미완료 책으로 자동 이동
    moveToNextBook()
  }

  useEffect(() => {
    // 현재 책으로 스크롤
    scrollToCurrentBook()
  }, [currentBookId])

  const [themeColor] = useState<string>('#B535DC')

  return (
    <BasicGridLayout>
      <DailyRGLevel />
      <BoxStyle
        display="flex"
        flexDirection="column"
        gap={30}
        position="relative">
        <DailyRGCourse
          title="Stage 1-1 : Learn the Alphabet"
          bookCount={10}
          total={26}
          isCurrent={true}
          bgColor={themeColor}
          progressColor="#ffca2b"
        />
        {/* 동적으로 책 목록 렌더링 */}
        {booksData.map((book) => (
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
      </BoxStyle>

      <BoxStyle display="flex" flexDirection="column" gap={30}>
        <DailyRGCourse
          title="Stage 1-2 : Learn Phonics 1"
          bookCount={26}
          total={26}
          isCompleted={true}
        />
        <DailyRGCourse
          title="Stage 1-3 : Learn Phonics 2"
          bookCount={2}
          total={26}
        />
        <DailyRGCourse
          title="Stage 1-4 : Sight Words 1"
          bookCount={2}
          total={26}
        />
        <DailyRGCourse
          title="Stage 1-5 : Sight Words 2"
          bookCount={2}
          total={26}
        />
      </BoxStyle>
      <Gap size={100} />
    </BasicGridLayout>
  )
}

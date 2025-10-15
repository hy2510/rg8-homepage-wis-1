'use client'

import { GapStyle } from '@/8th/shared/SharedStyled'
import { ReviewActionBar } from '@/8th/shared/ui/ActionBar'
import { RoundedFullButton } from '@/8th/shared/ui/Buttons'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import { reviewAllBooks } from '@/app/[locale]/8th/activity/sampleReviewList'
import { useMemo, useState } from 'react'
import { BookListDateGroupStyle, ReviewListStyle } from '../../FeaturesStyled'
import ReviewBookItem from './ReviewBookItem'

/**
 *
 */
export default function ReviewList() {
  const [isExportMode, setIsExportMode] = useState(false)
  const [selectedBooks, setSelectedBooks] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState<'all' | 'passed' | 'failed'>('all')
  const [passMark, setPassMark] = useState(70)

  // 필터링된 책 목록
  const filteredBooks = useMemo(() => {
    return reviewAllBooks.filter((book) => {
      if (activeTab === 'all') return true
      if (activeTab === 'passed') return book.totalScore >= passMark
      if (activeTab === 'failed') return book.totalScore < passMark
      return true
    })
  }, [activeTab])

  // 날짜별로 그룹화
  const groupedBooks = useMemo(() => {
    const groups: {
      [key: string]: Array<{ book: any; originalIndex: number }>
    } = {}

    filteredBooks.forEach((book, index) => {
      const date = book.studyDate
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push({ book, originalIndex: index })
    })

    // 날짜별로 정렬 (최신 날짜부터)
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a))
  }, [filteredBooks])

  const handleExportChange = (isExport: boolean) => {
    setIsExportMode(isExport)
    if (!isExport) {
      setSelectedBooks(new Set())
    }
  }

  const handleBookSelection = (bookKey: string, selected: boolean) => {
    const newSelectedBooks = new Set(selectedBooks)
    if (selected) {
      newSelectedBooks.add(bookKey)
    } else {
      newSelectedBooks.delete(bookKey)
    }
    setSelectedBooks(newSelectedBooks)
  }

  const handleTabClick = (tab: 'all' | 'passed' | 'failed') => {
    setActiveTab(tab)
  }

  // 통계 계산
  const stats = useMemo(() => {
    const total = reviewAllBooks.length
    const passed = reviewAllBooks.filter((book) => book.totalScore >= 70).length
    const failed = reviewAllBooks.filter((book) => book.totalScore < 70).length
    const totalPoints = reviewAllBooks
      .filter((book) => book.totalScore >= 70)
      .reduce((sum, book) => sum + (book.earnPoints || 0), 0)

    return { total, passed, failed, totalPoints }
  }, [])

  // 날짜 포맷팅 함수 (todo와 동일한 형식)
  const formatDate = (dateString: string) => {
    return `${dateString}`
  }

  return (
    <ReviewListStyle>
      <ReviewActionBar onExportChange={handleExportChange} />
      <BoxStyle
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        width="fit-content"
        gap={10}>
        <RoundedFullButton
          viewSmall
          tabs
          active={activeTab === 'all'}
          onClick={() => handleTabClick('all')}>
          ALL ({stats.total})
        </RoundedFullButton>
        <RoundedFullButton
          viewSmall
          tabs
          active={activeTab === 'passed'}
          onClick={() => handleTabClick('passed')}>
          PASSED ({stats.passed}) +{stats.totalPoints}P
        </RoundedFullButton>
        <RoundedFullButton
          viewSmall
          tabs
          active={activeTab === 'failed'}
          onClick={() => handleTabClick('failed')}>
          FAILED ({stats.failed})
        </RoundedFullButton>
      </BoxStyle>
      {groupedBooks.map(([date, books]) => (
        <BookListDateGroupStyle key={date}>
          <TextStyle
            fontSize="medium"
            fontColor="secondary"
            className="divider">
            {formatDate(date)} ({books.length})
          </TextStyle>
          <GapStyle size={5} />
          <BoxStyle
            display="grid"
            gridTemplateColumns="repeat(1, 1fr)"
            gap={20}>
            {books.map(({ book, originalIndex }) => {
              const bookKey = `${date}-${originalIndex}`
              return (
                <ReviewBookItem
                  key={bookKey}
                  title={book.title}
                  coverImage={book.coverImage}
                  totalScore={book.totalScore}
                  stepScore1={book.stepScores[0]}
                  stepScore2={book.stepScores[1]}
                  stepScore3={book.stepScores[2]}
                  stepScore4={book.stepScores[3]}
                  stepScore5={book.stepScores[4]}
                  passMark={book.passMark}
                  passCount={book.passCount}
                  studyDate={book.studyDate}
                  isExportMode={isExportMode}
                  isSelected={selectedBooks.has(bookKey)}
                  onSelectionChange={(selected) =>
                    handleBookSelection(bookKey, selected)
                  }
                  earnPoints={book.earnPoints}
                />
              )
            })}
          </BoxStyle>
        </BookListDateGroupStyle>
      ))}
      <RoundedFullButton>See more</RoundedFullButton>
    </ReviewListStyle>
  )
}

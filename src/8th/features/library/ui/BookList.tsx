'use client'

import {
  BookListDateGroupStyle,
  BookListEmptyStateStyle,
  BookListStyle,
} from '@/8th/features/FeaturesStyled'
import ActionBar, { TodoActionBar } from '@/8th/shared/ui/ActionBar'
import { RoundedFullButton } from '@/8th/shared/ui/Buttons'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Pagenation from '@/8th/shared/ui/Pagenation'
import { ReactNode, useState } from 'react'
import BookItem from './BookItem'

export interface Book {
  id: string
  title: string
  point: string
  imgSrc: string
  assignDate?: string
  videoSrc?: string
}

/**
 * 검색 결과
 */

interface BookListProps {
  books: Book[]
  isLoading?: boolean
  emptyMessage?: string
  maxImageHeight?: number
  headerContent?: ReactNode
  actionType?: 'default' | 'search' | 'new' | 'level'
  newBookText?: string
  searchText?: string
  searchResultCount?: number
  isTodo?: boolean
  isFavorite?: boolean
  isTryAgain?: boolean
}

export default function BookList({
  books,
  isLoading = false,
  emptyMessage = '도서가 없습니다.',
  headerContent = '',
  actionType = 'default',
  newBookText = '',
  searchText = '',
  searchResultCount = 0,
  isTodo,
  isFavorite,
  isTryAgain,
}: BookListProps) {
  const [isExportMode, setIsExportMode] = useState(false)

  if (isLoading) {
    return (
      <BookListStyle>
        {Array.from({ length: 8 }).map((_, index) => (
          <BookItem
            key={`skeleton-${index}`}
            title=""
            point=""
            imgSrc=""
            isLoading={true}
          />
        ))}
      </BookListStyle>
    )
  }

  if (!books || books.length === 0) {
    return (
      <BookListEmptyStateStyle>
        <p>{emptyMessage}</p>
      </BookListEmptyStateStyle>
    )
  }

  // 날짜가 있는 도서와 없는 도서 분리
  const booksWithDate = books.filter((book) => book.assignDate)
  const booksWithoutDate = books.filter((book) => !book.assignDate)

  // 날짜별로 도서 그룹화 (날짜가 있는 도서만)
  const groupedBooks = booksWithDate.reduce(
    (groups, book) => {
      const date = book.assignDate!
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(book)
      return groups
    },
    {} as Record<string, Book[]>,
  )

  // 날짜별로 정렬 (최신 날짜가 먼저 오도록)
  const sortedDates = Object.keys(groupedBooks).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime()
  })

  return (
    <>
      {isTodo && (
        <BoxStyle
          padding="10px 15px"
          backgroundColor="rgba(212, 220, 230, 0.50)"
          borderRadius={10}>
          <TextStyle fontSize="small" fontFamily="sans" fontColor="primary">
            완료하지 않은 학습은 추가된 날로부터 60일 후 자동으로 삭제되니, 기간
            내에 완료해 주세요.
          </TextStyle>
        </BoxStyle>
      )}

      {isTryAgain && (
        <BoxStyle
          padding="10px 15px"
          backgroundColor="rgba(212, 220, 230, 0.50)"
          borderRadius={10}>
          <TextStyle fontSize="small" fontFamily="sans" fontColor="primary">
            여기서 PASS Mark(70점)를 넘기지 못한 도서를 확인할 수 있습니다.
          </TextStyle>
        </BoxStyle>
      )}

      {isTodo ? (
        <TodoActionBar onExportChange={setIsExportMode} />
      ) : isFavorite ? (
        <ActionBar optionLabels={['Status']} />
      ) : isTryAgain ? (
        <></>
      ) : (
        <ActionBar
          onExportChange={setIsExportMode}
          headerContent={headerContent}
          actionType={actionType}
          newBookText={newBookText}
          searchText={searchText}
          searchResultCount={searchResultCount}
        />
      )}

      {/* 날짜가 있는 도서들을 날짜별로 그룹화하여 표시 */}
      {sortedDates.map((date) => (
        <BookListDateGroupStyle key={date}>
          <TextStyle
            fontSize="medium"
            fontColor="secondary"
            padding="0 0 10px 10px ">
            +{date}
          </TextStyle>
          <BookListStyle>
            {groupedBooks[date].map((book) => (
              <BookItem
                key={book.id}
                title={book.title}
                point={book.point}
                imgSrc={book.imgSrc}
                videoSrc={book.videoSrc}
                isExportMode={isExportMode}
              />
            ))}
          </BookListStyle>
        </BookListDateGroupStyle>
      ))}

      {/* 날짜가 없는 도서들을 레이블 없이 표시 */}
      {booksWithoutDate.length > 0 && (
        <BookListStyle>
          {booksWithoutDate.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              point={book.point}
              imgSrc={book.imgSrc}
              videoSrc={book.videoSrc}
              isExportMode={isExportMode}
            />
          ))}
        </BookListStyle>
      )}

      {isTodo ? (
        <RoundedFullButton>More Assignments</RoundedFullButton>
      ) : (
        <Pagenation />
      )}
    </>
  )
}

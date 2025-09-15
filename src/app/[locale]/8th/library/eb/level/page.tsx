'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import { sampleBooksData } from '@/app/[locale]/8th/library/sampleBooks'
import SITE_PATH from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const levelTitle = searchParams.get('level') || ''
  const title = searchParams.get('title') || ''

  const [isLoading, setIsLoading] = useState(true)
  const level = searchParams.get('level') || 'ka'

  // level에 따른 도서 데이터 선택
  const getBooksByLevel = (currentLevel: string): Book[] => {
    switch (currentLevel) {
      case 'pk':
        return sampleBooksData.sampleBooksPk
      case 'ka':
        return sampleBooksData.sampleBooksKa
      case 'kc':
        return sampleBooksData.sampleBookQuizKc
      case '1a':
        return sampleBooksData.sampleBooks1a
      default:
        return sampleBooksData.sampleBooksKa
    }
  }

  const currentBooks = getBooksByLevel(level)

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = currentBooks.map((book) => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = book.imgSrc
          })
        })

        await Promise.all(imagePromises)

        setIsLoading(false)
      } catch (error) {
        console.error('이미지 로딩 중 오류 발생:', error)
        setIsLoading(false)
      }
    }

    preloadImages()
  }, [currentBooks])

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title={'Level ' + levelTitle.toUpperCase()}
        subTitle={title}
        onBack={() => router.push(SITE_PATH.NW8.EB)}
      />
      <BookList books={currentBooks} isLoading={isLoading} />
    </BasicGridLayout>
  )
}

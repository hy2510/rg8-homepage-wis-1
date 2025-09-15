'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleThemeBooks } from '../../../sampleBooks'

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const themeTitle = searchParams.get('title') || 'Theme'
  const sampleBooks: Book[] = []

  const [isLoading, setIsLoading] = useState(true)

  const currentBooks = sampleThemeBooks

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
        title="Theme"
        onBack={() => router.push(SITE_PATH.NW8.EB_THEMES)}
      />
      <BookList
        books={currentBooks}
        isLoading={isLoading}
        headerContent={themeTitle}
      />
    </BasicGridLayout>
  )
}

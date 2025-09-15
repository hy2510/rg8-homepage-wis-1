'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleSeriesBooks } from '../../sampleBooks'

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const seriesTitle = searchParams.get('title') || 'Series'

  const [isLoading, setIsLoading] = useState(true)

  const currentBooks = sampleSeriesBooks

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
        title="Series"
        onBack={() => router.push(SITE_PATH.NW8.EB)}
      />
      <BookList
        books={currentBooks}
        isLoading={isLoading}
        headerContent={seriesTitle}
      />
    </BasicGridLayout>
  )
}

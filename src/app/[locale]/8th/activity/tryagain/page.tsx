'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleTryAgainBooks } from '../sampleTryaginList'

export default function Page() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  const books = sampleTryAgainBooks

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = books.map((book: Book) => {
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
  }, [books])

  return (
    <BasicGridLayout>
      <SubPageNavHeader title={'Try Again'} onBack={() => router.back()} />
      <BookList books={books} isLoading={isLoading} isTryAgain />
    </BasicGridLayout>
  )
}

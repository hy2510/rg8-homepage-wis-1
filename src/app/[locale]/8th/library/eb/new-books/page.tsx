'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleNewBooks } from '../../sampleBooks'

export default function Page() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  const books = sampleNewBooks

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = books.map((book) => {
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
      <SubPageNavHeader
        title="New Books"
        onBack={() => router.push(SITE_PATH.NW8.EB)}
      />
      <BookList
        books={books}
        isLoading={isLoading}
        actionType="new"
        newBookText="Sep. 2025 New Books"
      />
    </BasicGridLayout>
  )
}

'use client'

import BookList from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleSearchBooks } from '../../sampleBooks'

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  const [isLoading, setIsLoading] = useState(true)

  const books = sampleSearchBooks

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
      <SubPageNavHeader title="Search Result" onBack={() => router.back()} />
      <BookList
        books={books}
        isLoading={isLoading}
        searchText={keyword}
        actionType="search"
        searchResultCount={books.length}
      />
    </BasicGridLayout>
  )
}

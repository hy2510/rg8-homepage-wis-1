'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { DropdownButtonBig } from '@/8th/shared/ui/Dropdowns'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleMovies } from '../../sampleBooks'

export default function Page() {
  const router = useRouter()

  const books = sampleMovies

  const [isLoading, setIsLoading] = useState(true)

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
        title="Movies"
        onBack={() => router.push(SITE_PATH.NW8.EB)}
      />
      <BookList
        books={books}
        isLoading={isLoading}
        headerContent={<DropdownButtonBig text="Level KA" />}
      />
    </BasicGridLayout>
  )
}

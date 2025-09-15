'use client'

import BookList, { Book } from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { DropdownButtonBig } from '@/8th/shared/ui/Dropdowns'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleWorkbookBooks } from '../../sampleBooks'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  const books = sampleWorkbookBooks

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

  const router = useRouter()

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title="Workbook Units"
        onBack={() => router.push(SITE_PATH.NW8.EB)}
      />
      <BookList
        books={books}
        isLoading={isLoading}
        headerContent={
          <>
            <DropdownButtonBig text="KA" />
            <DropdownButtonBig text="1" />
          </>
        }
      />
    </BasicGridLayout>
  )
}

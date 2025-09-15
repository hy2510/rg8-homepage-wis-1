'use client'

import { Assets } from '@/8th/assets/asset-library'
import BookList from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleTodoList } from '../sampleTodoList'

export default function Page() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  const books = sampleTodoList

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
        title={'To-Do'}
        iconSrc={Assets.Icon.Side.toDo.src}
        onBack={() => router.back()}
      />
      <BookList books={books} isLoading={isLoading} isTodo />
    </BasicGridLayout>
  )
}

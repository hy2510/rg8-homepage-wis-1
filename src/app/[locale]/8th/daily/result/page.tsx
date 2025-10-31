'use client'

import { DailyRGCourseListStyle } from '@/8th/features/FeaturesStyled'
import DailyRGBookItem from '@/8th/features/daily/ui/DailyRGBookItem'
import { DailyRgResultActionBar } from '@/8th/shared/ui/ActionBar'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { Gap } from '@/8th/shared/ui/Misc'
import { BackNavHeader } from '@/8th/shared/ui/Navigation'
import Pagenation from '@/8th/shared/ui/Pagenation'
import SITE_PATH from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { sampleDailyRgResultList } from '../sampleDailyRgList'

export interface DailyRgBook {
  id: string
  title: string
  point: string
  imgSrc: string
  isCompleted?: number
}

export default function Page() {
  const searchParams = useSearchParams()
  const title = searchParams.get('title') || ''
  const bookCount = searchParams.get('bookCount') || 0
  const totalCount = searchParams.get('totalCount') || 0

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = sampleDailyRgResultList.map((book) => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = book.imgSrc
          })
        })

        await Promise.all(imagePromises)
      } catch (error) {
        console.error('이미지 로딩 중 오류 발생:', error)
      }
    }

    preloadImages()
  }, [sampleDailyRgResultList])

  const router = useRouter()

  return (
    <BasicGridLayout leftContainerGap={5}>
      <BackNavHeader onBack={() => router.push(SITE_PATH.NW8.DAILY_RG)} />
      <Gap size={15} />
      <DailyRgResultActionBar
        title={title}
        bookCount={Number(bookCount)}
        totalCount={Number(totalCount)}
      />
      <DailyRGCourseListStyle>
        {sampleDailyRgResultList.map((book) => (
          <DailyRGBookItem
            key={book.id}
            imgUrl={book.imgSrc}
            bookNumber={Number(book.id)}
            title={book.title}
            point={Number(book.point)}
            color="#b535dc"
            isCompleted={book.isCompleted}
          />
        ))}
      </DailyRGCourseListStyle>
      <Pagenation />
    </BasicGridLayout>
  )
}

'use client'

import ThemeItem from '@/8th/features/library/ui/ThemeItem'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleThemes } from '../../sampleBooks'

export interface Theme {
  id: string
  title: string
  themeImgSrc: string
}

export default function Page() {
  const router = useRouter()

  const themes = sampleThemes

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = themes.map((theme) => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = theme.themeImgSrc
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
  }, [themes])

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title="Themes"
        onBack={() => router.push(SITE_PATH.NW8.EB)}
      />
      <BoxStyle display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={20}>
        {isLoading ? (
          <div>Loading themes...</div>
        ) : (
          themes.map((theme) => (
            <ThemeItem
              key={theme.id}
              themeImgSrc={theme.themeImgSrc}
              title={theme.title}
            />
          ))
        )}
      </BoxStyle>
    </BasicGridLayout>
  )
}

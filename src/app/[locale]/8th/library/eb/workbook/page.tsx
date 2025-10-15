'use client'

import BookList from '@/8th/features/library/ui/BookList'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SelectBox } from '@/8th/shared/ui/Misc'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sampleWorkbookBooks } from '../../sampleBooks'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLevel, setSelectedLevel] = useState('KA')
  const [selectedUnit, setSelectedUnit] = useState('1')

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

  const handleChangeLevel = (level: string) => {
    setSelectedLevel(level)
    console.log(level)
  }

  const handleChangeUnit = (unit: string) => {
    setSelectedUnit(unit)
    console.log(unit)
  }

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
            <SelectBox
              selectedValue={selectedLevel}
              largeFont
              onChange={handleChangeLevel}
              options={[
                'PK',
                'KA',
                'KB',
                'KC',
                '1A',
                '1B',
                '1C',
                '2A',
                '2B',
                '2C',
              ]}
            />
            <SelectBox
              selectedValue={selectedUnit}
              largeFont
              onChange={handleChangeUnit}
              options={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
              ]}
            />
          </>
        }
      />
    </BasicGridLayout>
  )
}

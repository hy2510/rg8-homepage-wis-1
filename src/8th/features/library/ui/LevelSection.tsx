'use client'

import { Assets } from '@/8th/assets/asset-library'
import { LevelSectionStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, Divide, Gap } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import LevelItem from './LevelItem'
import levelSectionData from './LevelSection.json'
import SeriesItem from './SeriesItem'

const getAssetValue = (assetPath: string) => {
  const pathParts = assetPath.split('.')
  let current: any = Assets

  for (const part of pathParts) {
    if (part === 'Assets') continue
    current = current[part]
  }

  return current || ''
}

// 프로토타입용 시리즈 템플릿 데이터
type SeriesTemplate = {
  name: string
  level: string
  bgColor: string
  imageUrl: string
}

const SERIES_TEMPLATES: SeriesTemplate[] = [
  {
    name: "Shakespeare Children's Stories",
    level: '3B',
    bgColor: '#8B4513',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/20_shakespeare_childrens_stories.png',
  },
  {
    name: 'Classic Fairy Tales',
    level: '2A',
    bgColor: '#4A90E2',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/10_Minute_Classics.png',
  },
  {
    name: 'Science Adventures',
    level: '4A',
    bgColor: '#7ED321',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Bible_Stories.png',
  },
  {
    name: 'World History',
    level: '5B',
    bgColor: '#F5A623',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Britannica_(YCE).png',
  },
  {
    name: 'Nature Explorer',
    level: '2B',
    bgColor: '#50C878',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/bugs_bugs.png',
  },
  {
    name: 'Math Stories',
    level: '3A',
    bgColor: '#E74C3C',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Carter_High_Mysteries.png',
  },
  {
    name: 'Space Adventures',
    level: '4B',
    bgColor: '#9B59B6',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/childrens_rights.png',
  },
  {
    name: 'Animal Kingdom',
    level: '1A',
    bgColor: '#E67E22',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/childrens_stories_(korea).png',
  },
  {
    name: 'Art & Culture',
    level: '5A',
    bgColor: '#34495E',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Circus_Bizurkus_Storylands.png',
  },
  {
    name: 'Sports Heroes',
    level: '3C',
    bgColor: '#1ABC9C',
    imageUrl:
      'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/classmates_series.png',
  },
]

const ACCORDION_SECTIONS = levelSectionData.accordionSections.map(
  (section) => ({
    ...section,
    content: {
      ...section.content,
      levels: section.content.levels.map((level) => ({
        ...level,
        imgSrc: level.imgSrc ? getAssetValue(level.imgSrc) : '',
      })),
    },
  }),
)

// 상수 정의
const ITEMS_PER_PAGE = 6

/**
 * Leveled Reading 메뉴
 */
export default function LeveledReading() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['Level K to 1']),
  )
  const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>({})

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(sectionName)) {
        newSet.delete(sectionName)
      } else {
        newSet.clear()
        newSet.add(sectionName)
      }
      return newSet
    })
  }

  const isSectionOpen = (sectionName: string) => openSections.has(sectionName)

  // 페이지네이션 헬퍼 함수들
  const getCurrentPage = (sectionId: string) => currentPage[sectionId] || 0
  const setCurrentPageForSection = (sectionId: string, page: number) => {
    setCurrentPage((prev) => ({ ...prev, [sectionId]: page }))
  }
  const getTotalPages = (totalItems: number) =>
    Math.ceil(totalItems / ITEMS_PER_PAGE)
  const getPaginatedItems = (items: SeriesItem[], sectionId: string) => {
    const page = getCurrentPage(sectionId)
    const startIndex = page * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return items.slice(startIndex, endIndex)
  }

  const renderAccordionSection = (section: (typeof ACCORDION_SECTIONS)[0]) => {
    const isOpen = isSectionOpen(section.id)

    return (
      <div key={section.id}>
        <div
          className={`accordion-header ${isOpen ? 'open' : ''}`}
          onClick={() => toggleSection(section.id)}>
          <span className="accordion-title">{section.title}</span>
          <span className="arrow">
            {isOpen ? (
              <Image
                src={Assets.Icon.chevronDownGray}
                alt="arrow-down"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={Assets.Icon.chevronRightGray}
                alt="arrow-right"
                width={24}
                height={24}
              />
            )}
          </span>
        </div>
        <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
          {section.id !== 'Level PK' && section.id !== 'Level PK Classic' && (
            <>
              <Gap size={30} />
              <Divide title="By Level" />
              <Gap size={30} />
            </>
          )}
          {section.id === 'Level PK Classic' && <Gap size={30} />}
          {section.id === 'Level PK' && <LevelSectionPk section={section} />}
          {section.id !== 'Level PK' && (
            <div className="level-container">
              {section.content.levels.map(
                ({ level, bgColor, fontColor, type, imgSrc, title }) => (
                  <LevelItem
                    key={level}
                    level={level}
                    bgColor={bgColor}
                    fontColor={fontColor}
                    type={type}
                    imgSrc={imgSrc as string}
                    title={title}
                  />
                ),
              )}
            </div>
          )}
          {section.id !== 'Level PK' && section.id !== 'Level PK Classic' && (
            <>
              <Gap size={30} />
              <Divide title="By Series" />
              <Gap size={30} />
              <SeriesPagination
                sectionId={section.id}
                totalItems={SERIES_TEMPLATES.length}
                getCurrentPage={getCurrentPage}
                setCurrentPageForSection={setCurrentPageForSection}
                getTotalPages={getTotalPages}
                getPaginatedItems={getPaginatedItems}
              />
            </>
          )}
          <Gap size={30} />
        </div>
      </div>
    )
  }

  return (
    <LevelSectionStyle>
      <BoxStyle className="title" display="flex" alignItems="center" gap={10}>
        <Image
          src={Assets.Icon.Study.leveledReading}
          alt="leveled-reading"
          width={32}
          height={32}
        />
        <span>Reading Levels</span>
      </BoxStyle>
      <BoxStyle
        className="accordion-container"
        display="flex"
        flexDirection="column">
        {ACCORDION_SECTIONS.map(renderAccordionSection)}
      </BoxStyle>
    </LevelSectionStyle>
  )
}

function LevelSectionPk({
  section,
}: {
  section: (typeof ACCORDION_SECTIONS)[0]
}) {
  const pkCategories = [
    {
      title: 'Alphabet',
      levels: section.content.levels.slice(0, 3), // 0-2
    },
    {
      title: 'Phonics',
      levels: section.content.levels.slice(3, 7), // 3-6
    },
    {
      title: 'Sight Word',
      levels: section.content.levels.slice(7, 12), // 7-11
    },
  ]

  const renderLevelItem = (
    level: (typeof ACCORDION_SECTIONS)[0]['content']['levels'][0],
    index: number,
  ) => (
    <LevelItem
      key={`${level.level}-${index}`}
      level={level.level}
      bgColor={level.bgColor}
      fontColor={level.fontColor}
      type={level.type}
      imgSrc={level.imgSrc as string}
      title={level.title}
    />
  )

  return (
    <>
      {pkCategories.map((category) => (
        <div key={category.title}>
          <Gap size={30} />
          <Divide title={category.title} />
          <Gap size={30} />
          <div className="level-container">
            {category.levels.map(renderLevelItem)}
          </div>
        </div>
      ))}
    </>
  )
}

type SeriesItem = {
  id: number
  level: string
  seriesName: string
  bgColor: string
  seriesImageUrl: string
}

interface SeriesPaginationProps {
  sectionId: string
  totalItems: number
  getCurrentPage: (sectionId: string) => number
  setCurrentPageForSection: (sectionId: string, page: number) => void
  getTotalPages: (totalItems: number) => number
  getPaginatedItems: (items: SeriesItem[], sectionId: string) => SeriesItem[]
}

function SeriesPagination({
  sectionId,
  totalItems,
  getCurrentPage,
  setCurrentPageForSection,
  getTotalPages,
  getPaginatedItems,
}: SeriesPaginationProps) {
  const currentPage = getCurrentPage(sectionId)
  const totalPages = getTotalPages(totalItems)

  // 프로토타입용 시리즈 데이터 생성
  const generateSeriesItems = (totalItems: number): SeriesItem[] => {
    return Array.from({ length: totalItems }, (_, i) => {
      const template = SERIES_TEMPLATES[i % SERIES_TEMPLATES.length]
      return {
        id: i,
        level: template.level,
        seriesName: template.name,
        bgColor: template.bgColor,
        seriesImageUrl: template.imageUrl,
      }
    })
  }

  const seriesItems = generateSeriesItems(totalItems)

  const paginatedItems = getPaginatedItems(seriesItems, sectionId)

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPageForSection(sectionId, currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPageForSection(sectionId, currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    setCurrentPageForSection(sectionId, page)
  }

  return (
    <div className="series-pagination-container">
      <div className="series-container">
        {paginatedItems.map((item) => (
          <SeriesItem
            key={item.id}
            level={item.level}
            seriesName={item.seriesName}
            bgColor={item.bgColor}
            seriesImageUrl={item.seriesImageUrl}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            className="pagination-button prev"
            onClick={handlePrevPage}
            disabled={currentPage === 0}>
            <Image
              src={Assets.Icon.chevronLeftGray}
              alt="Previous"
              width={20}
              height={20}
            />
          </button>

          <div className="pagination-dots">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
                onClick={() => handlePageClick(index)}
              />
            ))}
          </div>

          <button
            className="pagination-button next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}>
            <Image
              src={Assets.Icon.chevronRightGray}
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}
    </div>
  )
}

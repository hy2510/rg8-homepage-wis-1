'use client'

import { Assets } from '@/8th/assets/asset-library'
import { LevelSectionStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, Gap } from '@/8th/shared/ui/Misc'
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

/**
 * Leveled Reading 메뉴
 */
export default function LeveledReading() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['Level K to 1']),
  )

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
            <div className="sub-header">• by Level</div>
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
              <div className="sub-header">• by Series</div>
              <div className="series-container">
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
                <SeriesItem />
              </div>
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

  const renderLevelItem = (level: any, index: number) => (
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
          <div className="sub-header">• {category.title}</div>
          <div className="level-container">
            {category.levels.map(renderLevelItem)}
          </div>
        </div>
      ))}
    </>
  )
}

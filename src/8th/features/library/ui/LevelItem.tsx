'use client'

import { Assets } from '@/8th/assets/asset-library'
import { LevelItemStyle, LevelPkItemStyle } from '@/8th/features/FeaturesStyled'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * 레벨 아이템
 */

interface LevelItemProps {
  type?: string
  level?: string
  completed?: number
  total?: number
  bgColor?: string
  fontColor?: string
  isRecentlyViewed?: boolean
  title?: string
  imgSrc?: string
}

export default function LevelItem({
  type = 'eb',
  level = 'ka',
  completed = 0,
  total = 100,
  bgColor = '#f0f0f0',
  fontColor = '#fff',
  isRecentlyViewed = false,
  title = '',
  imgSrc = '',
}: LevelItemProps) {
  const [currentImageUrl, setCurrentImageUrl] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const getRandomNumberRange = (level: string) => {
    switch (type) {
      case 'eb':
        switch (level) {
          case 'ka':
            return { min: 1, max: 50 }
          case 'kb':
            return { min: 1, max: 50 }
          case 'kc':
            return { min: 1, max: 50 }
          case '1a':
            return { min: 1, max: 50 }
          case '1b':
            return { min: 301, max: 340 }
          case '1c':
            return { min: 331, max: 360 }
          case '2a':
            return { min: 301, max: 390 }
          case '2b':
            return { min: 301, max: 380 }
          case '2c':
            return { min: 301, max: 360 }
          case '3a':
            return { min: 401, max: 470 }
          case '3b':
            return { min: 301, max: 340 }
          case '3c':
            return { min: 1, max: 25 }
          case '4a':
            return { min: 301, max: 315 }
          case '4b':
            return { min: 301, max: 320 }
          case '4c':
            return { min: 301, max: 315 }
          case '5a':
            return { min: 301, max: 310 }
          case '5b':
            return { min: 301, max: 310 }
          case '5c':
            return { min: 1, max: 5 }
          case '6a':
            return { min: 301, max: 306 }
          case '6b':
            return { min: 301, max: 301 }
          default:
            return { min: 1, max: 1 }
        }
      case 'pb':
        switch (level) {
          case 'kc':
            return { min: 1, max: 100 }
          case '1a':
            return { min: 1, max: 100 }
          case '1b':
            return { min: 1, max: 100 }
          case '2a':
            return { min: 1, max: 100 }
          case '2b':
            return { min: 1, max: 100 }
          case '2c':
            return { min: 1, max: 100 }
          case '3a':
            return { min: 1, max: 100 }
          case '3b':
            return { min: 1, max: 100 }
          case '3c':
            return { min: 1, max: 100 }
          case '4a':
            return { min: 1, max: 100 }
          case '4b':
            return { min: 1, max: 100 }
          case '4c':
            return { min: 1, max: 100 }
          case '5a':
            return { min: 1, max: 100 }
          case '5b':
            return { min: 1, max: 100 }
          case '5c':
            return { min: 1, max: 100 }
          case '6a':
            return { min: 1, max: 100 }
          case '6b':
            return { min: 1, max: 100 }
          case '6c':
            return { min: 1, max: 100 }
          default:
            return { min: 1, max: 100 }
        }
      default:
        return { min: 1, max: 100 }
    }
  }

  const generateNewImageUrl = () => {
    const range = getRandomNumberRange(level)
    const randomNumber =
      Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
    const paddedNumber = randomNumber.toString().padStart(3, '0')
    return `https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${type}-${level}-${paddedNumber}.jpg`
  }

  // const changeImage = () => {
  //   setIsTransitioning(true)

  //   setTimeout(() => {
  //     setCurrentImageUrl(generateNewImageUrl())
  //     setIsTransitioning(false)
  //   }, 150)
  // }

  useEffect(() => {
    setCurrentImageUrl(generateNewImageUrl())

    // 설정된 시간마다 이미지 변경
    // const interval = setInterval(() => {
    //   changeImage()
    // }, 10000)

    // return () => clearInterval(interval)
  }, [level, type])

  const router = useRouter()

  return level === 'pk' ? (
    <LevelPkItemStyle
      bgColor={bgColor}
      fontColor={fontColor}
      isTransitioning={isTransitioning}
      onClick={() => {
        const encodedTitle = encodeURIComponent(level)
        router.push(
          `/8th/library/eb/level?level=${encodedTitle}&title=${title}`,
        )
      }}>
      <div className="thumbnail-container">
        <Image
          src={imgSrc}
          alt="level-image"
          width={142}
          height={80}
          className={`thumbnail-image ${type === 'study' ? '' : 'sub'}`}
        />
        {type === 'study' && <div className="thumbnail-shadow" />}
        <div className="mobile-title">{title}</div>
      </div>
      <div className="title-container">
        <div className="title">{title}</div>
      </div>
      <div className="study-count">
        <span>{completed}</span>
        <span>/{total}</span>
        <span> Activities</span>
      </div>
      {isRecentlyViewed && (
        <div className="delete-button">
          <Image
            src={Assets.Icon.deleteWhite}
            alt="delete"
            width={24}
            height={24}
          />
        </div>
      )}
    </LevelPkItemStyle>
  ) : (
    <LevelItemStyle
      bgColor={bgColor}
      fontColor={fontColor}
      isTransitioning={isTransitioning}
      onClick={() => {
        const encodedTitle = encodeURIComponent(level)
        router.push(`/8th/library/eb/level?level=${encodedTitle}`)
      }}>
      <div className="level-image-container">
        <Image
          src={currentImageUrl}
          alt="search-bar-icon"
          width={150}
          height={214}
          className="book-cover"
        />
        <div className="book-cover-shadow" />
      </div>
      <div className="level-container">
        <div className="wrapper">
          <div className="level">{level.toUpperCase()}</div>
          {/* <div className="more-books">
            <span>more</span>
            <Image
              src={Assets.Icon.chevronRightWhite}
              alt="arrow-right"
              width={16}
              height={16}
            />
          </div> */}
        </div>
      </div>

      <div className="study-count">
        <span>{completed}</span>
        <span>/{total}</span>
        <span> Books Read</span>
      </div>
      {/* {isRecentlyViewed && (
        <div className="delete-button">
          <Image
            src={Assets.Icon.deleteWhite}
            alt="delete"
            width={24}
            height={24}
          />
        </div>
      )} */}
    </LevelItemStyle>
  )
}

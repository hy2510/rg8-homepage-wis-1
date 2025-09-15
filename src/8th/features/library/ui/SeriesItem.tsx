'use client'

import { SeriesItemStyle } from '@/8th/features/FeaturesStyled'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/**
 * 시리즈 아이템
 */

interface SeriesItemProps {
  level?: string
  seriesName?: string
  bgColor?: string
  seriesImageUrl?: string
  isRecentlyViewed?: boolean
}

export default function SeriesItem({
  level = '3B',
  seriesName = "Shakespeare Children's Stories",
  bgColor = '#222',
  seriesImageUrl = 'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/20_shakespeare_childrens_stories.png',
  isRecentlyViewed = false,
}: SeriesItemProps) {
  const router = useRouter()

  return (
    <SeriesItemStyle
      bgColor={bgColor}
      onClick={() => {
        const encodedTitle = encodeURIComponent(
          '[' + level.toUpperCase() + '] ' + seriesName || '',
        )
        router.push(`/8th/library/eb/series?title=${encodedTitle}`)
      }}>
      <div className="series-image-container">
        <Image
          src={seriesImageUrl}
          alt="search-bar-icon"
          width={150}
          height={214}
          className="book-cover"
        />
        <div className="book-cover-shadow" />
      </div>
      <div className="series-name">
        [{level.toUpperCase()}] {seriesName}
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
    </SeriesItemStyle>
  )
}

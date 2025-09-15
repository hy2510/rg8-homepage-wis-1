'use client'

import { Assets } from '@/8th/assets/asset-library'
import { RecentlyViewedStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import LevelItem from './LevelItem'
import SeriesItem from './SeriesItem'

/**
 * Recently Viewed 메뉴
 */
export default function RecentlyViewed() {
  return (
    <RecentlyViewedStyle>
      <BoxStyle display="flex" gap={10} alignItems="center">
        <Image
          src={Assets.Icon.Study.recentlyViewed}
          alt="recently-viewed"
          width={32}
          height={32}
        />
        <TextStyle fontSize="xlarge" fontColor="primary">
          Continue
        </TextStyle>
      </BoxStyle>
      <BoxStyle
        className="list"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap={10}>
        <LevelItem level="ka" bgColor="#FBCE2A" isRecentlyViewed={true} />
        <SeriesItem
          bgColor="#22a57b"
          seriesImageUrl="https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/20_shakespeare_childrens_stories.png"
          isRecentlyViewed={true}
        />
      </BoxStyle>
    </RecentlyViewedStyle>
  )
}

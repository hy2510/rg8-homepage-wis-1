'use client'

import { useMediaQuery } from '@/8th/MediaQueries'
import { Assets } from '@/8th/assets/asset-library'
import {
  CollectionItemStyled,
  CollectionsStyled,
} from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import SITE_PATH from '@/app/site-path'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

interface CollectionsProps {
  bookInfo?: 'eb' | 'pb'
}

export default function Collections({ bookInfo = 'eb' }: CollectionsProps) {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <CollectionsStyled>
      <BoxStyle className="title" display="flex" gap={10}>
        <Image
          alt="collections"
          src={Assets.Icon.Study.collections}
          width={28}
          height={28}
        />
        <span>Collections</span>
      </BoxStyle>
      <BoxStyle
        display="grid"
        gridTemplateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'}
        gap={isMobile ? 10 : 15}>
        {bookInfo === 'eb' && (
          <>
            <CollectionItem
              iconSrc={Assets.Icon.Study.newBooks}
              iconWidth={31}
              iconHeight={14}
              iconBgColor="#F53259"
              onClick={() => router.push(SITE_PATH.NW8.EB_NEWBOOKS)}>
              New Books
            </CollectionItem>
            <CollectionItem
              iconSrc={Assets.Icon.Study.movie}
              iconWidth={22}
              iconHeight={22}
              iconBgColor="#FFA400"
              onClick={() => router.push(SITE_PATH.NW8.EB_MOVIES)}>
              Movies
            </CollectionItem>
            <CollectionItem
              iconSrc={Assets.Icon.Study.workbook}
              iconWidth={22}
              iconHeight={22}
              iconBgColor="#A1CE05"
              onClick={() => router.push(SITE_PATH.NW8.EB_WORKBOOK)}>
              Workbook Units
            </CollectionItem>
            <CollectionItem
              iconSrc={Assets.Icon.Study.theme}
              iconWidth={24}
              iconHeight={24}
              iconBgColor="#23C1EB"
              onClick={() => router.push(SITE_PATH.NW8.EB_THEMES)}>
              Themes
            </CollectionItem>
          </>
        )}
      </BoxStyle>
    </CollectionsStyled>
  )
}

interface CollectionItemProps {
  children: React.ReactNode
  iconSrc?: string | StaticImageData
  iconWidth?: number
  iconHeight?: number
  iconBgColor?: string
  onClick?: () => void
}

export function CollectionItem({
  children,
  iconSrc = Assets.Icon.Study.collections,
  iconWidth = 24,
  iconHeight = 24,
  iconBgColor = '#f0f0f0',
  onClick,
}: CollectionItemProps) {
  return (
    <CollectionItemStyled iconBgColor={iconBgColor}>
      <BoxStyle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        onClick={onClick}>
        <BoxStyle display="flex" alignItems="center" gap={15}>
          <div className="icon-box">
            <Image
              src={iconSrc}
              alt="collection-icon"
              width={iconWidth}
              height={iconHeight}
            />
          </div>
          {children}
        </BoxStyle>
        <Image
          src={Assets.Icon.chevronRightGray}
          alt="chevron-right"
          width={22}
          height={22}
        />
      </BoxStyle>
    </CollectionItemStyled>
  )
}

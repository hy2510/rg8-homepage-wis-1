'use client'

import { Assets } from '@/8th/assets/asset-library'
import { RankCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import SITE_PATH from '@/app/site-path'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/**
 * 레벨마스터 카드(퍼포먼스)
 */
export default function RankCard() {
  const router = useRouter()

  return (
    <RankCardStyle onClick={() => router.push(SITE_PATH.NW8.RANKING)}>
      <BoxStyle className="title-link">
        <span>랭킹</span>
        <Image
          src={Assets.Icon.arrowUpRightBlack}
          alt="arrow-up-right-black"
          width={14}
          height={14}
        />
      </BoxStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={5}
        padding="20px 10px">
        <div className="rank">10</div>
      </BoxStyle>
    </RankCardStyle>
  )
}

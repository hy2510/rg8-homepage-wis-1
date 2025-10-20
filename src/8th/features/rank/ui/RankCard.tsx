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

interface RankCardProps {
  rank: number
}

export default function RankCard({ rank = 10 }: RankCardProps) {
  const router = useRouter()

  return (
    <RankCardStyle>
      <BoxStyle className="title-link">
        <span>독서 랭킹</span>
        {/* <Image
          src={Assets.Icon.arrowUpRightBlack}
          alt="arrow-up-right-black"
          width={14}
          height={14}
        /> */}
      </BoxStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={5}
        padding="20px 10px"
        onClick={() => router.push(SITE_PATH.NW8.RANKING)}>
        {rank <= 1000 && <div className="rank">#{rank}</div>}
        {rank > 1000 && (
          <div className="rank arrow-down">
            #1000
            <Image
              src={Assets.Icon.arrowDownGray}
              alt="arrow-down-gray"
              width={20}
              height={20}
            />
          </div>
        )}
      </BoxStyle>
    </RankCardStyle>
  )
}

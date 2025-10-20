import { Assets } from '@/8th/assets/asset-library'
import { DivideLineStyle } from '@/8th/shared/SharedStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'

interface RankHallOfFameItemProps {
  rank: number
  avatar: string
  name: string
  schoolClass?: string
  readingCount: number
  point: number
  isMe?: boolean
  registrationDate: string
}

/**
 * 명예의전당 아이템
 */
export default function RankHallOfFameItem({
  rank,
  avatar,
  name,
  schoolClass,
  readingCount,
  point,
  isMe = false,
  registrationDate = '2025-01-01',
}: RankHallOfFameItemProps) {
  return (
    <>
      <BoxStyle
        display="flex"
        justifyContent="space-between"
        gap={5}
        backgroundColor={isMe ? '#EDFAFE' : 'transparent'}
        borderRadius={15}
        padding="10px">
        <BoxStyle display="flex" alignItems="center" gap={5}>
          <BoxStyle
            width="50px"
            display="flex"
            alignItems="center"
            justifyContent="center">
            {rank === 1 && (
              <BoxStyle
                width="40px"
                height="48px"
                backgroundImage={`url(${Assets.Icon.Ranking.rank1Bg.src})`}
                backgroundSize="100%"
                backgroundPosition="center"
              />
            )}
            {rank === 2 && (
              <BoxStyle
                width="40px"
                height="48px"
                backgroundImage={`url(${Assets.Icon.Ranking.rank2Bg.src})`}
                backgroundSize="100%"
                backgroundPosition="center"
              />
            )}
            {rank === 3 && (
              <BoxStyle
                width="40px"
                height="48px"
                backgroundImage={`url(${Assets.Icon.Ranking.rank3Bg.src})`}
                backgroundSize="100%"
                backgroundPosition="center"
              />
            )}
            {rank >= 4 && (
              <TextStyle fontSize="small" fontWeight={700}>
                {rank < 1000 ? '#' + rank : '#'}
              </TextStyle>
            )}
          </BoxStyle>
          <Image src={avatar} alt={name} width={50} height={50} />
          <BoxStyle
            display="flex"
            flexDirection="column"
            padding="0 0 0 10px"
            maxWidth="200px">
            <TextStyle
              fontSize="medium"
              fontFamily={isMe ? 'round' : 'sans'}
              fontWeight={700}
              fontColor={isMe ? 'lightBlue' : 'primary'}>
              {isMe ? 'ME' : name}
            </TextStyle>
            {schoolClass && (
              <TextStyle
                fontSize="small"
                fontFamily="sans"
                fontWeight={500}
                fontColor="secondary">
                {schoolClass}
              </TextStyle>
            )}
          </BoxStyle>
        </BoxStyle>
        <BoxStyle
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          gap={5}>
          <BoxStyle display="flex" alignItems="center" gap={5} padding="0 10px">
            <TextStyle fontFamily="sans" fontSize="small" fontColor="secondary">
              {isMe && 'Registration Date, Books Read, Earned Points'}
            </TextStyle>
          </BoxStyle>
          <BoxStyle display="flex" alignItems="center" gap={5} padding="0 10px">
            <TextStyle fontColor="primary" fontFamily="sans">
              {registrationDate},
            </TextStyle>
            <TextStyle fontColor="primary" fontFamily="sans">
              {readingCount},
            </TextStyle>
            <TextStyle fontColor="primary" fontFamily="sans">
              +{point}P
            </TextStyle>
          </BoxStyle>
        </BoxStyle>
      </BoxStyle>
      {!isMe && <DivideLineStyle borderWidth="1" />}
    </>
  )
}

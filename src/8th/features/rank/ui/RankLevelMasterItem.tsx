import { DivideLineStyle } from '@/8th/shared/SharedStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'

interface RankLevelMasterItemProps {
  number: number
  level: string
  avatar: string
  name: string
  isMe?: boolean
  registrationDate: string
}

/**
 * 레벨마스터 아이템
 */
export default function RankLevelMasterItem({
  number,
  level,
  avatar,
  name,
  isMe = false,
  registrationDate = '2025-01-01',
}: RankLevelMasterItemProps) {
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
            <TextStyle fontSize="small" fontWeight={700}>
              {number}
            </TextStyle>
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
              {isMe && 'Level, Registration Date'}
            </TextStyle>
          </BoxStyle>
          <BoxStyle display="flex" alignItems="center" gap={5} padding="0 10px">
            <TextStyle fontColor="primary" fontFamily="sans">
              {level},
            </TextStyle>
            <TextStyle fontColor="primary" fontFamily="sans">
              {registrationDate}
            </TextStyle>
          </BoxStyle>
        </BoxStyle>
      </BoxStyle>
      {!isMe && <DivideLineStyle borderWidth="1" />}
    </>
  )
}

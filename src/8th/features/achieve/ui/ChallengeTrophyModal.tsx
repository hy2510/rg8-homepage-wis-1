import { Assets } from '@/8th/assets/asset-library'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { BoxStyle, StreakLine, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useMemo } from 'react'
import { BookInfoModalStyle } from '../../FeaturesStyled'

/**
 * 영어독서왕 수상 모달
 */

interface ChallengeTrophyProps {
  onClickClose: () => void
}

export default function ChallengeTrophyModal({
  onClickClose,
}: ChallengeTrophyProps) {
  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="title">영어 독서왕 수상 이력</div>
          <div className="btn-close" onClick={onClickClose} />
        </ModalHeaderStyle>
        <ModalBodyStyle viewCloud>
          <AwardItem
            awardName="대상"
            awardDate="2022-09-20"
            challengeName="2022 하반기"
          />
          <StreakLine />
          <AwardItem
            awardName="최우수상"
            awardDate="2022-09-20"
            challengeName="2022 하반기"
          />
          <StreakLine />
          <AwardItem
            awardName="우수상"
            awardDate="2022-09-20"
            challengeName="2022 하반기"
          />
          <StreakLine />
          <AwardItem
            awardName="성실상"
            awardDate="2022-09-20"
            challengeName="2022 하반기"
          />
        </ModalBodyStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

function AwardItem({
  challengeName,
  awardName,
  awardDate,
}: {
  challengeName: string
  awardName: '성실상' | '최우수상' | '우수상' | '대상'
  awardDate: string
}) {
  const awardImage = useMemo(() => {
    switch (awardName) {
      case '성실상':
        return Assets.Challenge.sincerity
      case '최우수상':
        return Assets.Challenge.excellence
      case '우수상':
        return Assets.Challenge.grand
      case '대상':
        return Assets.Challenge.best
    }
  }, [awardName])

  return (
    <BoxStyle
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={10}>
      <Image src={awardImage} alt="Award Challenge" width={120} height={120} />
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}>
        <TextStyle
          fontSize="medium"
          fontColor="primary"
          fontFamily="sans"
          fontWeight={800}>
          {challengeName} {awardName} 수상
        </TextStyle>
        <TextStyle
          fontSize="medium"
          fontColor="secondary"
          fontFamily="sans"
          fontWeight={800}>
          {awardDate}
        </TextStyle>
      </BoxStyle>
    </BoxStyle>
  )
}

'use client'

import { StudyStatusViewStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'

/**
 * 남은학습일, ... 결제하기 버튼
 */

interface StudyStatusViewProps {
  remainingStudyPeriod?: number
  endStudyDate?: string
}

export default function StudyStatusView({
  remainingStudyPeriod = 9999,
  endStudyDate = '9999.12.31',
}: StudyStatusViewProps) {
  return (
    <StudyStatusViewStyle>
      <BoxStyle display="flex" gap={10}>
        <TextStyle fontFamily="sans" type="span" fontSize="medium">
          남은 학습 기간:
        </TextStyle>
        <TextStyle
          fontFamily="sans"
          fontWeight={'bolder'}
          type="span"
          fontSize="medium">
          {remainingStudyPeriod}
          {remainingStudyPeriod > 1
            ? ' days'
            : remainingStudyPeriod === 0
              ? ''
              : ' day'}
        </TextStyle>
      </BoxStyle>
      <BoxStyle display="flex" gap={10}>
        <TextStyle fontFamily="sans" type="span" fontSize="medium">
          학습 만료일:
        </TextStyle>
        <TextStyle
          fontFamily="sans"
          fontWeight={'bolder'}
          type="span"
          fontSize="medium">
          {endStudyDate}
        </TextStyle>
        <TextStyle
          fontFamily="sans"
          fontWeight={'bold'}
          fontColor="lightBlue"
          fontSize="medium"
          type="span"
          onClick={() => {}}>
          결제하기
        </TextStyle>
      </BoxStyle>
    </StudyStatusViewStyle>
  )
}

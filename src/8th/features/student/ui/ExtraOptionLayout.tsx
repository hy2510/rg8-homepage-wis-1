'use client'

import {
  ExtraOptionContentBodyStyle,
  ExtraOptionContentHeaderStyle,
  ExtraOptionLayoutStyle,
} from '@/8th/features/FeaturesStyled'
import CustomCheckbox from '@/8th/shared/ui/CustomCheckbox'
import { TextStyle } from '@/8th/shared/ui/Misc'
import { useState } from 'react'

/**
 * 연속학습 보기, 학습 일시 중지, 회원 탈퇴
 */
export default function ExtraOptionLayout() {
  const [awardViewMethod, setAwardViewMethod] = useState(false)

  return (
    <ExtraOptionLayoutStyle>
      <ExtraOptionContentHeaderStyle>
        <TextStyle fontFamily="sans" fontWeight={'bold'}>
          연속학습 보기
        </TextStyle>
      </ExtraOptionContentHeaderStyle>
      <ExtraOptionContentBodyStyle>
        <CustomCheckbox
          id="streak-award-view"
          checked={awardViewMethod}
          label="연속학습 어워드 보기"
          onChange={setAwardViewMethod}
        />
        <TextStyle fontFamily="sans" fontSize="medium" fontWeight={400}>
          보기를 선택하면 20일 단위로 획득한 연속 학습 어워드와 누적 기록을
          확인할 수 있습니다. 선택하지 않으면 어워드와 누적 기록은 표시되지
          않고, 현재 진행중인 실제 연속 학습 일수만 표시됩니다.
        </TextStyle>
      </ExtraOptionContentBodyStyle>
      <ExtraOptionContentHeaderStyle>
        <TextStyle fontFamily="sans" fontWeight={'bold'}>
          학습 일시 중지
        </TextStyle>
      </ExtraOptionContentHeaderStyle>
      <ExtraOptionContentBodyStyle>
        <TextStyle fontFamily="sans" fontWeight={'bold'} fontSize="medium">
          학습 일시중지가 가능합니다.
        </TextStyle>
        <TextStyle fontFamily="sans" fontSize="medium" fontWeight={400}>
          1. 매년 3회씩 사용할 수 있습니다. (예: 매년 1월 1일 3회 재생성)
          <br />
          2. 1회 신청 시 최대 30일간 중지가 가능하며, 일시 중지 기간 동안
          학습일수는 차감되지 않습니다.
          <br />
          3. 일시 중지 기간 안에도 해지하여 다시 학습이 가능합니다. (단, 중지
          신청 당일 해지할 수 없으며, 익일부터 해지가 가능합니다.)
          <br />
          4. 일시 중지 상태에서는 티켓 등록 및 학습일 결제가 되지 않습니다.
        </TextStyle>
        <TextStyle
          fontFamily="sans"
          fontSize="medium"
          fontWeight={'bold'}
          fontColor="lightBlue"
          onClick={() => {}}>
          일시 중지 신청
        </TextStyle>
      </ExtraOptionContentBodyStyle>
      <ExtraOptionContentHeaderStyle>
        <TextStyle fontFamily="sans" fontWeight={'bold'}>
          회원 탈퇴
        </TextStyle>
      </ExtraOptionContentHeaderStyle>
      <ExtraOptionContentBodyStyle>
        <TextStyle
          fontFamily="sans"
          fontWeight={'bold'}
          fontColor="secondary"
          fontSize="medium"
          onClick={() => {}}>
          회원 탈퇴 및 계정 삭제
        </TextStyle>
      </ExtraOptionContentBodyStyle>
    </ExtraOptionLayoutStyle>
  )
}

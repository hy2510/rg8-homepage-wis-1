'use client'

import { ReviewBookItemStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'

const getOrdinalSuffix = (num: number): string => {
  if (num === 1) return 'st'
  if (num === 2) return 'nd'
  if (num === 3) return 'rd'
  return 'th'
}

/**
 *
 */

interface ReviewBookItemProps {
  title?: string
  coverImage?: string
  totalScore?: number
  stepScore1?: number
  stepScore2?: number
  stepScore3?: number
  stepScore4?: number
  stepScore5?: number
  passMark?: 'PASS' | 'FAIL'
  passCount?: number
  studyDate?: string
}

export default function ReviewBookItem({
  title = 'Aligator’s Apples',
  coverImage = 'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-001.jpg',
  totalScore = 0,
  stepScore1,
  stepScore2,
  stepScore3,
  stepScore4,
  stepScore5,
  passMark,
  passCount,
  studyDate,
}: ReviewBookItemProps) {
  return (
    <ReviewBookItemStyle>
      <BoxStyle display="flex" alignItems="center" gap={20}>
        <BoxStyle className="book-cover">
          <Image src={coverImage} alt="book-cover" width={100} height={136} />
        </BoxStyle>
        <BoxStyle
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap={10}
          flexWrap="nowrap">
          <BoxStyle
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={10}>
            <div className="book-title">{title}</div>
            <div className={`total-score ${passMark === 'PASS' ? 'pass' : ''}`}>
              {totalScore}%
            </div>
          </BoxStyle>
          <BoxStyle display="flex">
            {[
              { step: 1, score: stepScore1 },
              { step: 2, score: stepScore2 },
              { step: 3, score: stepScore3 },
              { step: 4, score: stepScore4 },
              { step: 5, score: stepScore5 },
            ].map(({ step, score }) => (
              <div key={step} className="step-score">
                <span>{step}.</span>
                <span>{score === undefined ? '--' : `${score}%`}</span>
              </div>
            ))}
          </BoxStyle>
        </BoxStyle>
      </BoxStyle>
      <BoxStyle
        display="flex"
        alignItems="flex-end"
        flexDirection="column"
        gap={10}>
        <BoxStyle className="study-results">
          <span>
            {passMark}/{passCount}
            {passCount && getOrdinalSuffix(passCount)}
          </span>
          <span>({studyDate})</span>
        </BoxStyle>
        <div className={`perfect-mark ${totalScore === 100 ? 'perfect' : ''}`}>
          <span>{totalScore === 100 ? 'Perfect' : ''}</span>
        </div>
      </BoxStyle>
    </ReviewBookItemStyle>
  )
}

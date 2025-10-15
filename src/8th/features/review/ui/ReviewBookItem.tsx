'use client'

import { ReviewBookItemStyle } from '@/8th/features/FeaturesStyled'
import { ReviewMoreButton } from '@/8th/shared/ui/Buttons'
import CustomCheckbox from '@/8th/shared/ui/CustomCheckbox'
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
  bookCode?: string
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
  earnPoints?: number
  isExportMode?: boolean
  isSelected?: boolean
  onSelectionChange?: (selected: boolean) => void
  onRetry?: (title: string) => void
  onPrintReport?: (title: string) => void
  onPrintVocabulary?: (title: string) => void
  onPrintWorksheet?: (title: string) => void
}

export default function ReviewBookItem({
  title = 'no title',
  coverImage = 'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-001.jpg',
  bookCode = 'EB-KA-001',
  totalScore = 0,
  stepScore1,
  stepScore2,
  stepScore3,
  stepScore4,
  stepScore5,
  passMark,
  passCount,
  studyDate,
  earnPoints,
  isExportMode = false,
  isSelected = false,
  onSelectionChange,
  onRetry,
  onPrintReport,
  onPrintVocabulary,
  onPrintWorksheet,
}: ReviewBookItemProps) {
  return (
    <ReviewBookItemStyle>
      <BoxStyle display="flex" alignItems="center" gap={20}>
        <BoxStyle className="book-cover">
          <Image src={coverImage} alt="book-cover" width={100} height={136} />
          {isExportMode && (
            <BoxStyle
              position="absolute"
              top={'28px'}
              left={'8px'}
              zIndex={1}
              className="animate__animated animate__bounce">
              <CustomCheckbox
                id={`book-${title}-${Math.random()}`}
                checked={isSelected}
                onChange={(checked) => onSelectionChange?.(checked)}
              />
            </BoxStyle>
          )}
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
            <div>
              <div className="book-code">{bookCode}</div>
              <div className="book-title">{title}</div>
            </div>
            <div className={`total-score ${passMark === 'PASS' ? 'pass' : ''}`}>
              {totalScore}% {passMark === 'PASS' && earnPoints != 0 ? ', ' : ''}
              {earnPoints != 0 && `+${earnPoints}P`}
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
      <BoxStyle display="flex" alignItems="center" gap={10}>
        <BoxStyle
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          gap={10}>
          <BoxStyle className="study-results">
            <span>
              {passMark}
              {passMark === 'PASS' && ' / ' + passCount}
              {passMark === 'PASS' && getOrdinalSuffix(passCount || 0)}
            </span>
            <span>{studyDate}</span>
          </BoxStyle>
          {totalScore === 100 && (
            <div className="perfect-mark perfect">
              <span>Perfect</span>
            </div>
          )}
        </BoxStyle>
        <ReviewMoreButton
          title={title}
          onRetry={onRetry}
          onPrintReport={onPrintReport}
          onPrintVocabulary={onPrintVocabulary}
          onPrintWorksheet={onPrintWorksheet}
        />
      </BoxStyle>
    </ReviewBookItemStyle>
  )
}

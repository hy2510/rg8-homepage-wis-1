import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { DailyGoalItemStyle } from '../../FeaturesStyled'

/**
 * 일일목표달성 뱃지
 */

interface DailyGoalItemProps {
  getAward: boolean
  inProgress: number
  totalCount: number
  getDate: string
  awardImgSrc: string
}

export default function DailyGoalItem({
  getAward,
  inProgress,
  totalCount,
  getDate,
  awardImgSrc,
}: DailyGoalItemProps) {
  return (
    <DailyGoalItemStyle>
      {getAward ? (
        <BoxStyle className="daily-goal-item get-award">
          <Image
            src={awardImgSrc}
            alt="Daily Goal Award"
            width={120}
            height={120}
            className="daily-goal-image"
          />
          <BoxStyle display="flex" flexDirection="column" alignItems="center">
            <TextStyle className="daily-goal-text">
              {totalCount}회 달성 완료
            </TextStyle>
            <TextStyle className="daily-goal-text">+{getDate}</TextStyle>
          </BoxStyle>
        </BoxStyle>
      ) : (
        <BoxStyle
          className={`daily-goal-item ${inProgress === 0 ? '' : 'current-box'}`}>
          <BoxStyle
            position="absolute"
            top={'50%'}
            left={'50%'}
            transform="translate(-50%, -50%)">
            <TextStyle
              className={`daily-goal-text ${inProgress === 0 ? '' : 'current'}`}>
              {inProgress === 0
                ? `일일 목표 ${totalCount}`
                : `${inProgress}/${totalCount}회
              달성`}
            </TextStyle>
          </BoxStyle>
        </BoxStyle>
      )}
    </DailyGoalItemStyle>
  )
}

import { Assets } from '@/8th/assets/asset-library'
import {
  DailyRGCourseStyle,
  ProgressBarContainerStyle,
  ProgressBarFillStyle,
  ProgressBarStyle,
} from '@/8th/features/FeaturesStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/**
 * 제목, 진행상황, 개수
 */

interface DailyRGCourseProps {
  title?: string
  bookCount?: number
  total?: number
  isCurrent?: boolean
  bgColor?: string
  progressColor?: string
}

export default function DailyRGCourse({
  title = '1. Learn the Alphabet',
  bookCount = 0,
  total = 0,
  isCurrent = false,
  bgColor,
  progressColor,
}: DailyRGCourseProps) {
  const progressPercent = (bookCount / total) * 100
  const router = useRouter()

  return (
    <DailyRGCourseStyle
      bgColor={isCurrent ? bgColor : 'var(--color-gray-opacity-70)'}
      isCurrent={isCurrent}>
      <ProgressBarContainerStyle>
        <TextStyle fontColor={isCurrent ? '#fff' : 'secondary'}>
          {title}
        </TextStyle>
        <ProgressBarStyle>
          <ProgressBarFillStyle
            progressColor={
              isCurrent ? progressColor : 'var(--color-gray-strong)'
            }
            style={{ width: `${progressPercent}%` }}></ProgressBarFillStyle>
        </ProgressBarStyle>
      </ProgressBarContainerStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
        position="relative"
        borderLeft="1.5px solid #fff"
        zIndex={1}
        onClick={() => {
          router.push(
            `/8th/daily/result?title=${title}&bookCount=${bookCount}&totalCount=${total}`,
          )
        }}>
        {isCurrent ? (
          <Image src={Assets.Icon.menuWhite} alt="menu" />
        ) : (
          <Image src={Assets.Icon.menuGray} alt="menu" />
        )}
        <TextStyle
          fontColor={isCurrent ? '#fff' : 'secondary'}
          fontSize="0.7em">
          {bookCount}/{total}
        </TextStyle>
      </BoxStyle>
    </DailyRGCourseStyle>
  )
}

import { DailyRGBookItemStyle } from '@/8th/features/FeaturesStyled'
import { ResourceDownloadButton, StartButton } from '@/8th/shared/ui/Buttons'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { forwardRef, useEffect, useState } from 'react'
import BookInfoModal from '../../library/ui/BookInfoModal'

/**
 * Book Single Item
 */

interface DailyRGBookItemProps {
  imgUrl: string
  bookNumber?: number
  title?: string
  point?: number
  isCurrent?: boolean
  isCompleted?: number
  color?: string
  isPreK?: boolean
  onComplete?: () => void
}

const DailyRGBookItem = forwardRef<HTMLDivElement, DailyRGBookItemProps>(
  (
    {
      imgUrl,
      bookNumber = 1,
      title = 'Title',
      point = 0,
      isCurrent = false,
      isCompleted = 0,
      color = '#b535dc',
      isPreK = false,
      onComplete,
    },
    ref,
  ) => {
    const [animation, setAnimation] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
      if (!isCurrent) return

      const startAnimation = () => {
        setAnimation('animate__animated animate__bounce')
        setTimeout(() => setAnimation(''), 1000)
      }

      const timer = setTimeout(() => {
        startAnimation()
        const interval = setInterval(startAnimation, 10000)
        return () => clearInterval(interval)
      }, 10000)

      return () => clearTimeout(timer)
    }, [isCurrent])

    return (
      <DailyRGBookItemStyle
        ref={ref}
        className={isCurrent ? 'current-book' : ''}
        isPreK={isPreK}
        isCurrent={isCurrent}
        isCompleted={isCompleted}
        color={color}>
        <BoxStyle
          className="book-container"
          display="flex"
          alignItems="center"
          gap={30}>
          {isCompleted === 1 ? (
            <div className="completed-mark" />
          ) : isCompleted >= 2 ? (
            <div className="completed-mark-twin" />
          ) : (
            <div className="book-number">{bookNumber}</div>
          )}
          <div className="thumbnail">
            <Image
              src={imgUrl || ''}
              alt="thumbnail"
              width={100}
              height={100}
            />
          </div>
          <BoxStyle
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={10}>
            <BoxStyle
              className="title-box"
              display="flex"
              flexWrap="wrap"
              gap={5}>
              <span className="title">{title}</span>
              <span className="dot">•</span>
              <span className={`point ${isCompleted >= 2 ? 'good-job' : ''}`}>
                {isCompleted === 0
                  ? point + 'P'
                  : isCompleted === 1
                    ? (point / 2).toFixed(1) + 'P'
                    : 'Good Job 👍'}
              </span>
            </BoxStyle>
            {isCurrent && <StartButton onClick={onComplete} />}
          </BoxStyle>
        </BoxStyle>
        <ResourceDownloadButton setIsModalOpen={setIsModalOpen} />
        {isModalOpen && (
          <BookInfoModal
            onClickClose={() => setIsModalOpen(false)}
            title={title}
          />
        )}
      </DailyRGBookItemStyle>
    )
  },
)

DailyRGBookItem.displayName = 'DailyRGBookItem'

export default DailyRGBookItem

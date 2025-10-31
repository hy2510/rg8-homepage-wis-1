import { DailyRGBookItemStyle } from '@/8th/features/FeaturesStyled'
import { DisplayBlockStyle, DisplayNoneStyle } from '@/8th/shared/SharedStyled'
import { ResourceDownloadButton, StartButton } from '@/8th/shared/ui/Buttons'
import Image from 'next/image'
import { forwardRef, useState } from 'react'
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
    const [isModalOpen, setIsModalOpen] = useState(false)

    const renderCompletedMark = () => {
      if (isCompleted === 1) return <div className="completed-mark" />
      if (isCompleted >= 2) return <div className="completed-mark-twin" />
      return <div className="book-number">{bookNumber}</div>
    }

    const getPointText = () => {
      if (isCompleted === 0) return `${point}P`
      if (isCompleted === 1) return `${(point / 2).toFixed(1)}P`
      return 'Good Job 👍'
    }

    return (
      <DailyRGBookItemStyle
        ref={ref}
        className={isCurrent ? 'current-book' : ''}
        isPreK={isPreK}
        isCurrent={isCurrent}
        isCompleted={isCompleted}
        color={color}>
        <div
          className={`book-container ${
            isPreK ? 'mobile-prek-container' : 'mobile-book-container'
          }`}>
          {renderCompletedMark()}
          <div className={isPreK ? 'prek-thumbnail' : 'book-cover'}>
            <Image
              src={imgUrl || ''}
              alt="thumbnail"
              width={100}
              height={100}
            />
          </div>
          <div className="title-container">
            <div className="title-box">
              <div className="title">{title}</div>
              {/* <span className="dot">•</span> */}
              <div className={`point ${isCompleted >= 2 ? 'good-job' : ''}`}>
                {getPointText()}
              </div>
            </div>
            <DisplayBlockStyle showOnPhone>
              <ResourceDownloadButton
                setIsModalOpen={setIsModalOpen}
                isMobile
              />
            </DisplayBlockStyle>
            <DisplayNoneStyle hideOnPhone>
              {isCurrent && (
                <StartButton onClick={onComplete} className="animated" />
              )}
            </DisplayNoneStyle>
          </div>
        </div>
        <DisplayNoneStyle hideOnPhone>
          <ResourceDownloadButton setIsModalOpen={setIsModalOpen} />
        </DisplayNoneStyle>
        <DisplayBlockStyle showOnPhone style={{ width: '100%' }}>
          {isCurrent && (
            <StartButton
              onClick={onComplete}
              isMobile
              className="mobile-animated"
            />
          )}
        </DisplayBlockStyle>
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

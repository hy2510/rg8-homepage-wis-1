import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import styled from 'styled-components'

/**
 * 제목, 진행상황, 개수
 */
export default function DailyRGCourse({
  title = '1. Learn the Alphabet',
  bookCount = 2,
  total = 26,
  isCurrent = false,
  bgColor,
  progressColor,
}: {
  title?: string
  bookCount?: number
  total?: number
  isCurrent?: boolean
  bgColor?: string
  progressColor?: string
}) {
  const progressPercent = (bookCount / total) * 100
  return (
    <DailyRGCourseStyle
      bgColor={isCurrent ? bgColor : 'var(--color-gray-opacity-70)'}
      progressColor={isCurrent ? progressColor : 'var(--color-gray-strong)'}
      isCurrent={isCurrent}>
      <div className="progress-bar-container">
        <div className="title">{title}</div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
      <div className="view-all">
        {isCurrent ? (
          <Image src={Assets.Icon.menuWhite} alt="menu" />
        ) : (
          <Image src={Assets.Icon.menuGray} alt="menu" />
        )}
        <span>
          {bookCount}/{total}
        </span>
      </div>
    </DailyRGCourseStyle>
  )
}

const DailyRGCourseStyle = styled.div<{
  isCurrent?: boolean
  bgColor?: string
  progressColor?: string
}>`
  width: 100%;
  min-height: 77px;
  color: ${({ isCurrent }) =>
    isCurrent ? '#fff' : 'var(--color-gray-strong)'};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  background-image:
    url(${Assets.Icon.glossyPoint.src}), url(${Assets.Image.GlossyBg.src});
  background-size:
    10px 10px,
    auto 100%;
  background-position:
    top 7px left 7px,
    top 0 right 80px;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 80px;

  .progress-bar-container {
    position: relative;
    padding: 20px 0 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .title {
      font-weight: 500;
    }

    .progress-bar {
      width: calc(100% - 30px);
      height: 14px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: calc(50% - 4px);
        left: 0;
        width: 100%;
        height: 8px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 100px;
      }

      .progress-bar-fill {
        min-width: 30px;
        height: 14px;
        background-color: ${({ progressColor }) =>
          progressColor ? progressColor : '#ffca2b'};
        border-radius: 100px;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        z-index: 1;

        &::after {
          content: '';
          position: absolute;
          top: 3px;
          right: 5px;
          width: 15px;
          height: 3px;
          background-color: #fff;
          border-radius: 100px;
        }
      }
    }
  }

  .view-all {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-left: 1.5px solid rgba(255, 255, 255, 0.25);

    span {
      font-size: 0.7em;
    }
  }
`

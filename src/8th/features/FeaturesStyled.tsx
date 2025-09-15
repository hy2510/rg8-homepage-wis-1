'use client'

import { Assets } from '@/8th/assets/asset-library'
import styled from 'styled-components'

// features > achieve

export const ChallengeTrophyCardStyle = styled.div`
  width: 100%;
  max-width: 310px;
  min-height: 150px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--line-color-primary);

  .title-link {
    cursor: pointer;

    span {
      font-family: var(--font-family-secondary);
      font-weight: bold;
    }
  }

  .challenge-trophy-image {
    width: 72px;
    height: auto;
  }

  .challenge-award-name {
    font-size: var(--font-size-medium);
    font-family: var(--font-family-secondary);

    span {
      font-family: var(--font-family-secondary);
      &:first-child {
        font-weight: bold;
      }
      &:last-child {
        color: var(--font-color-secondary);
      }
    }
  }
`

export const DailyGoalCardStyle = styled.div`
  width: 100%;

  .body {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 10px;
    align-items: center;
  }

  .comment {
    font-size: var(--font-size-large);
    font-weight: bold;
    font-family: var(--font-family-secondary);
    padding-left: 10px;
  }

  .progress {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .donut-progress {
    position: relative;
    width: 100px;
    height: 100px;

    &::after {
      content: '';
      position: absolute;
      top: 14px;
      left: calc(50% - 1px);
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 50%;
      z-index: 10;
    }
  }

  .donut-chart {
    position: absolute;
    top: 0;
    left: 0;
  }

  .donut-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1em;
    text-align: center;

    .daily-progress {
      color: var(--font-color-secondary);

      &.active {
        color: var(--font-color-primary);
      }
    }

    .daily-goal {
      color: var(--font-color-secondary);
    }
  }
`

export const LevelMasterCardStyle = styled.div`
  width: 100%;
  max-width: 150px;
  min-height: 150px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--line-color-primary);

  .title-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-family: var(--font-family-secondary);
      font-weight: bold;
    }

    img {
      display: block;
    }
  }

  .level {
    color: var(--font-color-light-blue);
    font-size: var(--font-size-xxlarge);
    font-weight: bold;
  }

  .earn-points {
    color: var(--font-color-secondary);
    font-size: var(--font-size-medium);
  }
`

export const ReadingUnitCardStyle = styled.div`
  width: 100%;

  .body {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-top: 15px;
  }

  .friend-name {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    height: 60px;
    position: relative;

    .text {
      font-size: var(--font-size-xlarge);
      font-weight: bold;
      color: var(--font-color-primary);
      margin-bottom: 20px;
      padding-left: 10px;
    }

    .thumbnail {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .friend-progress {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 80px;
    gap: 10px;
    align-items: center;

    .progress-bar {
      width: 100%;
      height: 10px;
      position: relative;
      background-color: var(--line-color-primary);
      border-radius: 100px;

      .progress-bar-fill {
        min-width: 30px;
        height: 14px;
        background-color: var(--line-color-light-blue);
        border-radius: 100px;
        position: absolute;
        top: -2px;
        left: 0;
        z-index: 1;
        transition: width 0.3s ease;

        &::after {
          content: '';
          position: absolute;
          top: 3px;
          right: 5px;
          width: 15px;
          height: 3px;
          background-color: #f0fef5;
          border-radius: 100px;
        }
      }
    }

    .progress-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;

      .progress-text-value {
        font-size: var(--font-size-small);
        font-weight: bold;
        color: var(--font-color-primary);
      }

      .progress-text-point {
        font-size: var(--font-size-small);
        color: var(--font-color-secondary);
      }
    }
  }
`

export const StreakCardStyle = styled.div`
  width: 100%;
`

export const StreakStatusStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  .streak-progress {
    width: 100%;
    height: 24px;
    border-radius: 100px;
    background-color: var(--color-gray-light);

    &.active {
      background-color: rgb(255, 55, 75, 0.2);
    }

    .streak-progress-fill {
      height: 100%;
      border-radius: 100px;
      background-color: var(--color-gray-medium);
      background-image: url(${Assets.Icon.checkWhite.src});
      background-size: 24px;
      background-repeat: repeat-x;
      position: relative;
      transition: width 1s ease-in-out;

      .streak-fire-icon {
        position: absolute;
        top: calc(50% - 15px);
        right: -15px;
        width: 30px;
        height: 30px;
        z-index: 1;
        filter: grayscale(100%);
        opacity: 0.8;
      }

      &.active {
        background-color: var(--color-red-medium);

        .streak-fire-icon {
          top: calc(50% - 30px);
          right: -25px;
          width: 50px;
          height: 50px;
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }

  .streak-progress-text {
    width: 100%;
    font-size: var(--font-size-medium);
    color: var(--font-color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      color: var(--color-red-medium);
    }

    span {
      color: var(--font-color-secondary);
    }
  }
`

// features > daily

export const DailyRGBookItemStyle = styled.div<{
  isCurrent?: boolean
  isCompleted?: number
  color?: string
}>`
  width: 100%;
  min-height: 150px;
  border-radius: 20px;
  border: 1px solid var(--line-color-primary);
  box-shadow: 0 3px 0 0 var(--line-color-primary);
  padding: 10px;
  background-color: ${({ isCurrent, isCompleted = 0 }) =>
    isCurrent || isCompleted >= 1 ? '#fff' : '#a2b1c410'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .book-container {
    .book-number,
    .completed-mark,
    .completed-mark-twin {
      position: absolute;
      top: -10px;
      left: -10px;
      z-index: 1;
      border-radius: 20px;
    }

    .book-number {
      font-size: var(--font-size-small);
      font-weight: 600;
      color: ${({ isCompleted, isCurrent }) =>
        isCompleted || isCurrent ? '#fff' : 'var(--font-color-secondary)'};
      border: 2px solid #fff;
      background: ${({ color, isCompleted, isCurrent }) =>
        isCompleted || isCurrent ? color : 'var(--color-gray-medium)'};
      background-image: url('${Assets.Icon.glossyPointSmall.src}');
      background-size: 6px;
      background-repeat: no-repeat;
      background-position: top 5px left 5px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .completed-mark {
      background-image: url('${Assets.Icon.Study.checkMarkGold.src}');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      width: 40px;
      height: 40px;
    }

    .completed-mark-twin {
      background-image: url('${Assets.Icon.Study.checkMarkGoldTwin.src}');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      width: 70px;
      height: 40px;
    }

    .thumbnail {
      cursor: pointer;
      border-radius: 15px;
      background-color: var(--color-gray-strong);

      img {
        display: block;
        width: auto;
        height: 130px;
        border-radius: 15px;
        background-color: var(--color-gray-medium);
        filter: ${({ isCurrent, isCompleted }) =>
          isCurrent || isCompleted ? 'none' : 'grayscale(100%)'};
        opacity: ${({ isCurrent, isCompleted }) =>
          isCurrent || isCompleted ? 1 : 0.6};
      }
    }
  }

  .title-box {
    padding-left: 3px;
    max-width: 380px;

    .title {
      color: ${({ isCurrent, isCompleted }) =>
        isCurrent || isCompleted
          ? 'var(--font-color-primary)'
          : 'var(--color-gray-strong)'};
      font-size: var(--font-size-large);
      font-weight: 500;
    }

    .dot {
      color: var(--font-color-secondary);
      font-size: var(--font-size-medium);
    }

    .point {
      color: ${({ isCurrent, isCompleted }) =>
        isCurrent || isCompleted
          ? 'var(--font-color-light-blue)'
          : 'var(--color-gray-strong)'};
      font-size: var(--font-size-medium);

      &.good-job {
        color: var(--font-color-secondary);
      }
    }
  }
`

export const DailyRGCourseStyle = styled.div<{
  isCurrent?: boolean
  bgColor?: string
  progressColor?: string
}>`
  width: 100%;
  min-height: 77px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  background-image: url(${Assets.Icon.glossyPoint.src});
  background-size: 10px 10px;
  background-position: top 7px left 7px;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 80px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-image: url(${Assets.Image.GlossyBg.src});
    background-size: contain;
    background-position: top 0 left 0;
    background-repeat: no-repeat;
    animation: var(--animation-glass-complete);
    z-index: 0;
  }
`

export const ProgressBarContainerStyle = styled.div`
  position: relative;
  padding: 20px 0 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

export const ProgressBarStyle = styled.div`
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
`

export const ProgressBarFillStyle = styled.div<{ progressColor?: string }>`
  min-width: 30px;
  height: 14px;
  background-color: ${({ progressColor }) =>
    progressColor ? progressColor : 'var(--color-gray-strong)'};
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
`

export const DailyRGLevelStyle = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  gap: 10px;
  position: relative;
`

// features > level

export const BookInfoModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BookInfoMainBannerStyle = styled.div<{ bookCover: string }>`
  width: 100%;
  min-height: 220px;
  background-image: url(${({ bookCover }) => bookCover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 30px;

  .wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(${Assets.Icon.glossyPoint2.src});
    background-size: 10px;
    background-repeat: no-repeat;
    background-position: top 6px left 6px;
    backdrop-filter: blur(10px);
    padding: 10px;
    border-radius: 20px;
    overflow: hidden;

    .book-cover {
      width: 140px;
      min-height: 200px;
      position: relative;
      display: flex;
      align-items: center;

      .movie-play-button {
        cursor: pointer;
        position: absolute;
        top: calc(50% - 25px);
        left: calc(50% - 25px);
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.3);

        img {
          width: 100%;
          height: 100%;
        }

        &:active {
          top: calc(50% - 24px);
          left: calc(50% - 24px);
          width: 48px;
          height: 48px;
          box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.5);
        }
      }

      .book-cover-img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 15px;
      }
    }
  }

  .content {
    .book-info {
      padding-top: 10px;
      color: #fff;

      .book-code {
        font-size: var(--font-size-small);
        font-family: var(--font-family-secondary);
        font-weight: 500;
        margin-bottom: 3px;
      }

      .title {
        font-size: var(--font-size-large);
        margin-bottom: 10px;
      }

      .author {
        font-size: var(--font-size-medium);
      }
    }

    .buttons {
      padding-bottom: 10px;
    }
  }
`

export const BookInfoButtonsStyle = styled.div`
  padding: 0 15px;
  margin-bottom: 40px;
  font-size: var(--font-size-medium);
  color: var(--font-color-light-blue);

  .btn {
    cursor: pointer;
    width: fit-content;
    height: 24px;
    padding-left: 33px;
    background-image: url(${Assets.Icon.downloadLightBlue.src});
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;

    &.to-do {
      background-image: url(${Assets.Icon.Side.toDo.src});
    }

    &.favorite {
      background-image: url(${Assets.Icon.Side.favorite.src});
    }

    &.add {
      &::after {
        content: '';
        position: absolute;
        top: calc(100% - 10px);
        left: 14px;
        width: 20px;
        height: 20px;
        background-image: url(${Assets.Icon.plusGreen.src});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    &.remove {
      color: var(--font-color-secondary);
      &::after {
        content: '';
        position: absolute;
        top: calc(100% - 10px);
        left: 14px;
        width: 20px;
        height: 20px;
        background-image: url(${Assets.Icon.minusBlue.src});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
`

export const BookInfoSummaryStyle = styled.div`
  padding: 0 15px;
  margin-bottom: 30px;

  .summary-content {
    font-size: 1em;
    font-family: var(--font-family-secondary);
  }
`

export const BookInfoDetailStyle = styled.div`
  padding: 20px 10px;
  margin: 0 10px;
  border-top: 1px solid var(--line-color-primary);
  border-bottom: 1px solid var(--line-color-primary);
`

export const BookInfoDetailItemStyle = styled.div`
  .title {
    font-size: var(--font-size-medium);
    font-family: var(--font-family-secondary);
    color: var(--font-color-secondary);
  }

  .content {
    font-size: var(--font-size-small);
    color: var(--font-color-primary);
    letter-spacing: -0.08em;
    padding-top: 3px;
  }
`

export const BookInfoPointsStyle = styled.div`
  padding: 20px 10px;
  margin: 0 10px;
  border-bottom: 1px solid var(--line-color-primary);

  .title {
    font-size: var(--font-size-medium);
    font-family: var(--font-family-secondary);
    color: var(--font-color-secondary);
  }

  .wrapper {
    .earn-point {
      font-size: var(--font-size-small);

      .point-icon {
        width: 24px;
        height: 24px;
        background-image: url(${Assets.Icon.Study.checkMarkGold.src});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        opacity: 0.5;

        &.passed {
          -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
          opacity: 1;
        }
      }

      .passed {
        padding-top: 2px;
        color: var(--font-color-secondary);
        letter-spacing: -0.05em;
      }

      .point {
        padding-top: 2px;
        color: var(--font-color-primary);
      }
    }
  }
`

export const BookItemStyle = styled.div<{ level: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .book-cover-container {
    cursor: pointer;
    width: 100%;
    height: 240px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .book-cover-wrapper {
      position: relative;

      .book-cover {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        background-color: var(--color-gray-opacity-70);
        border-radius: 15px;
      }

      .check-box-position {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
        padding: 10px;
        cursor: pointer;
      }

      .badges {
        position: absolute;
        top: -8px;
        right: -8px;
        z-index: 1;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3px;

        img {
          width: auto;
          height: 30px;
          object-fit: contain;
        }

        .badge-passed {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .movie-icon {
        position: absolute;
        bottom: 3px;
        right: 3px;
        z-index: 1;
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .book-cover-skeleton {
      width: 100%;
      height: 200px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 15px;
    }
  }

  .book-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .wrapper {
      text-align: center;

      .title {
        font-size: var(--font-size-small);
        color: var(--font-color-primary);
      }

      .title-skeleton {
        width: 80px;
        height: 12px;
        background: linear-gradient(
          90deg,
          #f0f0f0 25%,
          #e0e0e0 50%,
          #f0f0f0 75%
        );
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        border-radius: 6px;
        margin: 0 auto;
      }

      .dot {
        font-size: 0.7em;
        color: var(--font-color-secondary);
        padding: 0 3px;
      }

      .point {
        font-size: var(--font-size-small);
        color: var(--font-color-light-blue);
      }

      .point-skeleton {
        width: 40px;
        height: 12px;
        background: linear-gradient(
          90deg,
          #f0f0f0 25%,
          #e0e0e0 50%,
          #f0f0f0 75%
        );
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        border-radius: 6px;
        margin: 0 auto;
      }

      .gap {
        width: 100%;
        height: 5px;
      }
    }
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

export const BookListDateGroupStyle = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  gap: 20px 10px;
`

export const BookListEmptyStateStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  p {
    color: var(--font-color-secondary);
    font-size: 1em;
    font-family: var(--font-family-secondary);
  }
`

export const CollectionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .title {
    font-size: var(--font-size-large);
    color: var(--font-color-primary);
  }

  color: var(--font-color-primary);
`

export const CollectionItemStyled = styled.div<{
  iconBgColor?: string
}>`
  cursor: pointer;
  padding: 15px;
  border: 1px solid var(--line-color-primary);
  border-radius: 20px;
  color: var(--font-color-primary);
  letter-spacing: -0.05em;

  .icon-box {
    width: 50px;
    height: 50px;
    background-color: ${({ iconBgColor }) => iconBgColor};
    background-image: url(${Assets.Icon.glossyPointSmall.src});
    background-size: 7px;
    background-repeat: no-repeat;
    background-position: top 5px left 5px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const LevelItemStyle = styled.div<{
  bgColor: string
  isTransitioning: boolean
  fontColor: string
}>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  position: relative;

  .level-image-container {
    width: 100%;
    height: 160px;
    border-radius: 20px;
    position: relative;
    background-color: ${({ bgColor }) => bgColor};
    background-image: url(${Assets.Icon.glossyPoint.src});
    background-size: 15px;
    background-position: top 5px left 5px;
    background-repeat: no-repeat;

    .book-cover {
      position: absolute;
      left: 20px;
      bottom: 20px;
      z-index: 2;
      width: 80px;
      height: auto;
      border-radius: 10px;
      border: 2px solid #fff;
      object-fit: cover;
      transform: rotate(-5deg);
      background-color: ${({ bgColor }) => bgColor};
      transition: opacity 0.15s ease-in-out;
      opacity: ${({ isTransitioning }) => (isTransitioning ? 0.7 : 1)};
    }

    .book-cover-shadow {
      position: absolute;
      left: 20px;
      bottom: 20px;
      z-index: 1;
      width: 80px;
      height: 100px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transform: rotate(-15deg);
    }
  }

  .level-container {
    width: 100%;
    height: 160px;
    position: absolute;

    .wrapper {
      position: absolute;
      right: 20px;
      bottom: 20px;
      z-index: 3;

      .level {
        font-size: 2.5em;
        font-weight: 500;
        color: ${({ fontColor }) => fontColor};
        margin-bottom: 3px;
      }

      .more-books {
        font-size: var(--font-size-medium);
        font-weight: 500;
        color: #fff;
        padding-left: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        opacity: 0.7;
      }
    }
  }

  .study-count {
    font-size: var(--font-size-small);
    font-weight: 500;
    color: var(--font-color-secondary);
    text-align: center;
  }

  .delete-button {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const LevelPkItemStyle = styled.div<{
  bgColor: string
  isTransitioning: boolean
  fontColor: string
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  position: relative;

  .thumbnail-container {
    cursor: pointer;
    width: 100%;
    height: 160px;
    padding: 20px;
    padding-top: 15px;
    border-radius: 20px;
    position: relative;
    background-color: ${({ bgColor }) => bgColor};
    background-image: url(${Assets.Icon.glossyPoint.src});
    background-size: 15px;
    background-position: top 5px left 5px;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .thumbnail-image {
      width: 100%;
      height: auto;
      border-radius: 15px;
      border: 2px solid #fff;
      transform: rotate(-5deg);
      background-color: ${({ bgColor }) => bgColor};
      position: relative;
      z-index: 2;
      filter: contrast(1.025);

      &.sub {
        border: none;
      }
    }

    .thumbnail-shadow {
      position: absolute;
      top: 15px;
      left: calc(50% - 80px);
      z-index: 1;
      width: 160px;
      height: 100px;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.2);
      transform: rotate(-12deg);
    }
  }

  .title-container {
    cursor: pointer;
    width: 100%;
    height: 160px;
    position: absolute;

    .title {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      z-index: 3;
      bottom: 15px;
      color: ${({ fontColor }) => fontColor};
      font-size: var(--font-size-large);
      text-align: center;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
  }

  .study-count {
    font-size: var(--font-size-small);
    font-weight: 500;
    color: var(--font-color-secondary);
    text-align: center;
  }

  .delete-button {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const LevelSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .title {
    font-size: var(--font-size-xlarge);
    color: var(--font-color-primary);
  }

  .accordion-container {
    border-top: 1px solid var(--line-color-primary);
    transition: opacity 0.3s ease-in-out;

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
  }

  .accordion-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--line-color-primary);

    &.open {
      background-color: var(--color-light-blue-opacity-10);

      .accordion-title {
        color: var(--font-color-dark-blue);
      }
    }

    .accordion-title {
      color: var(--font-color-secondary);
      font-size: 1em;
      font-weight: 500;
    }

    .arrow {
      font-size: var(--font-size-small);
      transition: transform 0.3s ease;
      margin-left: 10px;
    }
  }

  .accordion-body {
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.3s ease,
      padding 0.3s ease;

    &.open {
      max-height: 1000px;
      border-bottom: 1px solid var(--line-color-primary);
    }
  }

  .level-header {
    font-size: var(--font-size-large);
    font-weight: 500;
    color: var(--font-color-primary);
    margin-bottom: 15px;
  }

  .sub-header {
    font-size: var(--font-size-medium);
    color: var(--font-color-primary);
    margin: 30px 0 20px 5px;
  }

  .level-container,
  .series-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px;
    margin-bottom: 15px;
  }
`

export const RecentlyViewedStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .list {
    transition: opacity 0.3s ease-in-out;

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }
`

export const SearchBarStyle = styled.div`
  width: 100%;
  height: 52px;
  border: 1px solid var(--line-color-primary);
  border-radius: 100px;
  display: grid;
  grid-template-columns: fit-content(100px) 1fr;
  align-items: center;

  .search-option {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 20px;
  }

  .search-input {
    width: calc(100% - 70px);
    height: 100%;
    border: none;
    outline: none;

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-family: var(--font-family-secondary);
    }
  }

  .search-button {
    width: 50px;
    height: 100%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 20px;
      height: 20px;
    }
  }
`

export const SeriesItemStyle = styled.div<{
  bgColor: string
}>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  position: relative;

  .series-image-container {
    width: 100%;
    height: 160px;
    border-radius: 20px;
    position: relative;
    background-color: ${({ bgColor }) => bgColor};
    background-image: url(${Assets.Icon.glossyPoint.src});
    background-size: 15px;
    background-position: top 5px left 5px;
    background-repeat: no-repeat;
    overflow: hidden;

    .book-cover {
      position: absolute;
      left: calc(50% - 60px);
      bottom: -20%;
      z-index: 2;
      width: 120px;
      height: auto;
      border-radius: 10px;
      border: 2px solid #fff;
      object-fit: cover;
      background-color: ${({ bgColor }) => bgColor};
    }

    .book-cover-shadow {
      position: absolute;
      left: calc(50% - 75px);
      bottom: -20%;
      z-index: 1;
      width: 120px;
      height: 160px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transform: rotate(-15deg);
    }
  }

  .series-name {
    font-size: var(--font-size-small);
    font-weight: 500;
    color: var(--font-color-secondary);
    text-align: center;
  }

  .delete-button {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const ThemeItemStyle = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border: 1px solid var(--line-color-primary);
  border-radius: 20px;
  padding: 10px;

  .theme-img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 15px;
    background-color: var(--color-gray-light);
  }

  .title {
    color: var(--font-color-dark-blue);
  }
`

// features > rank

export const RankCardStyle = styled.div`
  width: 100%;
  max-width: 150px;
  min-height: 150px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--line-color-primary);

  .title-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-family: var(--font-family-secondary);
      font-weight: bold;
    }

    img {
      display: block;
    }
  }

  .rank {
    color: var(--font-color-light-blue);
    font-size: var(--font-size-xxlarge);
    font-weight: bold;
  }
`

// features > review

export const RecentReviewListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    width: fit-content;
    font-size: var(--font-size-xlarge);

    img {
      display: block;
      width: 24px;
      height: 24px;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const ReviewBookItemStyle = styled.div`
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.9em;

  .book-cover {
    width: 100px;
    height: 160px;
    transform: rotate(-5deg);
    display: flex;
    align-items: flex-end;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 15px;
      background-color: var(--color-gray-opacity-70);
    }
  }

  .book-title {
    font-size: var(--font-size-large);
  }

  .total-score {
    font-size: var(--font-size-large);
    color: var(--font-color-secondary);
    padding-left: 5px;

    &.pass {
      color: var(--font-color-light-blue);
    }
  }

  .step-score {
    color: var(--font-color-secondary);
    border: 1px solid var(--line-color-primary);
    border-right: none;
    padding: 5px 8px;
    font-size: var(--font-size-small);

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
      border: 1px solid var(--line-color-primary);
    }

    span {
      &:first-child {
        color: var(--font-color-secondary);
        margin-right: 2px;
      }
    }

    span {
      &:last-child {
        color: var(--font-color-primary);
      }
    }
  }

  .study-results {
    letter-spacing: -0.05em;
    font-size: var(--font-size-medium);
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      &:first-child {
        color: var(--font-color-primary);
      }

      &:last-child {
        color: var(--font-color-secondary);
      }
    }
  }

  .date {
    letter-spacing: -0.05em;
    font-size: var(--font-size-medium);
  }

  .perfect-mark {
    min-height: 25px;
    position: relative;
    z-index: 1;

    span {
      position: relative;
      z-index: 1;
    }

    &.perfect {
      background-color: #ffca2b;
      background-image: url(${Assets.Icon.glossyPointSmall.src});
      background-size: 6px, contain;
      background-position: top 2px left 2px;
      background-repeat: no-repeat;
      color: #b2720a;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: var(--font-size-medium);
      letter-spacing: -0.05em;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-image: url(${Assets.Image.GlossyBgSmallWhite.src});
        background-size: contain;
        background-position: top 0 left 0;
        background-repeat: no-repeat;
        animation: var(--animation-glass-reflection-infinite);
        z-index: 0;
      }
    }
  }
`

export const ExtraOptionLayoutStyle = styled.div`
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: var(--line-color-primary);
  border-radius: 20px;
`

export const ExtraOptionContentHeaderStyle = styled.div`
  width: 100%;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: var(--line-color-primary);
  padding: 20px;
`

export const ExtraOptionContentBodyStyle = styled.div`
  width: 100%;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: var(--line-color-primary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:last-child {
    border-width: 0;
  }
`

export const SettingHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line-color-primary);
  border-bottom: 1px solid var(--line-color-primary);
  padding: 20px;
  width: 100%;

  .title {
    padding-top: 2px;
  }

  .btn {
    cursor: pointer;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);
    font-weight: 700;

    &.save {
      color: var(--font-color-light-blue);
    }

    &.cancel,
    &.saved {
      color: var(--font-color-secondary);
    }

    &.saved {
      cursor: default;
    }
  }
`

export const SettingImageSelectorStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  padding: 20px 0;
  margin-bottom: 20px;
`

export const SettingImageSelectorNavigationButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: var(--font-color-primary);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

export const SettingImageSelectorAvatarContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

export const SettingImageSelectorPageIndicator = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const SettingImageSelectorPageDot = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--font-color-light-blue)' : 'var(--line-color-primary)'};
  transition: all 0.2s ease;
`

export const SettingImageSelectorAvatarItemStyle = styled.div<{
  isSelected: boolean
  imageSize: number
}>`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  width: ${({ imageSize }) => imageSize}px;
  height: ${({ imageSize }) => imageSize}px;
  filter: grayscale(1);
  opacity: 0.5;

  ${({ isSelected }) =>
    isSelected &&
    `
    border-color: var(--line-color-light-blue);
    background-color: rgba(76, 207, 241, 0.20);
    filter: grayscale(0);
    opacity: 1;
  `}

  &:hover {
    transform: scale(1.05);
  }

  .avatar-image {
    transition: all 0.2s ease;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 110px;
    height: 110px;
    object-fit: cover;
  }

  .avatar-name {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-primary);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`
export const SettingRadioSelectorStyle = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
`

export const RadioSelectorItemStyle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 0;
  transition: opacity 0.2s ease;
`

export const CustomRadioInputStyle = styled.input`
  cursor: pointer;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--line-color-light-blue);
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: #fff;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--line-color-light-blue);
  }

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`

export const RadioLabelStyle = styled.div`
  cursor: pointer;
  color: var(--font-color-primary);
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-medium);
  font-weight: 700;
  user-select: none;
`

export const StudentEditCardStyle = styled.div`
  width: 100%;
  border: 1px solid var(--line-color-primary);
  border-radius: 20px;
  padding: 20px;
  font-family: var(--font-family-secondary);
  position: relative;

  .label {
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-small);
    color: var(--font-color-secondary);
    margin-bottom: 5px;
  }

  input {
    color: var(--font-color-primary);
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);
    font-weight: 700;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    padding: 0;
    margin: 0;

    &::placeholder {
      color: var(--font-color-secondary);
    }
  }
`

export const StudentEditCardButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`

export const StudentEditCardButton = styled.div`
  cursor: pointer;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-medium);
  font-weight: 700;

  &.edit,
  &.save {
    color: var(--font-color-light-blue);
  }

  &.cancel {
    color: var(--font-color-secondary);
  }
`

export const StudentInfoCardStyle = styled.div`
  width: 100%;
  min-height: 170px;
  background-color: var(--color-light-blue-opacity-10);
  background-image: url(${Assets.Icon.glossyPoint.src});
  background-size: 15px;
  background-position: top 7px left 7px;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 1px solid var(--line-color-primary);
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-image: url(${Assets.Image.GlossyBgBigWhite.src});
    background-size: contain;
    background-position: top 0 left 0;
    background-repeat: no-repeat;
    animation: var(--animation-glass-complete);
    z-index: 0;
  }

  .character-container {
    width: 250px;
    height: 160px;
    position: absolute;
    left: 20px;
    bottom: -25px;
    display: flex;
    align-items: flex-end;

    .main-character {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: auto;
      height: 160px;
    }

    .sub-character {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: auto;
      height: 160px;
    }
  }

  .info-container {
    width: calc(100% - 280px);
    height: 100%;
    padding-left: 280px;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .user-name {
      font-family: var(--font-family-secondary);
      font-size: var(--font-size-xlarge);
      font-weight: bold;
    }

    .user-id,
    .sign-up-date,
    .customer-group-name {
      font-family: var(--font-family-secondary);
      font-weight: 700;
      font-size: var(--font-size-small);
      color: var(--font-color-secondary);
    }

    .buttons {
      display: flex;
      gap: 20px;

      a {
        font-size: var(--font-size-medium);
        color: var(--font-color-light-blue);
      }
    }
  }
`

export const StudentProfileCardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    align-items: center;
    gap: 10px;

    .avatar {
      min-width: 50px;
      min-height: 50px;
      border-radius: 50%;
      overflow: hidden;

      img {
        display: block;
      }
    }

    .rank {
      font-size: var(--font-size-large);
      padding-top: 5px;
      color: var(--font-color-light-blue);
    }

    .name {
      font-size: var(--font-size-xlarge);
      font-weight: bold;
      font-family: var(--font-family-secondary);
      color: var(--font-color-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .body {
    display: grid;
    grid-template-columns: 1fr 100px;
    gap: 10px;

    .label {
      font-size: var(--font-size-medium);
      color: var(--font-color-secondary);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .value {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: var(--font-size-medium);
      font-weight: 600;

      &.link {
        cursor: pointer;
        color: var(--font-color-light-blue);
      }
    }
  }
`

export const StudyStatusViewStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 25px;
  background-color: var(--color-gray-light);
  border-radius: 20px;
`

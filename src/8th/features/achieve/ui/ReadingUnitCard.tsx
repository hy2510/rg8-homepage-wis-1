import { CommonTitleStyle, WidgetBoxStyle } from '@/8th/shared/ui/Widgets'
import Image from 'next/image'
import styled from 'styled-components'

/**
 * 리딩유닛 카드
 */
export default function ReadingUnitCard({
  friendName = 'MILLO',
  friendThumbnail = 'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png',
  friendProgress = 20,
  friendPoint = 100,
}: {
  friendName?: string
  friendThumbnail?: string
  friendProgress?: number
  friendPoint?: number
}) {
  return (
    <WidgetBoxStyle>
      <ReadingUnitCardStyle>
        <CommonTitleStyle>프렌즈 스토리</CommonTitleStyle>
        <div className="body">
          <div className="friend-name">
            <div className="text">{friendName}</div>
            <div className="thumbnail">
              <Image src={friendThumbnail} alt="" width={80} height={80} />
            </div>
          </div>
          <div className="friend-progress">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${(friendProgress / friendPoint) * 100}%`,
                }}></div>
            </div>
            <div className="progress-text">
              <div className="progress-text-value">{friendProgress}</div>
              <div className="progress-text-point">/{friendPoint}P</div>
            </div>
          </div>
        </div>
      </ReadingUnitCardStyle>
    </WidgetBoxStyle>
  )
}

const ReadingUnitCardStyle = styled.div`
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
      font-size: 1.2em;
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
        font-size: 0.8em;
        font-weight: bold;
        color: var(--font-color-primary);
      }

      .progress-text-point {
        font-size: 0.8em;
        color: var(--font-color-secondary);
      }
    }
  }
`

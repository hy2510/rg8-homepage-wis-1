'use client'

import { Assets } from '@/8th/assets/asset-library'
import { WidgetBoxStyle } from '@/8th/shared/ui/Widgets'
import Image from 'next/image'
import styled from 'styled-components'

/**
 * 리딩유닛, 아바타, 이름 나오는 카드
 */
export default function StudentProfileCard({
  studentName = 'Rose',
}: {
  studentName: string
}) {
  return (
    <WidgetBoxStyle>
      <StudentProfileCardStyle>
        <div className="header">
          <div className="avatar">
            <Image
              src="https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_09.png"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="rank">#10</div>
          <div className="name">{studentName}</div>
        </div>
        <div className="body">
          <div className="label">
            <Image
              src={Assets.Icon.Side.booksRead}
              alt=""
              width={34}
              height={34}
            />
            Books Read
          </div>
          <div className="value">20</div>
          <div className="label">
            <Image
              src={Assets.Icon.Side.earnedPoints}
              alt=""
              width={34}
              height={34}
            />
            Earned Points
          </div>
          <div className="value">100P</div>
          <div className="label">
            <Image src={Assets.Icon.Side.toDo} alt="" width={34} height={34} />
            To-Do
          </div>
          <div className="value link">10</div>
          <div className="label">
            <Image
              src={Assets.Icon.Side.favorite}
              alt=""
              width={34}
              height={34}
            />
            Favorite
          </div>
          <div className="value link">10</div>
        </div>
      </StudentProfileCardStyle>
    </WidgetBoxStyle>
  )
}

const StudentProfileCardStyle = styled.div`
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
      font-size: 1.1em;
      padding-top: 5px;
      color: var(--font-color-light-blue);
    }

    .name {
      font-size: 1.2em;
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
      font-size: 0.9em;
      color: var(--font-color-secondary);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .value {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.9em;
      font-weight: 600;

      &.link {
        cursor: pointer;
        color: var(--font-color-light-blue);
      }
    }
  }
`

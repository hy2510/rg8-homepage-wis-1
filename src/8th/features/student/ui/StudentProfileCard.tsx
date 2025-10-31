'use client'

import { Assets } from '@/8th/assets/asset-library'
import { StudentProfileCardStyle } from '@/8th/features/FeaturesStyled'
import { WidgetBoxStyle } from '@/8th/shared/SharedStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import SITE_PATH from '@/app/site-path'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/**
 * 리딩유닛, 아바타, 이름 나오는 카드
 */

interface StudentProfileCardProps {
  studentName: string
  studentLevel: string
  pointRank: number
  booksRead: number
  earnedPoints: string
  toDoCount: number
  favoriteCount: number
}

export default function StudentProfileCard({
  studentName = 'Rose',
  studentLevel = 'KA',
  pointRank = 10,
  booksRead = 0,
  earnedPoints = '100.1',
  toDoCount = 0,
  favoriteCount = 0,
}: StudentProfileCardProps) {
  const router = useRouter()

  return (
    <WidgetBoxStyle>
      <StudentProfileCardStyle>
        <div
          className="header"
          onClick={() => router.push(SITE_PATH.NW8.ACTIVITY)}>
          <div className="avatar">
            <Image
              src="https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_09.png"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <BoxStyle display="flex" flexDirection="column" gap={3}>
            <BoxStyle display="flex" alignItems="center" gap={5}>
              {/* <div className="rank">#{pointRank}</div> */}
              <div className="name">{studentName}</div>
            </BoxStyle>
            <TextStyle
              fontSize="0.75em"
              fontColor="lightBlue"
              padding="0 0 0 2px">
              Lv.{studentLevel} {pointRank > 1000 ? '' : '/ Rank ' + pointRank}
            </TextStyle>
          </BoxStyle>
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
          <div className="value">{booksRead}</div>
          <div className="label">
            <Image
              src={Assets.Icon.Side.earnedPoints}
              alt=""
              width={34}
              height={34}
            />
            Earned Points
          </div>
          <div className="value">{earnedPoints}P</div>
          <div className="label">
            <Image src={Assets.Icon.Side.toDo} alt="" width={34} height={34} />
            To-Do
          </div>
          <div
            className="value link"
            onClick={() => router.push(SITE_PATH.NW8.TODO)}>
            {toDoCount}
          </div>
          <div className="label">
            <Image
              src={Assets.Icon.Side.favorite}
              alt=""
              width={34}
              height={34}
            />
            Favorite
          </div>
          <div
            className="value link"
            onClick={() => router.push(SITE_PATH.NW8.FAVORITE)}>
            {favoriteCount}
          </div>
        </div>
      </StudentProfileCardStyle>
    </WidgetBoxStyle>
  )
}

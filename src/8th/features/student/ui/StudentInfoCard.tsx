'use client'

import { useMediaQuery } from '@/8th/MediaQueries'
import { StudentInfoCardStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import SITE_PATH from '@/app/site-path'
import Image from 'next/image'
import Link from 'next/link'

/**
 * 이름, 랭킹, 점수, Todo, Favorite 카드
 */

interface StudentInfoCardProps {
  name?: string
  id?: string
  signUpDate?: string
  customerGroupName?: string
}

export default function StudentInfoCard({
  name = '하이도도',
  id = '2020하이도도',
  signUpDate = 'Joined on October 22, 2020',
  customerGroupName = '개인회원',
}: StudentInfoCardProps) {
  return (
    <StudentInfoCardStyle>
      <BoxStyle className="character-container">
        <Image
          src={
            'https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_02.png'
          }
          alt="character"
          width={160}
          height={160}
          className="main-character"
        />
        <Image
          src={
            'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/sheila_17.png'
          }
          alt="character"
          width={160}
          height={160}
          className="sub-character"
        />
      </BoxStyle>
      <BoxStyle className="info-container">
        <BoxStyle
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap={10}>
          <div className="user-name">{name}</div>
          <BoxStyle
            display="flex"
            flexDirection="column"
            alignItems="flex-start">
            <div className="user-id">{id}</div>
            {/* <div className="sign-up-date">{signUpDate}</div> */}
            <div className="customer-group-name">{customerGroupName}</div>
          </BoxStyle>
        </BoxStyle>
        <BoxStyle className="buttons">
          <Link href={SITE_PATH.NW8.SETTING} target="_self">
            Edit Profile
          </Link>
          <Link href={SITE_PATH.NW8.ACCOUNT} target="_self">
            Account Info
          </Link>
        </BoxStyle>
      </BoxStyle>
    </StudentInfoCardStyle>
  )
}

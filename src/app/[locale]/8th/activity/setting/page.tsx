'use client'

import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import AvatarSetting from './components/AvatarSetting'
import ListenAndRepeatSetting from './components/ListenAndRepeatSetting'
import MainScreenSetting from './components/MainScreenSetting'
import QuizFriendSetting from './components/QuizFriendSetting'
import QuizHelperSetting from './components/QuizHelperSetting'

export default function Page() {
  const router = useRouter()

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title="Edit Profile / Setting"
        onBack={() => router.push(SITE_PATH.NW8.ACTIVITY)}
      />
      <BoxStyle>
        <MainScreenSetting />
        <AvatarSetting />
        <QuizFriendSetting />
        <ListenAndRepeatSetting />
        <QuizHelperSetting />
      </BoxStyle>
    </BasicGridLayout>
  )
}

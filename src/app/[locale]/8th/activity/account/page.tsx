'use client'

import ExtraOptionLayout from '@/8th/features/student/ui/ExtraOptionLayout'
import StudentEditCard from '@/8th/features/student/ui/StudentEditCard'
import StudyStatusView from '@/8th/features/student/ui/StudyStatusView'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import CustomCheckbox from '@/8th/shared/ui/CustomCheckbox'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [studentName, setStudentName] = useState('김도도')
  const [loginId, setLoginId] = useState('2023phong')
  const [email, setEmail] = useState('2023phong@gmail.com')
  const [password, setPassword] = useState('1234')
  const [phone, setPhone] = useState('01012345678')
  const [smsNotification, setSmsNotification] = useState(false)

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title="Account Info"
        onBack={() => router.push(SITE_PATH.NW8.ACTIVITY)}
      />
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={20}>
        <StudyStatusView />
        <StudentEditCard
          label="학생이름"
          value={studentName}
          onChange={setStudentName}
          isEdit
          type="text"
        />
        <StudentEditCard
          label="로그인 ID"
          value={loginId}
          onChange={setLoginId}
          type="text"
        />
        <StudentEditCard
          label="E-Mail"
          value={email}
          onChange={setEmail}
          isEdit
          type="text"
        />
        <StudentEditCard
          label="비밀번호"
          value={password}
          onChange={setPassword}
          isEdit
          type="password"
        />
        <StudentEditCard
          label="연락처"
          value={phone}
          onChange={setPhone}
          isEdit
          type="tel"
        />
        <BoxStyle padding="10px">
          <CustomCheckbox
            id="checkbox-sms-receive"
            checked={smsNotification}
            onChange={setSmsNotification}
            label="학습 리포트 및 소식 알림 동의"
          />
        </BoxStyle>
        <ExtraOptionLayout />
      </BoxStyle>
    </BasicGridLayout>
  )
}

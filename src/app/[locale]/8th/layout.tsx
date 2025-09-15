'use client'

import './rg-8th.css'
import BodyContainer from '@/8th/shared/ui/BodyContainer'
import GlobalNavBar from '@/8th/shared/ui/GlobalNavBar'
import React from 'react'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <GlobalNavBar />
      <BodyContainer>{children}</BodyContainer>
    </>
  )
}

'use client'

import './rg-8th.css'
import BodyContainer from '@/8th/shared/ui/BodyContainer'
import NavigationMenu from '@/8th/shared/ui/NavigationMenu'
import React from 'react'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <NavigationMenu />
      <BodyContainer>{children}</BodyContainer>
    </>
  )
}

import React from 'react'

export const metadata = {
  title: 'Reading Gate',
  description: 'English Library',
}

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

'use client'

import { PagenationItemStyle, PagenationStyle } from '../SharedStyled'

/**
 *
 */
export default function Pagenation() {
  return (
    <PagenationStyle>
      <PagenationItem page={1} isActive={true} />
      <PagenationItem page={2} isActive={false} />
      <PagenationItem page={3} isActive={false} />
      <PagenationItem page={4} isActive={false} />
    </PagenationStyle>
  )
}

function PagenationItem({
  page,
  isActive,
}: {
  page: number
  isActive: boolean
}) {
  return (
    <PagenationItemStyle className={isActive ? 'active' : ''}>
      {page}
    </PagenationItemStyle>
  )
}

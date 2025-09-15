'use client'

import {
  BodyContainerStyle,
  ContentsWrapperStyle,
} from '@/8th/shared/SharedStyled'

/**
 * 기본 바디 컨테이너
 */
export default function BodyContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BodyContainerStyle>
      <ContentsWrapperStyle>{children}</ContentsWrapperStyle>
    </BodyContainerStyle>
  )
}

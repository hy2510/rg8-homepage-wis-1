'use client'

import styled from 'styled-components'

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

const BodyContainerStyle = styled.div`
  padding-left: 288px;
  min-height: 100vh;
  min-width: 100vw;
`

const ContentsWrapperStyle = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
`

'use client'

/**
 * 그밖에 다양한 컴포넌트
 */
import styled from 'styled-components'

export function Divide({ title = "Today's Pick" }: { title?: string }) {
  return (
    <DivideStyle>
      <div className="divider" />
      <div>{title}</div>
      <div className="divider" />
    </DivideStyle>
  )
}

const DivideStyle = styled.div`
  color: var(--font-color-secondary);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px;

  .divider {
    width: 100%;
    height: 2px;
    background-color: var(--color-gray-medium);
    border-radius: 100px;
  }
`

export function Gap({ size = 10 }: { size?: number }) {
  return <GapStyle size={size} />
}

const GapStyle = styled.div<{ size: number }>`
  height: ${({ size }) => size}px;
`

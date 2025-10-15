'use client'

import { MiniModalContainerStyle, ModalContainerStyle } from '../SharedStyled'

export function ModalContainer({ children }: { children: React.ReactNode }) {
  return <ModalContainerStyle>{children}</ModalContainerStyle>
}

export function MiniModalContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <MiniModalContainerStyle>{children}</MiniModalContainerStyle>
}

'use client'

import { ModalContainerStyle } from '../SharedStyled'

export function ModalContainer({ children }: { children: React.ReactNode }) {
  return <ModalContainerStyle>{children}</ModalContainerStyle>
}

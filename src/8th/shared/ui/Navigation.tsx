'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import { BackNavHeaderStyle, SubPageNavHeaderStyle } from '../SharedStyled'
import { TextStyle } from './Misc'

interface SubPageNavHeaderProps {
  onBack?: () => void
  title?: string
  subTitle?: string
  iconSrc?: string
}

export function SubPageNavHeader({
  onBack,
  title,
  subTitle,
  iconSrc = 'none',
}: SubPageNavHeaderProps) {
  return (
    <SubPageNavHeaderStyle onClick={onBack}>
      <Image
        src={Assets.Icon.arrowLeftGray}
        alt="back"
        width={24}
        height={24}
      />
      {iconSrc !== 'none' && (
        <Image src={iconSrc} alt="simbol" width={30} height={30} />
      )}
      {title && (
        <TextStyle fontSize="var(--font-size-xlarge)">{title}</TextStyle>
      )}
      {subTitle && (
        <TextStyle fontSize="var(--font-size-xlarge)" fontColor="secondary">
          {subTitle}
        </TextStyle>
      )}
    </SubPageNavHeaderStyle>
  )
}

export function BackNavHeader({ onBack }: { onBack?: () => void }) {
  return (
    <BackNavHeaderStyle onClick={onBack}>
      <Image
        src={Assets.Icon.arrowLeftGray}
        alt="back"
        width={24}
        height={24}
      />
      <TextStyle
        fontColor="secondary"
        fontSize="var(--font-size-xlarge)"
        padding="2px 0 0 0">
        Back
      </TextStyle>
    </BackNavHeaderStyle>
  )
}

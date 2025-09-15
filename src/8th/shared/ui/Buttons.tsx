'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import { useState } from 'react'
import {
  MoreHorizontalButtonStyle,
  ResourceDownloadButtonStyle,
  RoundedFullButtonStyle,
  StartButtonStyle,
} from '../SharedStyled'
import DropdownMenu from './Dropdowns'

// 공통적으로 자주 사용되는 버튼 모음

export function StartButton() {
  return <StartButtonStyle>Start!</StartButtonStyle>
}

export function ResourceDownloadButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <ResourceDownloadButtonStyle>
      <button
        className="download-button-trigger"
        onClick={toggleDropdown}
        aria-label="Download options">
        <Image
          src={Assets.Icon.downloadLightBlue}
          alt="download"
          width={24}
          height={24}
        />
      </button>
      <DropdownMenu
        items={[
          {
            text: 'Worksheet',
            onClick: () => {
              console.log('Worksheet clicked')
              closeDropdown()
            },
          },
          {
            text: 'Vocabulary',
            onClick: () => {
              console.log('Vocabulary clicked')
              closeDropdown()
            },
          },
        ]}
        isOpen={isDropdownOpen}
        onClose={closeDropdown}
      />
    </ResourceDownloadButtonStyle>
  )
}

interface RoundedFullButtonProps {
  children?: React.ReactNode
  marginTop?: number
  marginBottom?: number
  onClick?: () => void
  viewSmall?: boolean
  fontColor?: string
}

export function RoundedFullButton({
  children,
  marginTop,
  marginBottom,
  onClick,
  viewSmall,
  fontColor,
}: RoundedFullButtonProps) {
  return (
    <RoundedFullButtonStyle
      marginTop={marginTop}
      marginBottom={marginBottom}
      onClick={onClick}
      isSmall={viewSmall}
      fontColor={fontColor}>
      {children ? children : 'More Books'}
    </RoundedFullButtonStyle>
  )
}

export function MoreHorizontalButton() {
  return (
    <MoreHorizontalButtonStyle>
      <Image
        src={Assets.Icon.moreHorizontalWhite}
        alt="more"
        width={40}
        height={40}
      />
    </MoreHorizontalButtonStyle>
  )
}

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
  fontFamily?: string
  bgColor?: 'primary' | 'secondary'
  active?: boolean
  tabs?: boolean
}

export function RoundedFullButton({
  children,
  marginTop,
  marginBottom,
  onClick,
  viewSmall,
  fontColor,
  fontFamily,
  bgColor,
  active,
  tabs,
}: RoundedFullButtonProps) {
  return (
    <RoundedFullButtonStyle
      marginTop={marginTop}
      marginBottom={marginBottom}
      onClick={onClick}
      isSmall={viewSmall}
      fontColor={fontColor}
      bgColor={bgColor}
      active={active}
      tabs={tabs}
      fontFamily={fontFamily}>
      {children ? children : 'More Books'}
    </RoundedFullButtonStyle>
  )
}

export function MoreHorizontalButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <MoreHorizontalButtonStyle onClick={toggleDropdown}>
      <Image
        src={Assets.Icon.moreHorizontalWhite}
        alt="more"
        width={40}
        height={40}
      />
      <DropdownMenu
        items={[
          {
            text: 'Speaking Practice',
            onClick: () => console.log('Speaking Practice clicked'),
          },
        ]}
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
        position="right"
      />
    </MoreHorizontalButtonStyle>
  )
}

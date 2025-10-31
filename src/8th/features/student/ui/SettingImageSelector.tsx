'use client'

import { useMediaQuery } from '@/8th/MediaQueries'
import { Assets } from '@/8th/assets/asset-library'
import {
  SettingImageSelectorAvatarContainer,
  SettingImageSelectorAvatarItemStyle,
  SettingImageSelectorNavigationButton,
  SettingImageSelectorPageDot,
  SettingImageSelectorPageIndicator,
  SettingImageSelectorStyle,
} from '@/8th/features/FeaturesStyled'
import Image from 'next/image'
import React, { useState } from 'react'

interface SettingImageSelectorProps {
  value?: string
  onChange?: (value: string) => void
  imageList?: any[]
}

/**
 * Avatar, ReadingUnit Select Option
 */
export default function SettingImageSelector({
  value = 'dodo',
  onChange,
  imageList,
}: SettingImageSelectorProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4

  const totalPages = Math.ceil(
    (imageList ? imageList.length : 0) / itemsPerPage,
  )
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAvatars = imageList ? imageList.slice(startIndex, endIndex) : []

  // 디버깅용 로그
  console.log('SettingImageSelector Debug:', {
    imageListLength: imageList?.length || 0,
    totalPages,
    currentPage,
    isLastPage: currentPage === totalPages - 1,
  })

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const handleAvatarSelect = (avatarId: string) => {
    if (onChange) {
      onChange(avatarId)
    }
  }

  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <SettingImageSelectorStyle>
      <SettingImageSelectorNavigationButton
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className="prev">
        <Image
          src={Assets.Icon.chevronLeftGray}
          alt="chevron left"
          width={24}
          height={24}
        />
      </SettingImageSelectorNavigationButton>

      <SettingImageSelectorAvatarContainer>
        {currentAvatars.map((avatar) => (
          <AvatarItem
            key={avatar.id}
            avatar={avatar}
            isSelected={value === avatar.id}
            onClick={() => handleAvatarSelect(avatar.id)}
            imageSize={isMobile ? 100 : 120}
          />
        ))}
      </SettingImageSelectorAvatarContainer>

      <SettingImageSelectorNavigationButton
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        className="next">
        <Image
          src={Assets.Icon.chevronRightGray}
          alt="chevron right"
          width={24}
          height={24}
        />
      </SettingImageSelectorNavigationButton>

      <SettingImageSelectorPageIndicator>
        {Array.from({ length: totalPages }, (_, index) => (
          <SettingImageSelectorPageDot
            key={index}
            isActive={index === currentPage}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </SettingImageSelectorPageIndicator>
    </SettingImageSelectorStyle>
  )
}

function AvatarItem({
  avatar,
  isSelected,
  onClick,
  imageSize = 120 | 100,
}: {
  avatar: any
  isSelected: boolean
  onClick: () => void
  imageSize?: number | 120 | 100
}) {
  return (
    <SettingImageSelectorAvatarItemStyle
      isSelected={isSelected}
      onClick={onClick}
      imageSize={imageSize}>
      <Image
        src={avatar.image}
        alt={avatar.name}
        width={imageSize}
        height={imageSize}
        className="avatar-image"
      />
    </SettingImageSelectorAvatarItemStyle>
  )
}

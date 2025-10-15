'use client'

import { Assets } from '@/8th/assets/asset-library'
import PrintVocabularyModal from '@/8th/features/library/ui/PrintVocabularyModal'
import Image from 'next/image'
import { useState } from 'react'
import {
  MoreHorizontalButtonStyle,
  ResourceDownloadButtonStyle,
  RoundedFullButtonStyle,
  StartButtonStyle,
} from '../SharedStyled'
import DropdownMenu from './Dropdowns'
import { BoxStyle } from './Misc'

// 공통적으로 자주 사용되는 버튼 모음

export function StartButton({ onClick }: { onClick?: () => void }) {
  return <StartButtonStyle onClick={onClick}>Start!</StartButtonStyle>
}

export function ResourceDownloadButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isPrintVocabularyModalOpen, setIsPrintVocabularyModalOpen] =
    useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <>
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
                setIsPrintVocabularyModalOpen(true)
                closeDropdown()
              },
            },
          ]}
          isOpen={isDropdownOpen}
          onClose={closeDropdown}
        />
      </ResourceDownloadButtonStyle>
      {isPrintVocabularyModalOpen && (
        <PrintVocabularyModal
          onClickClose={() => setIsPrintVocabularyModalOpen(false)}
        />
      )}
    </>
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

interface ReviewMoreButtonProps {
  title?: string
  onRetry?: (title: string) => void
  onPrintReport?: (title: string) => void
  onPrintVocabulary?: (title: string) => void
  onPrintWorksheet?: (title: string) => void
}

export function ReviewMoreButton({
  title = '',
  onRetry,
  onPrintReport,
  onPrintVocabulary,
  onPrintWorksheet,
}: ReviewMoreButtonProps) {
  const [isReportMenuOpen, setIsReportMenuOpen] = useState(false)
  const [isPrintVocabularyModalOpen, setIsPrintVocabularyModalOpen] =
    useState(false)

  return (
    <>
      <BoxStyle position="relative">
        <BoxStyle
          className="more-icon"
          onClick={() => setIsReportMenuOpen(true)}
        />
        {isReportMenuOpen && (
          <DropdownMenu
            items={[
              {
                text: 'Retry',
                onClick: () => {
                  onRetry?.(title)
                  setIsReportMenuOpen(false)
                },
                subText: '다시 보기 (리뷰 모드)',
              },
              {
                text: 'Print Report',
                onClick: () => {
                  onPrintReport?.(title)
                  setIsReportMenuOpen(false)
                },
              },
              {
                text: 'Print Vocabulary',
                onClick: () => {
                  onPrintVocabulary?.(title)
                  setIsPrintVocabularyModalOpen(true)
                  setIsReportMenuOpen(false)
                },
              },
              {
                text: 'Print Worksheet',
                onClick: () => {
                  onPrintWorksheet?.(title)
                  setIsReportMenuOpen(false)
                },
              },
            ]}
            isOpen={isReportMenuOpen}
            onClose={() => setIsReportMenuOpen(false)}
          />
        )}
      </BoxStyle>
      {isPrintVocabularyModalOpen && (
        <PrintVocabularyModal
          onClickClose={() => setIsPrintVocabularyModalOpen(false)}
        />
      )}
    </>
  )
}

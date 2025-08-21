import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'

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

export function MoreButton({
  children,
  marginTop,
  marginBottom,
}: {
  children?: React.ReactNode
  marginTop?: number
  marginBottom?: number
}) {
  return (
    <>
      <MoreButtonStyle marginTop={marginTop} marginBottom={marginBottom}>
        {children ? children : 'More Books'}
      </MoreButtonStyle>
    </>
  )
}

const StartButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background: var(--color-red-medium);
  box-shadow: 0 3px 0 0 var(--color-red-medium-shadow);
  background-image: url('${Assets.Image.GlossyBgSmall.src}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center right 5px;
  width: 100px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 0 var(--color-red-medium-shadow);
  }
`

const ResourceDownloadButtonStyle = styled.button`
  position: relative;
  padding-right: 20px;

  .download-button-trigger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--color-light-blue-opacity-10);
    }

    &:focus {
      outline: 2px solid var(--color-light-blue);
      outline-offset: 2px;
    }
  }
`

const MoreButtonStyle = styled.button<{
  marginTop?: number
  marginBottom?: number
}>`
  cursor: pointer;
  width: fit-content;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 100px;
  color: var(--font-color-secondary);
  font-size: 0.9em;
  background: var(--color-gray-light);
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`

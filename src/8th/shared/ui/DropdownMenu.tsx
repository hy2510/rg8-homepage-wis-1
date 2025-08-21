'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'

/**
 * 드롭다운 메뉴
 */
interface DropdownItem {
  text: string
  onClick?: () => void
}

interface DropdownMenuProps {
  items: DropdownItem[]
  isOpen?: boolean
  onClose?: () => void
}

export default function DropdownMenu({
  items,
  isOpen = false,
  onClose,
}: DropdownMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose?.()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <DropdownContainerStyle ref={dropdownRef}>
      {items.map((item, index) => (
        <DropdownItemStyle key={index} onClick={item.onClick}>
          <div className="link-text">{item.text}</div>
          <div className="icon">
            <Image
              src={Assets.Icon.arrowUpRightGray}
              alt="arrow up right"
              width={10}
              height={10}
            />
          </div>
        </DropdownItemStyle>
      ))}
    </DropdownContainerStyle>
  )
}

const DropdownContainerStyle = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 180px;
  background-color: #fff;
  border: 1px solid var(--line-color-primary);
  border-radius: 15px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  overflow: hidden;
`

const DropdownItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line-color-primary);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--color-light-blue-opacity-10);
  }

  .link-text {
    font-size: 14px;
    color: var(--font-color-light-blue);
  }

  .icon {
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`

'use client'

import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  DropdownButtonBigStyle,
  DropdownButtonSmallContainerStyle,
  DropdownButtonSmallStyle,
  DropdownContainerStyle,
  DropdownItemStyle,
  DropdownSmallItemStyle,
  DropdownSmallMenuStyle,
  DropdownStatusContainer,
  DropdownStatusDivider,
} from '../SharedStyled'
import { BoxStyle } from './Misc'

/**
 * 드롭다운 메뉴
 */

interface DropdownMenuProps {
  items: {
    text: string
    subText?: string
    onClick?: () => void
  }[]
  isOpen?: boolean
  onClose?: () => void
  position?: 'right' | 'bottom'
  showArrow?: boolean
  viewGrid?: boolean
  currentStage?: number
}

export default function DropdownMenu({
  items,
  isOpen = false,
  onClose,
  position = 'bottom',
  showArrow = true,
  viewGrid = false,
  currentStage,
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
    <DropdownContainerStyle
      position={position}
      ref={dropdownRef}
      viewGrid={viewGrid}>
      {items.map((item, index) => (
        <DropdownItemStyle
          key={index}
          onClick={item.onClick}
          viewGrid={viewGrid}>
          <BoxStyle
            display="flex"
            flexDirection="column"
            alignItems="flex-start">
            <div className="link-text">{item.text}</div>
            <div className="sub-text">{item.subText}</div>
          </BoxStyle>
          {showArrow && (
            <div className="icon">
              <Image
                src={Assets.Icon.arrowUpRightGray}
                alt="arrow up right"
                width={10}
                height={10}
              />
            </div>
          )}
          {index + 1 === currentStage && (
            <div className="current">
              <Image
                src={Assets.Icon.checkLightBlue}
                alt="check"
                width={16}
                height={16}
              />
            </div>
          )}
        </DropdownItemStyle>
      ))}
    </DropdownContainerStyle>
  )
}

export function DropdownButtonBig({ text }: { text: string }) {
  return (
    <DropdownButtonBigStyle>
      <div className="link-text">{text}</div>
      <div className="icon">
        <Image
          src={Assets.Icon.chevronDownGraySmall}
          alt="arrow up right"
          width={16}
          height={16}
        />
      </div>
    </DropdownButtonBigStyle>
  )
}

interface DropdownButtonBigProps {
  text: string
  selectedValue?: string
  onValueChange?: (value: string) => void
  initialValue?: string
  onGroup0Change?: (value: string) => void
  onGroup1Change?: (value: string) => void
  group0SelectedValue?: string
  group1SelectedValue?: string
}

export function DropdownButtonSmall({
  text,
  selectedValue,
  onValueChange,
  initialValue,
  onGroup0Change,
  onGroup1Change,
  group0SelectedValue,
  group1SelectedValue = '모든 장르',
}: DropdownButtonBigProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [internalSelectedValue, setInternalSelectedValue] = useState(
    initialValue || '',
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 상수 및 계산된 값들
  const isStatusDropdown = text.toLowerCase() === 'status'
  const currentSelectedValue =
    selectedValue !== undefined ? selectedValue : internalSelectedValue
  const dropdownItems = getDropdownItems(text)

  // 드롭다운 아이템 데이터
  function getDropdownItems(label: string) {
    const items = {
      status: [
        ['모든 학습', '미완료', '미완료 + 1회차', '1회차 완료', '모두 완료'],
        ['All Books', 'Fiction', 'Nonfiction'],
      ],
      sort: ['기본 정렬', '선호도순', '인기순', '업데이트순', '포인트순'],
      export: [
        'Vocabulary',
        'To-Do',
        'Favorite',
        'Book List',
        'All Books List',
      ],
      todoexport: ['Vocabulary', 'Book List', 'All Books List'],
      edit: ['Delete', 'Delete All (학습전)'],
    }
    return (
      items[label.toLowerCase() as keyof typeof items] || [
        'option 1',
        'option 2',
        'option 3',
      ]
    )
  }

  // 아이템 클릭 핸들러
  const handleItemClick = (item: string, groupIndex?: number) => {
    console.log(`${text}: ${item} selected`)

    if (isStatusDropdown && groupIndex !== undefined) {
      // Status 드롭다운: 그룹별 핸들러 사용
      const handler = groupIndex === 0 ? onGroup0Change : onGroup1Change
      handler?.(item)
    } else if (
      text.toLowerCase() === 'export' ||
      text.toLowerCase() === 'todoexport'
    ) {
      // Export 드롭다운: 상태 관리 없이 액션만 수행
      console.log(`Export action: ${item}`)
      // onValueChange가 있으면 호출 (하단 표시를 위해)
      onValueChange?.(item)
    } else if (onValueChange) {
      // 외부 상태 관리
      onValueChange(item)
    } else {
      // 내부 상태 관리
      setInternalSelectedValue(item)
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // 드롭다운 아이템 렌더링 헬퍼
  const renderDropdownItem = (
    item: string,
    index: number,
    groupIndex?: number,
  ) => {
    const isExportDropdown = text.toLowerCase() === 'export'
    const isSelected = isExportDropdown
      ? false // Export 드롭다운은 선택 상태 표시 안함
      : groupIndex !== undefined
        ? (groupIndex === 0 ? group0SelectedValue : group1SelectedValue) ===
          item
        : currentSelectedValue === item

    return (
      <DropdownSmallItemStyle
        key={groupIndex !== undefined ? `group${groupIndex}-${index}` : index}
        onClick={() => handleItemClick(item, groupIndex)}
        isSelected={isSelected}
        isExportDropdown={isExportDropdown}>
        <div className="item-text">{item}</div>
        {isSelected && !isExportDropdown && (
          <Image
            src={Assets.Icon.checkLightBlue}
            alt="check"
            width={12}
            height={12}
          />
        )}
      </DropdownSmallItemStyle>
    )
  }

  // Status 드롭다운 렌더링
  const renderStatusDropdown = () => {
    const statusItems = dropdownItems as string[][]
    return (
      <>
        <DropdownStatusContainer>
          {statusItems[0].map((item, index) =>
            renderDropdownItem(item, index, 0),
          )}
        </DropdownStatusContainer>
        <DropdownStatusDivider />
        <DropdownStatusContainer>
          {statusItems[1].map((item, index) =>
            renderDropdownItem(item, index, 1),
          )}
        </DropdownStatusContainer>
      </>
    )
  }

  // 일반 드롭다운 렌더링
  const renderRegularDropdown = () => {
    return (dropdownItems as string[]).map((item, index) =>
      renderDropdownItem(item, index),
    )
  }

  return (
    <DropdownButtonSmallContainerStyle ref={dropdownRef}>
      <DropdownButtonSmallStyle onClick={() => setIsOpen(!isOpen)}>
        <div className="link-text">
          {text === 'todoexport' ? 'Export' : text}
        </div>
        <div className="icon">
          <Image
            src={Assets.Icon.chevronDownGraySmall}
            alt="arrow-down"
            width={14}
            height={14}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </div>
      </DropdownButtonSmallStyle>
      {isOpen && (
        <DropdownSmallMenuStyle>
          {isStatusDropdown ? renderStatusDropdown() : renderRegularDropdown()}
        </DropdownSmallMenuStyle>
      )}
    </DropdownButtonSmallContainerStyle>
  )
}

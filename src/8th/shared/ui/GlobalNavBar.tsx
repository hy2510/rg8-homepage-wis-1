'use client'

import { Assets } from '@/8th/assets/asset-library'
import DropdownMenu from '@/8th/shared/ui/Dropdowns'
import SITE_PATH from '@/app/site-path'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GlobalNavBarStyle, MenuItemStyle } from '../SharedStyled'

/**
 * Daily RG ... More 까지
 */

export default function GlobalNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const NW8 = SITE_PATH.NW8
  const router = useRouter()

  const handleCalendarClick = () => {
    window.dispatchEvent(new CustomEvent('openCalendarModal'))
  }

  const handleLevelTestClick = () => {
    window.dispatchEvent(new CustomEvent('openLevelTestModal'))
  }

  const dropdownItems = [
    { text: 'Level Test', onClick: handleLevelTestClick },
    { text: 'Try Again', onClick: () => router.push(NW8.TRYAGAIN) },
    { text: 'Setting', onClick: () => router.push(NW8.SETTING) },
    {
      text: 'Workbook Units',
      onClick: () => router.push(NW8.EB_WORKBOOK),
    },
    {
      text: 'PK Workbook MP3',
      onClick: () =>
        window.open(
          'https://util.readinggate.com/Library/DodoABCWorkSheetMP3Info',
          '_blank',
        ),
    },
    {
      text: 'PK Classic Workbook MP3',
      onClick: () =>
        window.open(
          'https://wcfresource.a1edu.com/NewSystem/AppMobile/webview/randing/prek_workbook_mp3/',
          '_blank',
        ),
    },
  ]

  return (
    <GlobalNavBarStyle>
      <div className="logo-container">
        <Image src={Assets.Image.AppLogo} alt="App Logo" className="logo" />
      </div>

      <div className="menu-container">
        <MenuItem
          icon={Assets.Icon.Gnb.main}
          text="DAILY RG"
          isActive={pathname.includes(NW8.DAILY_RG)}
          linkUrl={NW8.DAILY_RG}
        />

        <MenuItem
          icon={Assets.Icon.Gnb.ebooks}
          text="E-BOOKS"
          isActive={pathname.includes(NW8.EB)}
          linkUrl={NW8.EB}
        />

        <MenuItem
          icon={Assets.Icon.Gnb.bookQuiz}
          text="BOOK QUIZ"
          isActive={pathname.includes(NW8.PB)}
          linkUrl={NW8.PB}
        />

        <MenuItem
          icon={Assets.Icon.Gnb.myActivity}
          text="MY ACTIVITY"
          isActive={pathname.includes(NW8.ACTIVITY)}
          linkUrl={NW8.ACTIVITY}
        />

        <div className="divider" />

        <MenuItem icon={Assets.Icon.Gnb.dubbing} text="DUBBING" />

        <div className="divider" />

        <MenuItem
          icon={Assets.Icon.Gnb.calendar}
          text="CALENDAR"
          onClick={handleCalendarClick}
        />

        <MenuItem
          icon={Assets.Icon.Gnb.more}
          text="MORE"
          isActive={false}
          isDropdown={true}
          onDropdownToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          isOpen={isDropdownOpen}
          dropdownItems={dropdownItems}
        />
      </div>
    </GlobalNavBarStyle>
  )
}

interface MenuItemProps {
  icon?: StaticImageData
  text?: string
  isActive?: boolean
  isDropdown?: boolean
  onDropdownToggle?: () => void
  isOpen?: boolean
  dropdownItems?: { text: string; onClick: () => void }[]
  linkUrl?: string
  onClick?: () => void
}

const MenuItem = ({
  icon,
  text,
  isActive,
  isDropdown,
  onDropdownToggle,
  isOpen,
  dropdownItems,
  linkUrl,
  onClick,
}: MenuItemProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (linkUrl) {
      router.push(linkUrl)
    } else if (isDropdown && onDropdownToggle) {
      onDropdownToggle()
    }
  }

  return (
    <MenuItemStyle
      className={isActive ? 'is-active' : ''}
      onClick={handleClick}>
      <div className="menu-item-icon">
        <Image
          src={icon as StaticImageData}
          alt={text || ''}
          width={34}
          height={34}
        />
      </div>

      <div className="menu-item-text">{text}</div>

      {isDropdown && isOpen && dropdownItems && (
        <DropdownMenu
          items={dropdownItems}
          isOpen={isOpen}
          onClose={() => onDropdownToggle?.()}
          position="right"
        />
      )}
    </MenuItemStyle>
  )
}

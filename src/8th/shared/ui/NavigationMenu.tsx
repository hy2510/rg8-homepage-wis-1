'use client'

import { Assets } from '@/8th/assets/asset-library'
import DropdownMenu from '@/8th/shared/ui/DropdownMenu'
import SITE_PATH from '@/app/site-path'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { useState } from 'react'

/**
 * Daily RG ... More 까지
 */

export default function NavigationMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const NW8 = SITE_PATH.NW8

  const dropdownItems = [
    { text: 'Level Test', onClick: () => console.log('Level Test clicked') },
    { text: 'Try Again', onClick: () => console.log('Try Again clicked') },
    { text: 'Setting', onClick: () => console.log('Setting clicked') },
    {
      text: 'Workbook MP3',
      onClick: () => console.log('Workbook MP3 clicked'),
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

        <MenuItem icon={Assets.Icon.Gnb.calendar} text="CALENDAR" />

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

const MenuItem = ({
  icon,
  text,
  isActive,
  isDropdown,
  onDropdownToggle,
  isOpen,
  dropdownItems,
  linkUrl,
}: {
  icon?: StaticImageData
  text?: string
  isActive?: boolean
  isDropdown?: boolean
  onDropdownToggle?: () => void
  isOpen?: boolean
  dropdownItems?: { text: string; onClick: () => void }[]
  linkUrl?: string
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (linkUrl) {
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
        />
      )}
    </MenuItemStyle>
  )
}

const GlobalNavBarStyle = styled.div`
  width: 288px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid rgb(212, 220, 230, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  .logo-container {
    width: 188px;
    height: auto;

    .logo {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .menu-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 10px;
    width: 100%;

    .divider {
      width: 100%;
      height: 1px;
      background-color: var(--line-color-primary);
    }
  }
`

const MenuItemStyle = styled.div`
  cursor: pointer;
  color: var(--font-color-secondary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  position: relative;

  &.is-active {
    background-color: var(--color-light-blue-opacity-10);
    border: 1px solid var(--line-color-light-blue);
    color: var(--font-color-dark-blue);
  }

  .menu-item-icon {
    img {
      display: block;
    }
  }

  .menu-item-text {
    font-size: 0.9em;
    font-weight: 400;
  }
`

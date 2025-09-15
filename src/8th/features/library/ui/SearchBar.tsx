'use client'

import { Assets } from '@/8th/assets/asset-library'
import { SearchBarStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

/**
 *
 */
export default function SearchBar() {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      const encodedKeyword = encodeURIComponent(searchKeyword.trim())
      router.push(`/8th/library/eb/search?keyword=${encodedKeyword}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <SearchBarStyle>
      <BoxStyle className="search-option">
        <TextStyle fontSize="medium" fontColor="secondary">
          Title
        </TextStyle>
        <Image
          src={Assets.Icon.chevronDownGraySmall}
          alt="search-bar-icon"
          width={14}
          height={14}
        />
      </BoxStyle>
      <BoxStyle display="flex" gap={10}>
        <BoxStyle className="search-input">
          <input
            type="text"
            placeholder="검색하고 싶은 도서를 입력하세요."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </BoxStyle>
        <button className="search-button" onClick={handleSearch}>
          <Image
            src={Assets.Icon.searchBlack}
            alt="search"
            width={20}
            height={20}
          />
        </button>
      </BoxStyle>
    </SearchBarStyle>
  )
}

'use client'

import { ThemeItemStyle } from '@/8th/features/FeaturesStyled'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ThemeItemProps {
  themeImgSrc: string
  title: string
}

export default function ThemeItem({ themeImgSrc, title }: ThemeItemProps) {
  const router = useRouter()

  const handleClick = () => {
    const encodedTitle = encodeURIComponent(title)
    router.push(`/8th/library/eb/themes/theme?title=${encodedTitle}`)
  }

  return (
    <ThemeItemStyle onClick={handleClick}>
      <Image
        className="theme-img"
        src={themeImgSrc}
        alt={title}
        width={60}
        height={60}
      />
      <div className="title">{title}</div>
    </ThemeItemStyle>
  )
}

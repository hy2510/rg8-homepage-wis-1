import { ReadingUnitCardStyle } from '@/8th/features/FeaturesStyled'
import { CommonTitleStyle, WidgetBoxStyle } from '@/8th/shared/SharedStyled'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReadingUnitStoryModal from './ReadingUnitStoryModal'

/**
 * 리딩유닛 카드
 */

interface ReadingUnitCardProps {
  friendName?: string
  friendThumbnail?: string
  friendProgress?: number
  friendPoint?: number
}

export default function ReadingUnitCard({
  friendName = 'MILLO',
  friendThumbnail = 'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png',
  friendProgress = 20,
  friendPoint = 100,
}: ReadingUnitCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [displayedWidth, setDisplayedWidth] = useState(0)

  const targetWidth = Math.max(
    0,
    Math.min(100, (friendProgress / friendPoint) * 100),
  )

  useEffect(() => {
    setDisplayedWidth(0)
    const id = setTimeout(() => {
      setDisplayedWidth(targetWidth)
    }, 1000)
    return () => clearTimeout(id)
  }, [targetWidth])

  return (
    <WidgetBoxStyle>
      <ReadingUnitCardStyle>
        <CommonTitleStyle onClick={() => setIsModalOpen(true)}>
          프렌즈 스토리
        </CommonTitleStyle>
        <div className="body">
          <div className="friend-name">
            <div className="text">{friendName}</div>
            <div className="thumbnail">
              <Image src={friendThumbnail} alt="" width={80} height={80} />
            </div>
          </div>
          <div className="friend-progress">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${displayedWidth}%`,
                  transition: 'width 1.5s ease-in-out',
                }}></div>
            </div>
            <div className="progress-text">
              {/* <div className="progress-text-value">{friendProgress}</div> */}
              <div className="progress-text-point">{friendPoint}P</div>
            </div>
          </div>
        </div>
      </ReadingUnitCardStyle>
      {isModalOpen && (
        <ReadingUnitStoryModal onClose={() => setIsModalOpen(false)} />
      )}
    </WidgetBoxStyle>
  )
}

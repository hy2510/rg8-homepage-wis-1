import { Assets } from '@/8th/assets/asset-library'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { BoxStyle, StreakLine, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { BookInfoModalStyle } from '../../FeaturesStyled'
import StreakItem from './StreakItem'

interface StreakData {
  id: number
  isProgress: boolean
  getAward: boolean
  streakDays: string
  earnDate?: string
  currentStreak?: number
  targetDays?: number
  totalDays?: number
}

interface StreakModalProps {
  isModalOpen?: boolean
  todayStreak?: boolean
  currentUserStreak?: number
  onClose?: () => void
  earnedDates?: { [key: number]: string }
}

/**
 * 연속학습 모달
 */
export default function StreakModal({
  todayStreak = false,
  currentUserStreak = 0,
  onClose,
  earnedDates = {},
}: StreakModalProps) {
  const modalBodyRef = useRef<HTMLDivElement>(null)
  const currentProgressRef = useRef<HTMLDivElement>(null)

  // 연속학습 데이터 배열
  const streakData: StreakData[] = [
    {
      id: 1,
      isProgress: currentUserStreak >= 0 && currentUserStreak < 20,
      getAward: currentUserStreak >= 20,
      streakDays: Assets.Icon.Streak.streak20Days.src,
      currentStreak: Math.min(currentUserStreak, 20),
      targetDays: 20,
      totalDays: 20,
      earnDate: earnedDates[20] || '',
    },
    {
      id: 2,
      isProgress: currentUserStreak >= 20 && currentUserStreak < 40,
      getAward: currentUserStreak >= 40,
      streakDays: Assets.Icon.Streak.streak40Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 20, 20)),
      targetDays: 20,
      totalDays: 40,
      earnDate: earnedDates[40] || '',
    },
    {
      id: 3,
      isProgress: currentUserStreak >= 40 && currentUserStreak < 60,
      getAward: currentUserStreak >= 60,
      streakDays: Assets.Icon.Streak.streak60Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 40, 20)),
      targetDays: 20,
      totalDays: 60,
      earnDate: earnedDates[60] || '',
    },
    {
      id: 4,
      isProgress: currentUserStreak >= 60 && currentUserStreak < 80,
      getAward: currentUserStreak >= 80,
      streakDays: Assets.Icon.Streak.streak80Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 60, 20)),
      targetDays: 20,
      totalDays: 80,
      earnDate: earnedDates[80] || '',
    },
    {
      id: 5,
      isProgress: currentUserStreak >= 80 && currentUserStreak < 100,
      getAward: currentUserStreak >= 100,
      streakDays: Assets.Icon.Streak.streak100Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 80, 20)),
      targetDays: 20,
      totalDays: 100,
      earnDate: earnedDates[100] || '',
    },
    {
      id: 6,
      isProgress: currentUserStreak >= 100 && currentUserStreak < 120,
      getAward: currentUserStreak >= 120,
      streakDays: Assets.Icon.Streak.streak120Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 100, 20)),
      targetDays: 20,
      totalDays: 120,
      earnDate: earnedDates[120] || '',
    },
    {
      id: 7,
      isProgress: currentUserStreak >= 120 && currentUserStreak < 140,
      getAward: currentUserStreak >= 140,
      streakDays: Assets.Icon.Streak.streak140Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 120, 20)),
      targetDays: 20,
      totalDays: 140,
      earnDate: earnedDates[140] || '',
    },
    {
      id: 8,
      isProgress: currentUserStreak >= 140 && currentUserStreak < 160,
      getAward: currentUserStreak >= 160,
      streakDays: Assets.Icon.Streak.streak160Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 140, 20)),
      targetDays: 20,
      totalDays: 160,
      earnDate: earnedDates[160] || '',
    },
    {
      id: 9,
      isProgress: currentUserStreak >= 160 && currentUserStreak < 180,
      getAward: currentUserStreak >= 180,
      streakDays: Assets.Icon.Streak.streak180Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 160, 20)),
      targetDays: 20,
      totalDays: 180,
      earnDate: earnedDates[180] || '',
    },
    {
      id: 10,
      isProgress: currentUserStreak >= 180 && currentUserStreak < 200,
      getAward: currentUserStreak >= 200,
      streakDays: Assets.Icon.Streak.streak200Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 180, 20)),
      targetDays: 20,
      totalDays: 200,
      earnDate: earnedDates[200] || '',
    },
    {
      id: 11,
      isProgress: currentUserStreak >= 200 && currentUserStreak < 220,
      getAward: currentUserStreak >= 220,
      streakDays: Assets.Icon.Streak.streak220Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 200, 20)),
      targetDays: 20,
      totalDays: 220,
      earnDate: earnedDates[220] || '',
    },
    {
      id: 12,
      isProgress: currentUserStreak >= 220 && currentUserStreak < 240,
      getAward: currentUserStreak >= 240,
      streakDays: Assets.Icon.Streak.streak240Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 220, 20)),
      targetDays: 20,
      totalDays: 240,
      earnDate: earnedDates[240] || '',
    },
    {
      id: 13,
      isProgress: currentUserStreak >= 240 && currentUserStreak < 260,
      getAward: currentUserStreak >= 260,
      streakDays: Assets.Icon.Streak.streak260Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 240, 20)),
      targetDays: 20,
      totalDays: 260,
      earnDate: earnedDates[260] || '',
    },
    {
      id: 14,
      isProgress: currentUserStreak >= 260 && currentUserStreak < 280,
      getAward: currentUserStreak >= 280,
      streakDays: Assets.Icon.Streak.streak280Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 260, 20)),
      targetDays: 20,
      totalDays: 280,
      earnDate: earnedDates[280] || '',
    },
    {
      id: 15,
      isProgress: currentUserStreak >= 280 && currentUserStreak < 300,
      getAward: currentUserStreak >= 300,
      streakDays: Assets.Icon.Streak.streak300Days.src,
      currentStreak: Math.max(0, Math.min(currentUserStreak - 280, 20)),
      targetDays: 20,
      totalDays: 300,
      earnDate: earnedDates[300] || '',
    },
  ]

  // 현재 진행 중인 아이템 찾기
  const currentProgressItem = streakData.find((item) => item.isProgress)

  // 모달이 열릴 때 현재 진행 중인 아이템으로 스크롤
  useEffect(() => {
    if (currentProgressItem && currentProgressRef.current) {
      // 약간의 지연을 두어 모달이 완전히 렌더링된 후 스크롤
      const timer = setTimeout(() => {
        currentProgressRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [currentProgressItem])

  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="title">연속 학습</div>
          <div className="btn-close" onClick={onClose} />
        </ModalHeaderStyle>
        <ModalBodyStyle viewCloud ref={modalBodyRef}>
          <BoxStyle display="flex" flexDirection="column">
            <BoxStyle
              display="flex"
              flexDirection="column"
              gap={10}
              alignItems="center"
              justifyContent="space-between">
              <TextStyle
                fontFamily="sans"
                fontColor="secondary"
                fontWeight="bold">
                연속 학습을 20일씩 달성하세요!
              </TextStyle>
              <Image
                src={Assets.Icon.arrowDownGray}
                alt=""
                width={20}
                height={20}
              />
            </BoxStyle>
            {streakData.map((streak, index) => (
              <div
                key={streak.id}
                ref={streak.isProgress ? currentProgressRef : null}>
                <StreakItem
                  todayStreak={todayStreak}
                  isProgress={streak.isProgress}
                  getAward={streak.getAward}
                  streakDays={streak.streakDays}
                  earnDate={streak.earnDate}
                  currentStreak={streak.currentStreak}
                  targetDays={streak.targetDays}
                  totalDays={streak.totalDays}
                  currentUserStreak={currentUserStreak}
                />
                {index < streakData.length - 1 && <StreakLine />}
              </div>
            ))}
          </BoxStyle>
        </ModalBodyStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

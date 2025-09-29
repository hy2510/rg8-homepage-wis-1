'use client'

import { Assets } from '@/8th/assets/asset-library'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { BoxStyle, StreakLine, TextStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useState } from 'react'
import { BookInfoModalStyle } from '../../FeaturesStyled'
import DailyGoalItem from './DailyGoalItem'
import DailyGoalSetting from './DailyGoalSetting'

/**
 * 일일목표, 일일학습 모달
 */

interface DailyGoalModalProps {
  onClose: () => void
}

/**
 * 일일 목표 아이템 타입
 */
interface DailyGoalItemData {
  id: string
  getAward: boolean
  totalCount: number
  getDate: string
  awardImgSrc: string
}

export default function DailyGoalModal({ onClose }: DailyGoalModalProps) {
  const [isDailyGoalSettingVisible, setIsDailyGoalSettingVisible] =
    useState(false)
  const [dailyInProgress, setDailyInProgress] = useState(126)

  // 일일 목표 아이템 데이터
  const dailyGoalItems: DailyGoalItemData[] = [
    {
      id: '1',
      getAward: true,
      totalCount: 25,
      getDate: '2024.09.14',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal25,
    },
    {
      id: '2',
      getAward: true,
      totalCount: 50,
      getDate: '2024.09.14',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal50,
    },
    {
      id: '3',
      getAward: true,
      totalCount: 75,
      getDate: '2024.09.14',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal75,
    },
    {
      id: '4',
      getAward: true,
      totalCount: 100,
      getDate: '2024.09.14',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal100,
    },
    {
      id: '5',
      getAward: false,
      totalCount: 125,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal125,
    },
    {
      id: '6',
      getAward: false,
      totalCount: 150,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal150,
    },
    {
      id: '7',
      getAward: false,
      totalCount: 175,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal175,
    },
    {
      id: '8',
      getAward: false,
      totalCount: 200,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal200,
    },
    {
      id: '9',
      getAward: false,
      totalCount: 225,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal225,
    },
    {
      id: '10',
      getAward: false,
      totalCount: 250,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal250,
    },
    {
      id: '11',
      getAward: false,
      totalCount: 275,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal275,
    },
    {
      id: '12',
      getAward: false,
      totalCount: 300,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal300,
    },
    {
      id: '13',
      getAward: false,
      totalCount: 325,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal325,
    },
    {
      id: '14',
      getAward: false,
      totalCount: 350,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal350,
    },
    {
      id: '15',
      getAward: false,
      totalCount: 375,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal375,
    },
    {
      id: '16',
      getAward: false,
      totalCount: 400,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal400,
    },
    {
      id: '17',
      getAward: false,
      totalCount: 425,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal425,
    },
    {
      id: '18',
      getAward: false,
      totalCount: 450,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal450,
    },
    {
      id: '19',
      getAward: false,
      totalCount: 475,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal475,
    },
    {
      id: '20',
      getAward: false,
      totalCount: 500,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal500,
    },
    {
      id: '21',
      getAward: false,
      totalCount: 525,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal525,
    },
    {
      id: '22',
      getAward: false,
      totalCount: 550,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal550,
    },
    {
      id: '23',
      getAward: false,
      totalCount: 575,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal575,
    },
    {
      id: '24',
      getAward: false,
      totalCount: 600,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal600,
    },
    {
      id: '25',
      getAward: false,
      totalCount: 625,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal625,
    },
    {
      id: '26',
      getAward: false,
      totalCount: 650,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal650,
    },
    {
      id: '27',
      getAward: false,
      totalCount: 675,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal675,
    },
    {
      id: '28',
      getAward: false,
      totalCount: 700,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal700,
    },
    {
      id: '29',
      getAward: false,
      totalCount: 725,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal725,
    },
    {
      id: '30',
      getAward: false,
      totalCount: 750,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal750,
    },
    {
      id: '31',
      getAward: false,
      totalCount: 775,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal775,
    },
    {
      id: '32',
      getAward: false,
      totalCount: 800,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal800,
    },
    {
      id: '33',
      getAward: false,
      totalCount: 825,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal825,
    },
    {
      id: '34',
      getAward: false,
      totalCount: 850,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal850,
    },
    {
      id: '35',
      getAward: false,
      totalCount: 875,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal875,
    },
    {
      id: '36',
      getAward: false,
      totalCount: 900,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal900,
    },
    {
      id: '37',
      getAward: false,
      totalCount: 925,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal925,
    },
    {
      id: '38',
      getAward: false,
      totalCount: 950,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal950,
    },
    {
      id: '39',
      getAward: false,
      totalCount: 975,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal975,
    },
    {
      id: '40',
      getAward: false,
      totalCount: 1000,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal1000,
    },
    {
      id: '41',
      getAward: false,
      totalCount: 1025,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal1025,
    },
    {
      id: '42',
      getAward: false,
      totalCount: 1050,
      getDate: '',
      awardImgSrc: Assets.Icon.DailyGoal.dailyGoal1050,
    },
  ]

  const toggleDailyGoalSetting = () => {
    setIsDailyGoalSettingVisible(!isDailyGoalSettingVisible)
  }

  // getAward가 false인 아이템들 중 첫 번째 아이템인지 확인
  const isFirstFalseAwardItem = (index: number, getAward: boolean) => {
    if (getAward) return false
    return (
      dailyGoalItems.slice(0, index + 1).filter((item) => !item.getAward)
        .length === 1
    )
  }

  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="title">일일 목표</div>
          <div className="btn-close" onClick={onClose} />
        </ModalHeaderStyle>
        <ModalBodyStyle viewCloud>
          <BoxStyle display="flex" flexDirection="column">
            <BoxStyle
              display="flex"
              flexDirection="column"
              gap={10}
              alignItems="center"
              justifyContent="space-between"
              margin={'0 0 10px 0'}>
              <TextStyle
                fontFamily="sans"
                fontColor="secondary"
                fontWeight="bold">
                일일 목표를 꾸준히 달성하세요!
              </TextStyle>
              <BoxStyle
                display="flex"
                alignItems="center"
                gap={5}
                cursor="pointer"
                onClick={toggleDailyGoalSetting}>
                <TextStyle
                  fontFamily="sans"
                  fontColor="lightBlue"
                  fontWeight="bold">
                  하루 3권씩 학습 완료하기
                </TextStyle>
                <Image
                  src={
                    isDailyGoalSettingVisible
                      ? Assets.Icon.chevronDownBlue
                      : Assets.Icon.chevronRightBlue
                  }
                  alt=""
                  width={16}
                  height={16}
                />
              </BoxStyle>
              {isDailyGoalSettingVisible && <DailyGoalSetting />}
              <Image
                src={Assets.Icon.arrowDownGray}
                alt=""
                width={20}
                height={20}
              />
            </BoxStyle>
            {dailyGoalItems.map((item, index) => (
              <div key={item.id}>
                <DailyGoalItem
                  getAward={item.getAward}
                  awardImgSrc={item.awardImgSrc}
                  inProgress={
                    item.getAward || isFirstFalseAwardItem(index, item.getAward)
                      ? dailyInProgress
                      : 0
                  }
                  totalCount={item.totalCount}
                  getDate={item.getDate}
                />
                {index < dailyGoalItems.length - 1 && <StreakLine />}
              </div>
            ))}
          </BoxStyle>
        </ModalBodyStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

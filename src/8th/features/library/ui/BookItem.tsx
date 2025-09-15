'use client'

import { Assets } from '@/8th/assets/asset-library'
import { BookItemStyle } from '@/8th/features/FeaturesStyled'
import CustomCheckbox from '@/8th/shared/ui/CustomCheckbox'
import Image from 'next/image'
import { useState } from 'react'
import BookInfoModal from './BookInfoModal'

/**
 * 도서 표지 및 기타정보
 */

interface BookItemProps {
  title?: string
  point?: string
  imgSrc?: string
  isLoading?: boolean
  level?: string
  isExportMode?: boolean
  isOnTodo?: boolean
  completedCount?: number
}

export default function BookItem({
  title = "Alligator's Apples",
  point = '3.2',
  imgSrc = 'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-001.jpg',
  isLoading = false,
  level = 'ka',
  isExportMode = false,
  isOnTodo = false,
  completedCount = 0,
}: BookItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  if (isLoading) {
    return (
      <BookItemStyle level={level}>
        <div className="book-cover-container">
          <div className="book-cover-skeleton" />
        </div>
        <div className="book-info-container">
          <div className="wrapper">
            <div className="title-skeleton" />
            <div className="gap" />
            <div className="point-skeleton" />
          </div>
        </div>
      </BookItemStyle>
    )
  }

  return (
    <>
      <BookItemStyle level={level}>
        <div
          className="book-cover-container"
          onClick={() => {
            if (!isModalOpen && !isChecked) {
              setIsModalOpen(true)
            }
          }}>
          <div className="book-cover-wrapper">
            <Image
              src={imgSrc}
              alt="book"
              width={140}
              height={200}
              className="book-cover"
            />
            {isExportMode && (
              <div
                className="check-box-position animate__animated animate__bounce"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsChecked(!isChecked)
                }}>
                <CustomCheckbox
                  id="book-item-checkbox"
                  checked={isChecked}
                  onChange={(checked) => setIsChecked(checked)}
                />
              </div>
            )}
            <div className="badges">
              {/* To-Do에 추가된 도서 */}
              {isOnTodo && (
                <Image
                  src={Assets.Icon.Study.inProgressMark}
                  alt="badge"
                  width={40}
                  height={40}
                />
              )}
              {/* 1회차 완료시 */}
              {completedCount === 1 && (
                <Image
                  src={Assets.Icon.Study.checkMarkGold}
                  alt="badge"
                  width={40}
                  height={40}
                />
              )}
              {/* 2회 이상 완료시 */}
              {completedCount >= 2 && (
                <Image
                  src={Assets.Icon.Study.checkMarkGoldTwin}
                  alt="badge"
                  width={70}
                  height={40}
                />
              )}
            </div>
            <div className="movie-icon">
              <Image
                src={Assets.Icon.playRed}
                alt="badge"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className="book-info-container">
          <div className="wrapper">
            <span className="title">{title}</span>
            {point !== '0' && (
              <>
                <span className="dot">•</span>
                <span className="point">{point}P</span>
              </>
            )}
          </div>
        </div>
      </BookItemStyle>
      {isModalOpen && (
        <BookInfoModal
          onClickClose={() => setIsModalOpen(false)}
          title={title}
          imgSrc={imgSrc}
        />
      )}
    </>
  )
}

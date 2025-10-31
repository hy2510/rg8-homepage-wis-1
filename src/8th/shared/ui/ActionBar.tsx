'use client'

import { Assets } from '@/8th/assets/asset-library'
import {
  ActionBarContainerStyle,
  ActionBarHeaderStyle,
  DailyRgResultActionBarStyle,
} from '@/8th/shared/SharedStyled'
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import { RoundedFullButton } from './Buttons'
import { DropdownButtonSmall } from './Dropdowns'
import { BoxStyle, TextStyle } from './Misc'

// 상수 정의
const BOTTOM_EXPORT_ITEMS = [
  'Vocabulary',
  'To-Do',
  'Favorite',
  'Book List',
  'Report',
  'Worksheet',
  'Performance',
]

// 공통 유틸리티 함수
const createDropdownProps = (
  label: string,
  selectedStatus?: string,
  selectedGenre?: string,
  handlers: {
    handleStatusChange?: (status: string) => void
    handleGenreChange?: (genre: string) => void
    handleExportChange?: (exportType: string) => void
    handleEditChange?: () => void
  } = {},
) => ({
  text: label,
  selectedValue: label === 'Status' ? selectedStatus : undefined,
  onValueChange:
    label === 'Status'
      ? handlers.handleStatusChange
      : label === 'Export' ||
          label === 'todoexport' ||
          label === 'exportReports'
        ? handlers.handleExportChange
        : label === 'Edit'
          ? handlers.handleEditChange
          : undefined,
  initialValue: label === 'Status' ? selectedStatus : undefined,
  onGroup0Change: label === 'Status' ? handlers.handleStatusChange : undefined,
  onGroup1Change: label === 'Status' ? handlers.handleGenreChange : undefined,
  group0SelectedValue: label === 'Status' ? selectedStatus : undefined,
  group1SelectedValue:
    label === 'Status' ? selectedGenre || 'All Books' : undefined,
})

function ActionBarBottom({
  title,
  count,
  onCancel,
  onConfirm,
  isEdit,
}: {
  title: string
  count?: number
  onCancel: () => void
  onConfirm: () => void
  isEdit?: boolean
}) {
  return (
    <ActionBarContainerStyle isBottom>
      <BoxStyle display="flex" alignItems="center" gap={10}>
        <TextStyle fontSize="medium">{title}</TextStyle>
        {count !== undefined && (
          <TextStyle fontSize="medium" fontColor="lightBlue">
            ({count})
          </TextStyle>
        )}
      </BoxStyle>
      <BoxStyle
        display="flex"
        alignItems="center"
        gap={10}
        margin={'0 0 0 auto'}>
        <RoundedFullButton viewSmall onClick={onCancel}>
          cancel
        </RoundedFullButton>
        <RoundedFullButton
          viewSmall
          fontColor={
            isEdit ? 'var(--color-red-strong)' : 'var(--font-color-light-blue)'
          }
          onClick={onConfirm}>
          confirm
        </RoundedFullButton>
      </BoxStyle>
    </ActionBarContainerStyle>
  )
}

function ActionBarBottomPeriodSearch() {
  const [activeTab, setActiveTab] = useState<'period' | 'title'>('period')
  const [selectedPeriod, setSelectedPeriod] = useState<string>('최근 15일')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  const handleTabClick = (tab: 'period' | 'title') => {
    setActiveTab(tab)
  }

  // 날짜 계산 함수
  const calculateDateRange = (period: string) => {
    const today = new Date()
    const todayString = today.toISOString().split('T')[0]

    let startDate = new Date()

    switch (period) {
      case '오늘':
        startDate = new Date(today)
        break
      case '최근 7일':
        startDate.setDate(today.getDate() - 6)
        break
      case '최근 15일':
        startDate.setDate(today.getDate() - 14)
        break
      case '최근 30일':
        startDate.setDate(today.getDate() - 29)
        break
      default:
        return { startDate: '', endDate: todayString }
    }

    const startDateString = startDate.toISOString().split('T')[0]
    return { startDate: startDateString, endDate: todayString }
  }

  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period)
    const { startDate: calculatedStartDate, endDate: calculatedEndDate } =
      calculateDateRange(period)
    setStartDate(calculatedStartDate)
    setEndDate(calculatedEndDate)
  }

  // 컴포넌트 마운트 시 기본값 설정
  useEffect(() => {
    const { startDate: calculatedStartDate, endDate: calculatedEndDate } =
      calculateDateRange('최근 15일')
    setStartDate(calculatedStartDate)
    setEndDate(calculatedEndDate)
  }, [])

  return (
    <ActionBarContainerStyle isBottom isPeriodSearch>
      <BoxStyle display="flex" flexDirection="column" gap={10}>
        <div className="tab-button-container">
          <div
            className={`tab-button ${activeTab === 'period' ? 'active' : ''}`}
            onClick={() => handleTabClick('period')}>
            기간으로 검색
          </div>
          <div
            className={`tab-button ${activeTab === 'title' ? 'active' : ''}`}
            onClick={() => handleTabClick('title')}>
            타이틀로 검색
          </div>
        </div>
        {/* 기간으로 검색 - 자동 날짜 선택 */}
        {activeTab === 'period' && (
          <BoxStyle display="flex" gap={20} padding="8px">
            {['오늘', '최근 7일', '최근 15일', '최근 30일'].map((item) => (
              <div
                key={item}
                onClick={() => handlePeriodClick(item)}
                style={{ cursor: 'pointer' }}>
                <TextStyle
                  fontSize="small"
                  fontWeight="bold"
                  fontColor={selectedPeriod === item ? 'primary' : 'secondary'}
                  fontFamily="sans">
                  {item}
                </TextStyle>
              </div>
            ))}
          </BoxStyle>
        )}
        {/* 기간으로 검색 - 날짜 직접 입력 */}
        <BoxStyle display="flex" alignItems="center" gap={10} width="100%">
          {activeTab === 'period' && (
            <BoxStyle display="flex" alignItems="center" gap={5} width="100%">
              <BoxStyle
                display="flex"
                alignItems="center"
                gap={10}
                width="100%">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </BoxStyle>
              <TextStyle fontSize="medium">~</TextStyle>
              <BoxStyle
                display="flex"
                alignItems="center"
                gap={10}
                width="100%">
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </BoxStyle>
            </BoxStyle>
          )}
          {/* 타이틀로 검색 */}
          {activeTab === 'title' && (
            <BoxStyle display="flex" alignItems="center" gap={10} width="100%">
              <input
                type="text"
                placeholder="도서 제목을 입력하세요"
                className="title-search"
              />
            </BoxStyle>
          )}
          {/* 검색 버튼 */}
          <BoxStyle
            display="flex"
            alignItems="center"
            gap={10}
            cursor="pointer">
            <Image
              src={Assets.Icon.searchBlack}
              alt="search"
              width={20}
              height={20}
            />
          </BoxStyle>
        </BoxStyle>
      </BoxStyle>
    </ActionBarContainerStyle>
  )
}

export function DailyRgResultActionBar({
  title = '',
  bookCount = 0,
  totalCount = 0,
}: {
  title: string
  bookCount?: number
  totalCount?: number
}) {
  return (
    <DailyRgResultActionBarStyle>
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={5}>
        <TextStyle fontSize="xlarge">{title}</TextStyle>
        <TextStyle fontSize="medium" fontColor="secondary" padding="3px 0 0 0">
          {bookCount}/{totalCount} Books Read
        </TextStyle>
      </BoxStyle>
    </DailyRgResultActionBarStyle>
  )
}

interface ActionBarProps {
  actionType?: 'default' | 'search' | 'new' | 'level'
  studyStatus?: string
  genre?: string
  totalCount?: number
  optionLabels?: string[]
  headerContent?: ReactNode
  onExportChange?: (isExport: boolean) => void
  newBookText?: string
  searchText?: string
  searchResultCount?: number
}

export default function ActionBar({
  actionType = 'default',
  studyStatus = '미완료 + 1회차',
  genre = 'All Books',
  totalCount = 0,
  optionLabels = ['Status', 'Sort', 'Export'],
  headerContent = '',
  onExportChange,
  newBookText = '',
  searchText = '',
  searchResultCount = 0,
}: ActionBarProps) {
  const [selectedStatus, setSelectedStatus] = useState(studyStatus)
  const [selectedGenre, setSelectedGenre] = useState(
    genre === 'All Books' ? '' : genre,
  )
  const [isExport, setIsExport] = useState(false)
  const [exportType, setExportType] = useState('')

  // 핸들러 함수들
  const handleStatusChange = (newStatus: string) => setSelectedStatus(newStatus)
  const handleGenreChange = (newGenre: string) =>
    setSelectedGenre(newGenre === 'All Books' ? '' : newGenre)

  const handleExportChange = (exportType: string) => {
    setExportType(exportType)
    const newIsExport = BOTTOM_EXPORT_ITEMS.includes(exportType)
    setIsExport(newIsExport)
    onExportChange?.(newIsExport)
  }

  const displayText =
    selectedGenre && selectedGenre !== 'All Books'
      ? `${selectedStatus} / ${selectedGenre}`
      : selectedStatus

  const getDropdownProps = (label: string) =>
    createDropdownProps(label, selectedStatus, selectedGenre, {
      handleStatusChange,
      handleGenreChange,
      handleExportChange,
    })

  const handleExportCancel = () => {
    setIsExport(false)
    setExportType('')
    onExportChange?.(false)
  }

  return (
    <BoxStyle width="100%">
      {headerContent && (
        <ActionBarHeaderStyle>{headerContent}</ActionBarHeaderStyle>
      )}
      <ActionBarContainerStyle>
        {actionType === 'default' && (
          <BoxStyle display="flex" alignItems="center" gap={10}>
            <TextStyle fontSize="large" fontFamily="sans" fontWeight="bolder">
              {displayText}
            </TextStyle>
            <TextStyle
              fontColor="secondary"
              fontSize="medium"
              padding="3px 0 0 0">
              ({totalCount})
            </TextStyle>
          </BoxStyle>
        )}
        {actionType === 'search' && (
          <BoxStyle display="flex" alignItems="center" gap={10}>
            <TextStyle fontSize="large" fontFamily="sans" fontWeight="bolder">
              {searchText}
            </TextStyle>
            <TextStyle
              fontColor="secondary"
              fontSize="medium"
              padding="3px 0 0 0">
              ({searchResultCount})
            </TextStyle>
          </BoxStyle>
        )}
        {actionType === 'new' && (
          <BoxStyle display="flex" alignItems="center" gap={10}>
            <TextStyle fontSize="large" fontFamily="sans" fontWeight="bolder">
              {newBookText}
            </TextStyle>
          </BoxStyle>
        )}
        <BoxStyle display="flex" alignItems="center" gap={20}>
          {actionType === 'new' || actionType === 'search' ? (
            <DropdownButtonSmall {...getDropdownProps('Export')} />
          ) : (
            optionLabels.map((label) => (
              <DropdownButtonSmall key={label} {...getDropdownProps(label)} />
            ))
          )}
        </BoxStyle>
      </ActionBarContainerStyle>
      {isExport && (
        <ActionBarBottom
          title={`Export / ${exportType || 'Vocabulary'}`}
          count={1}
          onCancel={handleExportCancel}
          onConfirm={() => console.log('Export confirmed')}
        />
      )}
    </BoxStyle>
  )
}

interface TodoActionBarProps {
  studyStatus?: string
  genre?: string
  totalCount?: number
  optionLabels?: string[]
  onExportChange?: (isExport: boolean) => void
}

export function TodoActionBar({
  studyStatus,
  genre = 'All Books',
  totalCount = 0,
  optionLabels = ['todoexport', 'Edit'],
  onExportChange,
}: TodoActionBarProps) {
  const [selectedStatus, setSelectedStatus] = useState(studyStatus)
  const [selectedGenre, setSelectedGenre] = useState(
    genre === 'All Books' ? '' : genre,
  )
  const [isExport, setIsExport] = useState(false)
  const [exportType, setExportType] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const handleStatusChange = (newStatus: string) => setSelectedStatus(newStatus)
  const handleGenreChange = (newGenre: string) =>
    setSelectedGenre(newGenre === 'All Books' ? '' : newGenre)

  const handleExportChange = (exportType: string) => {
    setExportType(exportType)

    const newIsExport = BOTTOM_EXPORT_ITEMS.includes(exportType)

    setIsExport(newIsExport)

    if (newIsExport) {
      setIsEdit(false)
    }

    onExportChange?.(newIsExport)
  }

  const handleEditChange = () => {
    setIsEdit(true)
    setIsExport(false)
    setExportType('')
    onExportChange?.(false)
  }

  const getDropdownProps = (label: string) =>
    createDropdownProps(label, selectedStatus, selectedGenre, {
      handleStatusChange,
      handleGenreChange,
      handleExportChange,
      handleEditChange,
    })

  const handleExportCancel = () => {
    setIsExport(false)
    setExportType('')
    onExportChange?.(false)
  }

  const handleEditCancel = () => {
    setIsEdit(false)
  }

  return (
    <BoxStyle width="100%">
      <ActionBarContainerStyle>
        <BoxStyle display="flex" alignItems="center" gap={10}>
          <TextStyle fontSize="large" fontFamily="sans" fontWeight="bolder">
            진행중인 학습
          </TextStyle>
          <TextStyle
            fontColor="secondary"
            fontSize="medium"
            padding="3px 0 0 0">
            ({totalCount})
          </TextStyle>
        </BoxStyle>
        <BoxStyle display="flex" alignItems="center" gap={20}>
          {optionLabels.map((label) => (
            <DropdownButtonSmall key={label} {...getDropdownProps(label)} />
          ))}
        </BoxStyle>
      </ActionBarContainerStyle>
      {isExport && (
        <ActionBarBottom
          title={`Export / ${exportType || 'Vocabulary'}`}
          count={1}
          onCancel={handleExportCancel}
          onConfirm={() => console.log('Export confirmed')}
        />
      )}
      {isEdit && (
        <ActionBarBottom
          title="Edit / Delete"
          onCancel={handleEditCancel}
          onConfirm={() => console.log('Edit confirmed')}
          isEdit
        />
      )}
    </BoxStyle>
  )
}

interface ReviewActionBarProps {
  actionType?: 'default' | 'search' | 'new' | 'level'
  studyStatus?: string
  genre?: string
  optionLabels?: string[]
  onExportChange?: (isExport: boolean) => void
  newBookText?: string
  searchText?: string
  searchResultCount?: number
}

export function ReviewActionBar({
  studyStatus = '15일 중 2일 학습',
  genre = 'All Books',
  onExportChange,
}: ReviewActionBarProps) {
  const [selectedStatus, setSelectedStatus] = useState(studyStatus)
  const [selectedGenre, setSelectedGenre] = useState(
    genre === 'All Books' ? '' : genre,
  )
  const [isExport, setIsExport] = useState(false)
  const [exportType, setExportType] = useState('')
  const [isPeriodSearchOpen, setIsPeriodSearchOpen] = useState(false)

  // 핸들러 함수들
  const handleStatusChange = (newStatus: string) => setSelectedStatus(newStatus)
  const handleGenreChange = (newGenre: string) =>
    setSelectedGenre(newGenre === 'All Books' ? '' : newGenre)

  const handleExportChange = (exportType: string) => {
    setExportType(exportType)
    const newIsExport = BOTTOM_EXPORT_ITEMS.includes(exportType)
    setIsExport(newIsExport)
    onExportChange?.(newIsExport)
  }

  const handlePeriodSearchToggle = () => {
    setIsPeriodSearchOpen(!isPeriodSearchOpen)
  }

  const displayText =
    selectedGenre && selectedGenre !== 'All Books'
      ? `${selectedStatus} / ${selectedGenre}`
      : selectedStatus

  const getDropdownProps = (label: string) =>
    createDropdownProps(label, selectedStatus, selectedGenre, {
      handleStatusChange,
      handleGenreChange,
      handleExportChange,
    })

  const handleExportCancel = () => {
    setIsExport(false)
    setExportType('')
    onExportChange?.(false)
  }

  return (
    <BoxStyle width="100%">
      <ActionBarContainerStyle>
        <BoxStyle
          display="flex"
          alignItems="center"
          gap={20}
          padding="3px 0 3px 0">
          <DropdownButtonSmall {...getDropdownProps('log')} />
          <DropdownButtonSmall {...getDropdownProps('exportReports')} />
        </BoxStyle>
        <div className="mobile-divider" />
        <BoxStyle
          display="flex"
          alignItems="center"
          gap={5}
          cursor="pointer"
          onClick={handlePeriodSearchToggle}>
          <div className="period-search-text">
            Period · <span className="value">{displayText}</span>
          </div>
          <Image
            src={Assets.Icon.chevronRightGray}
            alt="arrow-down"
            width={18}
            height={18}
            style={{
              transform: isPeriodSearchOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.1s ease-in-out',
            }}
          />
        </BoxStyle>
      </ActionBarContainerStyle>
      {isPeriodSearchOpen && <ActionBarBottomPeriodSearch />}
      {isExport && (
        <ActionBarBottom
          title={`Export / ${exportType || 'Vocabulary'}`}
          count={1}
          onCancel={handleExportCancel}
          onConfirm={() => console.log('Export confirmed')}
        />
      )}
    </BoxStyle>
  )
}

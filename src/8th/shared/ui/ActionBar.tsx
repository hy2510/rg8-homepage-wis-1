'use client'

import {
  ActionBarContainerStyle,
  ActionBarHeaderStyle,
  DailyRgResultActionBarStyle,
} from '@/8th/shared/SharedStyled'
import { ReactNode, useState } from 'react'
import { RoundedFullButton } from './Buttons'
import { DropdownButtonSmall } from './Dropdowns'
import { BoxStyle, TextStyle } from './Misc'

// 상수 정의
const BOTTOM_EXPORT_ITEMS = ['Vocabulary', 'To-Do', 'Favorite', 'Book List']

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
      : label === 'Export' || label === 'todoexport'
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
      <BoxStyle display="flex" alignItems="center" gap={10}>
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
        <TextStyle fontSize="xxlarge">{title}</TextStyle>
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

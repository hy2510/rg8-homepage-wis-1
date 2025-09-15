'use client'

import SettingCheckSelector from '@/8th/features/student/ui/SettingCheckSelector'
import SettingHeader from '@/8th/features/student/ui/SettingHeader'
import { useState } from 'react'

export default function QuizHelperSetting() {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState<Record<string, boolean>>({
    hints: false,
    chance: false,
  })
  const [savedValue, setSavedValue] = useState<Record<string, boolean>>({
    hints: false,
    chance: false,
  })

  const handleValueChange = (newValue: Record<string, boolean>) => {
    setValue(newValue)
    setIsEdit(true)
  }

  const handleSave = () => {
    setSavedValue(value)
    setIsEdit(false)
    // TODO: API 호출 로직 추가
    console.log('Quiz helper saved:', value)
  }

  const handleCancel = () => {
    setValue(savedValue)
    setIsEdit(false)
  }

  return (
    <>
      <SettingHeader
        title="Quiz helper"
        onEdit={isEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <SettingCheckSelector
        value={value}
        onChange={handleValueChange}
        options={[
          {
            id: 'hints',
            label: 'Vocabulary Hint/Skip',
            value: 'VOCABULARY_HINT_SKIP',
          },
          {
            id: 'chance',
            label: 'Summary Chance',
            value: 'SUMMARY_CHANCE',
          },
        ]}
      />
    </>
  )
}

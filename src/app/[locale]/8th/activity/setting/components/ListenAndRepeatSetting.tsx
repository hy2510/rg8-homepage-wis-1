'use client'

import SettingCheckSelector from '@/8th/features/student/ui/SettingCheckSelector'
import SettingHeader from '@/8th/features/student/ui/SettingHeader'
import { useState } from 'react'

export default function ListenAndRepeatSetting() {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState<Record<string, boolean>>({
    levelK: false,
    level1: false,
  })
  const [savedValue, setSavedValue] = useState<Record<string, boolean>>({
    levelK: false,
    level1: false,
  })

  const handleValueChange = (newValue: Record<string, boolean>) => {
    setValue(newValue)
    setIsEdit(true)
  }

  const handleSave = () => {
    setSavedValue(value)
    setIsEdit(false)
    // TODO: API 호출 로직 추가
    console.log('Listen and repeat saved:', value)
  }

  const handleCancel = () => {
    setValue(savedValue)
    setIsEdit(false)
  }

  return (
    <>
      <SettingHeader
        title="Listen and repeat"
        onEdit={isEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <SettingCheckSelector
        value={value}
        onChange={handleValueChange}
        options={[
          { id: 'levelK', label: 'Level K', value: 'LEVEL_K' },
          { id: 'level1', label: 'Level 1', value: 'LEVEL_1' },
        ]}
      />
    </>
  )
}

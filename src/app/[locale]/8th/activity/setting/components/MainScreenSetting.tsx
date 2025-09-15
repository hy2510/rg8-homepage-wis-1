'use client'

import SettingHeader from '@/8th/features/student/ui/SettingHeader'
import SettingRadioSelector from '@/8th/features/student/ui/SettingRadioSelector'
import { useState } from 'react'

export default function MainScreenSetting() {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState('DAILY_RG')
  const [savedValue, setSavedValue] = useState('DAILY_RG')

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    setIsEdit(true)
  }

  const handleSave = () => {
    setSavedValue(value)
    setIsEdit(false)
  }

  const handleCancel = () => {
    setValue(savedValue)
    setIsEdit(false)
  }

  return (
    <>
      <SettingHeader
        title="Main screen (after login)"
        onEdit={isEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <SettingRadioSelector value={value} onChange={handleValueChange} />
    </>
  )
}

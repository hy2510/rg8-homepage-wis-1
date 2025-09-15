'use client'

import SettingHeader from '@/8th/features/student/ui/SettingHeader'
import SettingImageSelector from '@/8th/features/student/ui/SettingImageSelector'
import { useState } from 'react'
import { avatarList } from './AvatarList'

export default function AvatarSetting() {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState('dodo')
  const [savedValue, setSavedValue] = useState('dodo')

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    setIsEdit(true)
  }

  const handleSave = async () => {
    try {
      setSavedValue(value)
      setIsEdit(false)
      console.log('Avatar saved:', value)
    } catch (e) {
      console.error('Error while saving avatar', e)
    }
  }

  const handleCancel = () => {
    setValue(savedValue)
    setIsEdit(false)
  }

  return (
    <>
      <SettingHeader
        title="Avatar"
        onEdit={isEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <SettingImageSelector
        value={value}
        onChange={handleValueChange}
        imageList={avatarList}
      />
    </>
  )
}

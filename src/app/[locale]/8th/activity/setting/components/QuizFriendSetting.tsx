'use client'

import SettingHeader from '@/8th/features/student/ui/SettingHeader'
import SettingImageSelector from '@/8th/features/student/ui/SettingImageSelector'
import { useState } from 'react'
import { quizFriendList } from './QuizFriendList'

export default function QuizFriendSetting() {
  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState('baro')
  const [savedValue, setSavedValue] = useState('baro')

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
        title="Quiz friend"
        onEdit={isEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <SettingImageSelector
        value={value}
        onChange={handleValueChange}
        imageList={quizFriendList}
      />
    </>
  )
}

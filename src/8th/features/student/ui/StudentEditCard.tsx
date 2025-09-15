'use client'

import {
  StudentEditCardButton,
  StudentEditCardButtonContainer,
  StudentEditCardStyle,
} from '@/8th/features/FeaturesStyled'
import { TextStyle } from '@/8th/shared/ui/Misc'
import React, { useState } from 'react'

interface StudentEditCardProps {
  value: string
  isEdit?: boolean
  label: string
  type?: 'text' | 'password' | 'tel'
  onChange?: (value: string) => void
}

export default function StudentEditCard({
  value = '',
  isEdit = false,
  label = 'Name',
  type = 'text',
  onChange,
}: StudentEditCardProps) {
  const [editMode, setEditMode] = useState(false)
  const [showPasswordForm, setShowPasswordForm] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const handleEdit = () => {
    if (type === 'password') {
      setShowPasswordForm(true)
    } else {
      setEditMode(true)
    }
  }

  const handleSave = () => {
    setEditMode(false)
    setShowPasswordForm(false)
  }

  const handleCancel = () => {
    setEditMode(false)
    setShowPasswordForm(false)
  }

  if (showPasswordForm) {
    return <PasswordEditForm onSave={handleSave} onCancel={handleCancel} />
  }

  return (
    <StudentEditCardStyle>
      {value && <div className="label">{label}</div>}
      <input
        type={type}
        value={value}
        disabled={!editMode}
        placeholder={label}
        onChange={handleChange}
      />
      <StudentEditCardButtonContainer>
        {isEdit && !editMode && (
          <StudentEditCardButton className="edit" onClick={handleEdit}>
            edit
          </StudentEditCardButton>
        )}
        {editMode && (
          <>
            <StudentEditCardButton className="save" onClick={handleSave}>
              save
            </StudentEditCardButton>
            <StudentEditCardButton className="cancel" onClick={handleCancel}>
              cancel
            </StudentEditCardButton>
          </>
        )}
      </StudentEditCardButtonContainer>
    </StudentEditCardStyle>
  )
}

function PasswordEditForm({
  onSave,
  onCancel,
}: {
  onSave: () => void
  onCancel: () => void
}) {
  return (
    <>
      <StudentEditCardStyle>
        <TextStyle fontSize="small" fontFamily="sans" fontColor="secondary">
          현재 비밀번호
        </TextStyle>
        <input type="password" placeholder="현재 비밀번호를 입력하세요" />
      </StudentEditCardStyle>
      <StudentEditCardStyle>
        <TextStyle fontSize="small" fontFamily="sans" fontColor="secondary">
          변경할 비밀번호
        </TextStyle>
        <input type="text" placeholder="새 비밀번호를 입력하세요" />
        <StudentEditCardButtonContainer>
          <StudentEditCardButton className="save" onClick={onSave}>
            save
          </StudentEditCardButton>
          <StudentEditCardButton className="cancel" onClick={onCancel}>
            cancel
          </StudentEditCardButton>
        </StudentEditCardButtonContainer>
      </StudentEditCardStyle>
    </>
  )
}

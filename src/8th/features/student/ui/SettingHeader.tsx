'use client'

import { SettingHeaderStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import { useState } from 'react'

/**
 * Main screen header with saved status
 */

interface SettingHeaderProps {
  title?: string
  onEdit?: boolean
  onSave?: () => void
  onCancel?: () => void
}

export default function SettingHeader({
  title = '',
  onEdit,
  onSave = () => {},
  onCancel = () => {},
}: SettingHeaderProps) {
  const [showSaved, setShowSaved] = useState(false)

  const handleSave = () => {
    onSave()
    setShowSaved(true)
    const timer = setTimeout(() => {
      setShowSaved(false)
    }, 3000)
  }

  const handleCancel = () => {
    onCancel()
    setShowSaved(false)
  }

  return (
    <SettingHeaderStyle>
      <div className="title">{title}</div>
      <BoxStyle display="flex" gap={20}>
        {onEdit ? (
          <>
            <div className="btn save" onClick={handleSave}>
              save
            </div>
            <div className="btn cancel" onClick={handleCancel}>
              cancel
            </div>
          </>
        ) : showSaved ? (
          <div className="btn saved">saved</div>
        ) : null}
      </BoxStyle>
    </SettingHeaderStyle>
  )
}

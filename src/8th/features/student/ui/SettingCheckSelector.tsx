import CustomCheckbox from '@/8th/shared/ui/CustomCheckbox'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import React, { useEffect, useState } from 'react'

interface CheckboxOption {
  id: string
  label: string
  value: string
}

interface SettingCheckSelectorProps {
  value?: Record<string, boolean>
  onChange?: (value: Record<string, boolean>) => void
  options?: CheckboxOption[]
}

/**
 * Checkbox Select Option
 */
export default function SettingCheckSelector({
  value = {},
  onChange,
  options = [
    { id: 'option1', label: 'option1', value: 'option1' },
    { id: 'option2', label: 'option2', value: 'option2' },
  ],
}: SettingCheckSelectorProps) {
  const [checkedValues, setCheckedValues] =
    useState<Record<string, boolean>>(value)

  // 외부에서 전달된 value가 변경될 때 내부 상태 동기화
  useEffect(() => {
    setCheckedValues(value)
  }, [value])

  const handleChange = (optionId: string, checked: boolean) => {
    const newValues = { ...checkedValues, [optionId]: checked }
    setCheckedValues(newValues)
    if (onChange) {
      onChange(newValues)
    }
  }

  return (
    <BoxStyle width="100%" padding="20px">
      <BoxStyle display="flex" gap={20}>
        {options.map((option) => (
          <CustomCheckbox
            key={option.id}
            id={option.id}
            checked={checkedValues[option.id] || false}
            onChange={(checked) => handleChange(option.id, checked)}
            label={option.label}
          />
        ))}
      </BoxStyle>
    </BoxStyle>
  )
}

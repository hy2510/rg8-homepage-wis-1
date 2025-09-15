'use client'

import React from 'react'
import {
  CheckboxLabelStyle,
  CheckboxStyle,
  HiddenCheckboxStyle,
} from '../SharedStyled'
import { BoxStyle } from './Misc'

interface CustomCheckboxProps {
  id: string
  checked?: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export default function CustomCheckbox({
  id,
  checked,
  onChange,
  label,
}: CustomCheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  const handleClick = () => {
    onChange(!checked)
  }

  return (
    <BoxStyle display="flex" alignItems="center" gap={12}>
      <HiddenCheckboxStyle
        type="checkbox"
        id={id}
        checked={checked || false}
        onChange={handleChange}
      />
      <CheckboxStyle
        checked={checked || false}
        onClick={handleClick}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            onChange(!checked)
          }
        }}>
        {checked && '✓'}
      </CheckboxStyle>
      {label && <CheckboxLabelStyle htmlFor={id}>{label}</CheckboxLabelStyle>}
    </BoxStyle>
  )
}

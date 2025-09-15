import {
  CustomRadioInputStyle,
  RadioLabelStyle,
  RadioSelectorItemStyle,
  SettingRadioSelectorStyle,
} from '@/8th/features/FeaturesStyled'

interface SettingRadioSelectorProps {
  value?: string
  onChange?: (value: string) => void
}

/**
 * Radio Select Option
 */
export default function SettingRadioSelector({
  value = 'DAILY_RG',
  onChange,
}: SettingRadioSelectorProps) {
  const options = [
    { value: 'DAILY_RG', label: 'DAILY RG' },
    { value: 'E_BOOKS', label: 'E-BOOKS' },
    { value: 'BOOK_QUIZ', label: 'BOOK QUIZ' },
    { value: 'TO_DO', label: 'To-Do' },
  ]

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <SettingRadioSelectorStyle>
      {options.map((option) => (
        <RadioSelectorItem
          key={option.value}
          title={option.label}
          value={option.value}
          isSelected={value === option.value}
          onChange={handleChange}
        />
      ))}
    </SettingRadioSelectorStyle>
  )
}

function RadioSelectorItem({
  title,
  value,
  isSelected,
  onChange,
}: {
  title: string
  value: string
  isSelected: boolean
  onChange: (value: string) => void
}) {
  return (
    <RadioSelectorItemStyle
      className="radio-selector-item"
      onClick={() => onChange(value)}>
      <CustomRadioInputStyle
        type="radio"
        name="radio-selector-item"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <RadioLabelStyle>{title}</RadioLabelStyle>
    </RadioSelectorItemStyle>
  )
}

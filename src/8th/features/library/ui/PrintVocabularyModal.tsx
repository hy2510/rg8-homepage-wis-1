'use client'

import { Assets } from '@/8th/assets/asset-library'
import CustomCheckbox from '@/8th/shared/ui/CustomCheckbox'
import { SelectBox } from '@/8th/shared/ui/Misc'
import { MiniModalContainer } from '@/8th/shared/ui/Modal'
import Image from 'next/image'
import { useState } from 'react'
import { PrintVocabularyModalStyle } from '../../FeaturesStyled'

export default function PrintVocabularyModal({
  onClickClose,
}: {
  onClickClose: () => void
}) {
  const [checkedOptions, setCheckedOptions] = useState({
    vocabulary: true,
    definition1: true,
    definition2: true,
    exampleSentence: true,
    studentName: true,
  })

  const [selectedLanguage, setSelectedLanguage] = useState('KOR')

  const handleCheckboxChange = (option: keyof typeof checkedOptions) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }))
  }
  return (
    <PrintVocabularyModalStyle>
      <MiniModalContainer>
        <div className="mini-modal-header">
          <div className="header-title">Vocabulary Printing Options</div>
          <div className="btn-close" onClick={onClickClose}>
            <Image
              src={Assets.Icon.deleteBlack}
              alt="close"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="mini-modal-body">
          <CustomCheckbox
            id="vocabulary"
            checked={checkedOptions.vocabulary}
            onChange={() => handleCheckboxChange('vocabulary')}
            label="Vocabulary"
          />
          <CustomCheckbox
            id="definition-1"
            checked={checkedOptions.definition1}
            onChange={() => handleCheckboxChange('definition1')}
            label="Definition-1"
          />
          <div className="select-box-container">
            <div className="select-box-label">Language for Definitions</div>
            <SelectBox
              options={['KOR', 'ENG', 'VIE']}
              onChange={setSelectedLanguage}
              selectedValue={selectedLanguage}
              smallFont={true}
            />
          </div>
          <CustomCheckbox
            id="definition-2"
            checked={checkedOptions.definition2}
            onChange={() => handleCheckboxChange('definition2')}
            label="Definition-2"
          />
          <CustomCheckbox
            id="example-sentence"
            checked={checkedOptions.exampleSentence}
            onChange={() => handleCheckboxChange('exampleSentence')}
            label="Example Sentence (EB level 1)"
          />
          <CustomCheckbox
            id="student-name"
            checked={checkedOptions.studentName}
            onChange={() => handleCheckboxChange('studentName')}
            label="Student Name"
          />
        </div>
        <div className="btn-print">Print</div>
      </MiniModalContainer>
    </PrintVocabularyModalStyle>
  )
}

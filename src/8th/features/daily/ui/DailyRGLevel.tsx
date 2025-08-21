import { Assets } from '@/8th/assets/asset-library'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

export default function DailyRGLevel() {
  const [selectedLevel, setSelectedLevel] = useState('PK')

  return (
    <DailyRGLevelStyle>
      <span>Level</span>
      <span>{selectedLevel}</span>
      <Image
        src={Assets.Icon.chevronDownGray}
        alt="chevron-down"
        width={24}
        height={24}
      />
    </DailyRGLevelStyle>
  )
}

const DailyRGLevelStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 1.6em;
`

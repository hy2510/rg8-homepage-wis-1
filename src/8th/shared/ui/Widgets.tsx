'use client'

import { Assets } from '@/8th/assets/asset-library'
import styled from 'styled-components'

export const WidgetBoxStyle = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid var(--line-color-primary);
`

export const CommonTitleStyle = styled.div`
  cursor: pointer;
  width: fit-content;
  font-size: 1.1em;
  font-weight: bold;
  font-family: var(--font-family-secondary);
  color: var(--font-color-primary);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 6px - 1px);
    left: calc(100% + 5px);
    width: 12px;
    height: 12px;
    background-image: url(${Assets.Icon.arrowUpRightBlack.src});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`

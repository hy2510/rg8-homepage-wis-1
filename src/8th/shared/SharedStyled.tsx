'use client'

import { Assets } from '@/8th/assets/asset-library'
import styled from 'styled-components'

export const ActionBarHeaderStyle = styled.div`
  font-size: var(--font-size-large);
  color: var(--font-color-secondary);
  border-top: 1px solid var(--line-color-primary);
  padding: 20px 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ActionBarContainerStyle = styled.div<{ isBottom?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-top: ${({ isBottom }) =>
    isBottom ? 'none' : '1px solid var(--line-color-primary)'};
  border-bottom: 1px solid var(--line-color-primary);
  font-size: ${({ isBottom }) =>
    isBottom ? '16px' : 'var(--font-size-medium)'};
  /* 모바일 대응 */
  /* position: ${({ isBottom }) => (isBottom ? 'fixed' : 'static')};
  bottom: ${({ isBottom }) => (isBottom ? '0' : 'auto')};
  left: ${({ isBottom }) => (isBottom ? '0' : 'auto')};
  right: ${({ isBottom }) => (isBottom ? '0' : 'auto')};
  z-index: ${({ isBottom }) => (isBottom ? '1000' : 'auto')};
  background-color: ${({ isBottom }) => (isBottom ? '#fff' : 'transparent')};
  box-shadow: ${({ isBottom }) =>
    isBottom ? '0 -4px 12px rgba(0, 0, 0, 0.1)' : 'none'}; */
`

export const DailyRgResultActionBarStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-top: 1px solid var(--line-color-primary);
  border-bottom: 1px solid var(--line-color-primary);
  font-size: var(--font-size-medium);
`

export const BasicGridLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 50px;
  position: relative;
  padding: 20px 0;
`

export const LeftContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
  gap: 30px;
`

export const RightContainerStyle = styled.div`
  width: 320px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const BodyContainerStyle = styled.div`
  padding-left: 288px;
  min-height: 100vh;
  min-width: 100vw;
`

export const ContentsWrapperStyle = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
`

export const StartButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background: var(--color-red-medium);
  box-shadow: 0 3px 0 0 var(--color-red-medium-shadow);
  background-image: url('${Assets.Image.GlossyBgSmall.src}');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center right 5px;
  width: 100px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-medium);
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 0 var(--color-red-medium-shadow);
  }
`

export const ResourceDownloadButtonStyle = styled.button`
  position: relative;
  padding-right: 20px;

  .download-button-trigger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--color-light-blue-opacity-10);
    }

    &:focus {
      outline: 2px solid var(--color-light-blue);
      outline-offset: 2px;
    }
  }
`

export const RoundedFullButtonStyle = styled.button<{
  marginTop?: number
  marginBottom?: number
  isSmall?: boolean
  fontColor?: string
}>`
  cursor: pointer;
  width: fit-content;
  min-height: ${({ isSmall }) => (isSmall ? '36px' : '44px')};
  padding: ${({ isSmall }) => (isSmall ? '0 20px' : '0 20px')};
  border-radius: 100px;
  color: ${({ fontColor }) => fontColor || 'var(--font-color-secondary)'};
  font-size: var(--font-size-medium);
  background: var(--color-gray-light);
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`

export const MoreHorizontalButtonStyle = styled.button`
  cursor: pointer;
  width: 46px;
  min-height: 46px;
  border-radius: 12px;
  background: #3c4b62;
  box-shadow: 0 3px 0 0 #293445;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 0 #293445;
  }
`

export const HiddenCheckboxStyle = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

export const CheckboxStyle = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 2px solid var(--font-color-light-blue);
  border-radius: 5px;
  background-color: ${({ checked }) =>
    checked ? 'var(--font-color-light-blue)' : '#fff'};
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    border-color: var(--font-color-light-blue);
  }
`

export const CheckboxLabelStyle = styled.label`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-medium);
  font-weight: 700;
  color: var(--font-color-primary);
  cursor: pointer;
  user-select: none;
`

export const DropdownContainerStyle = styled.div<{
  position: 'right' | 'bottom'
  viewGrid: boolean
}>`
  position: absolute;
  top: ${({ position }) => (position === 'bottom' ? '100%' : 'auto')};
  bottom: ${({ position }) => (position === 'bottom' ? 'auto' : '0')};
  left: ${({ position }) => (position === 'right' ? '100%' : '0')};
  z-index: 1000;
  min-width: 200px;
  background-color: ${({ viewGrid }) => (viewGrid ? '#f0f2f5' : '#fff')};
  border: 1px solid var(--line-color-primary);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  overflow: hidden;
  display: ${({ viewGrid }) => (viewGrid ? 'grid' : 'block')};
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  line-height: 1.5;
  gap: ${({ viewGrid }) => (viewGrid ? '1px' : '10px')};
`

export const DropdownItemStyle = styled.div<{
  viewGrid: boolean
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 18px 20px;
  border-bottom: ${({ viewGrid }) =>
    viewGrid ? 'none' : '1px solid var(--line-color-primary)'};
  background-color: #fff;
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--color-light-blue-opacity-10);
  }

  .link-text {
    font-size: 14px;
    text-align: left;
    color: var(--font-color-light-blue);
  }

  .sub-text {
    font-size: var(--font-size-small);
    font-family: var(--font-family-secondary);
    font-weight: 800;
    text-align: left;
    color: var(--font-color-secondary);
  }

  .icon {
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`

export const DropdownButtonBigStyle = styled.div`
  cursor: pointer;
  color: var(--font-color-primary);
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    display: block;
    width: 16px;
    height: 16px;
  }
`

export const DropdownButtonSmallContainerStyle = styled.div`
  position: relative;
`

export const DropdownButtonSmallStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  .link-text {
    font-size: 14px;
    color: var(--font-color-secondary);
  }

  .icon {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: transform 0.2s ease;
    }
  }
`

export const DropdownSmallMenuStyle = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px;
  min-width: 180px;
  background-color: #fff;
  border: 1px solid var(--line-color-primary);
  border-radius: 15px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  overflow: hidden;
`

export const DropdownStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DropdownStatusDivider = styled.div`
  height: 1px;
  background-color: var(--line-color-primary);
  margin: 8px 0;
`
export const DropdownSmallItemStyle = styled.div<{
  isSelected: boolean
  isExportDropdown?: boolean
}>`
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item-text {
    font-size: 14px;
    color: ${({ isSelected, isExportDropdown }) =>
      isExportDropdown
        ? 'var(--font-color-light-blue)'
        : isSelected
          ? 'var(--font-color-light-blue)'
          : 'var(--font-color-secondary)'};
    font-family: var(--font-family-secondary);
    font-weight: 800;
  }

  img {
    display: block;
  }
`

export const GlobalNavBarStyle = styled.div`
  width: 288px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid rgb(212, 220, 230, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  .logo-container {
    width: 188px;
    height: auto;

    .logo {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .menu-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 10px;
    width: 100%;

    .divider {
      width: 100%;
      height: 1px;
      background-color: var(--line-color-primary);
    }
  }
`

export const MenuItemStyle = styled.div`
  cursor: pointer;
  color: var(--font-color-secondary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  position: relative;

  &.is-active {
    background-color: var(--color-light-blue-opacity-10);
    border: 1px solid var(--line-color-light-blue);
    color: var(--font-color-dark-blue);
  }

  .menu-item-icon {
    img {
      display: block;
    }
  }

  .menu-item-text {
    font-size: var(--font-size-medium);
    font-weight: 400;
  }
`

export const BoxStyled = styled.div<{
  onClick?: () => void
  padding?: string
  margin?: string
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  border?: string
  borderRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none'
  borderWidth?: string
  borderTop?: string
  borderRight?: string
  borderBottom?: string
  borderLeft?: string
  borderColor?: 'primary' | 'secondary' | 'gray' | 'lightBlue'
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: string
  right?: string
  bottom?: string
  left?: string
  zIndex?: number
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  backgroundAttachment?: 'scroll' | 'fixed' | 'local'
  backgroundClip?: 'border-box' | 'padding-box' | 'content-box'
  backgroundOrigin?: 'border-box' | 'padding-box' | 'content-box'
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto'
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto'
  boxShadow?: string
  transform?: string
  opacity?: number
  visibility?: 'visible' | 'hidden' | 'collapse'
  cursor?:
    | 'auto'
    | 'default'
    | 'none'
    | 'context-menu'
    | 'help'
    | 'pointer'
    | 'progress'
    | 'wait'
    | 'cell'
    | 'crosshair'
    | 'text'
    | 'vertical-text'
    | 'alias'
    | 'copy'
    | 'move'
    | 'no-drop'
    | 'not-allowed'
    | 'grab'
    | 'grabbing'
    | 'e-resize'
    | 'n-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'w-resize'
    | 'ew-resize'
    | 'ns-resize'
    | 'nesw-resize'
    | 'nwse-resize'
    | 'col-resize'
    | 'row-resize'
    | 'all-scroll'
  // Text properties
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'
  lineHeight?: string | number
  letterSpacing?: string
  wordSpacing?: string
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through'
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces'
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word'
  textOverflow?: 'clip' | 'ellipsis' | string
  verticalAlign?:
    | 'baseline'
    | 'sub'
    | 'super'
    | 'top'
    | 'text-top'
    | 'middle'
    | 'bottom'
    | 'text-bottom'
  // Box model
  boxSizing?: 'content-box' | 'border-box'
  // Flex properties
  display?:
    | 'block'
    | 'flex'
    | 'grid'
    | 'inline'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'none'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: number
  flex?: string
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string
  // Grid properties
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridTemplateAreas?: string
  gridAutoColumns?: string
  gridAutoRows?: string
  gridAutoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense'
  placeItems?: 'start' | 'end' | 'center' | 'stretch'
  placeContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  // Transition and animation
  transition?: string
  transitionProperty?: string
  transitionDuration?: string
  transitionTimingFunction?: string
  transitionDelay?: string
  animation?: string
  animationName?: string
  animationDuration?: string
  animationTimingFunction?: string
  animationDelay?: string
  animationIterationCount?: string | number
  animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
  animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both'
  animationPlayState?: 'running' | 'paused'
  // Scroll behavior
  scrollBehavior?: 'auto' | 'smooth'
  scrollbarWidth?: 'auto' | 'thin' | 'none'
  scrollbarColor?: string
  // Pseudo selectors
  hover?: React.CSSProperties
  focus?: React.CSSProperties
  active?: React.CSSProperties
  before?: React.CSSProperties
  after?: React.CSSProperties
}>`
  cursor: ${({ cursor, onClick }) => cursor || (onClick ? 'pointer' : '')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0'};
  border-top-left-radius: ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius ? `${borderTopLeftRadius}px` : undefined};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius ? `${borderTopRightRadius}px` : undefined};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius ? `${borderBottomLeftRadius}px` : undefined};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius ? `${borderBottomRightRadius}px` : undefined};
  border-style: ${({ borderStyle }) => borderStyle};
  border-width: ${({ borderWidth }) => borderWidth};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-color: ${({ borderColor }) =>
    borderColor === 'lightBlue'
      ? 'var(--line-color-light-blue)'
      : borderColor === 'gray'
        ? 'var(--line-color-gray)'
        : borderColor === 'secondary'
          ? 'var(--line-color-secondary)'
          : 'var(--line-color-primary)'};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-attachment: ${({ backgroundAttachment }) => backgroundAttachment};
  background-clip: ${({ backgroundClip }) => backgroundClip};
  background-origin: ${({ backgroundOrigin }) => backgroundOrigin};
  box-shadow: ${({ boxShadow }) => boxShadow};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  transform: ${({ transform }) => transform};
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ visibility }) => visibility};

  /* Text properties */
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  word-spacing: ${({ wordSpacing }) => wordSpacing};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-transform: ${({ textTransform }) => textTransform};
  white-space: ${({ whiteSpace }) => whiteSpace};
  word-break: ${({ wordBreak }) => wordBreak};
  text-overflow: ${({ textOverflow }) => textOverflow};
  vertical-align: ${({ verticalAlign }) => verticalAlign};

  /* Box model */
  box-sizing: ${({ boxSizing }) => boxSizing || 'content-box'};

  /* Flex properties */
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0')};
  flex: ${({ flex }) => flex};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};

  /* Grid properties */
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  grid-auto-columns: ${({ gridAutoColumns }) => gridAutoColumns};
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  place-items: ${({ placeItems }) => placeItems};
  place-content: ${({ placeContent }) => placeContent};

  /* Transition and animation */
  transition: ${({ transition }) => transition};
  transition-property: ${({ transitionProperty }) => transitionProperty};
  transition-duration: ${({ transitionDuration }) => transitionDuration};
  transition-timing-function: ${({ transitionTimingFunction }) =>
    transitionTimingFunction};
  transition-delay: ${({ transitionDelay }) => transitionDelay};
  animation: ${({ animation }) => animation};
  animation-name: ${({ animationName }) => animationName};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-timing-function: ${({ animationTimingFunction }) =>
    animationTimingFunction};
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-iteration-count: ${({ animationIterationCount }) =>
    animationIterationCount};
  animation-direction: ${({ animationDirection }) => animationDirection};
  animation-fill-mode: ${({ animationFillMode }) => animationFillMode};
  animation-play-state: ${({ animationPlayState }) => animationPlayState};

  /* Scroll behavior */
  scroll-behavior: ${({ scrollBehavior }) => scrollBehavior};
  scrollbar-width: ${({ scrollbarWidth }) => scrollbarWidth};
  scrollbar-color: ${({ scrollbarColor }) => scrollbarColor};

  /* Pseudo selectors */
  &:hover {
    ${({ hover }) =>
      hover &&
      Object.entries(hover)
        .map(
          ([key, value]) =>
            `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`,
        )
        .join('\n    ')}
  }

  &:focus {
    ${({ focus }) =>
      focus &&
      Object.entries(focus)
        .map(
          ([key, value]) =>
            `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`,
        )
        .join('\n    ')}
  }

  &:active {
    ${({ active }) =>
      active &&
      Object.entries(active)
        .map(
          ([key, value]) =>
            `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`,
        )
        .join('\n    ')}
  }

  &::before {
    ${({ before }) =>
      before &&
      Object.entries(before)
        .map(
          ([key, value]) =>
            `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`,
        )
        .join('\n    ')}
  }

  &::after {
    ${({ after }) =>
      after &&
      Object.entries(after)
        .map(
          ([key, value]) =>
            `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`,
        )
        .join('\n    ')}
  }
`

export const TextDivStyled = styled.div<{
  padding?: string
  margin?: string
  width?: string
  height?: string
  fontSize?:
    | 'basic'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | string
  fontWeight?: 'normal' | 'bold' | 'bolder' | number
  fontColor?:
    | 'primary'
    | 'primaryShadow'
    | 'secondary'
    | 'darkBlue'
    | 'lightBlue'
    | string
  onClick?: () => void
  fontFamily?: 'round' | 'sans'
}>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) =>
    fontSize === 'basic'
      ? '16px'
      : fontSize === 'small'
        ? 'var(--font-size-small)'
        : fontSize === 'medium'
          ? 'var(--font-size-medium)'
          : fontSize === 'large'
            ? 'var(--font-size-large)'
            : fontSize === 'xlarge'
              ? 'var(--font-size-xlarge)'
              : fontSize === 'xxlarge'
                ? 'var(--font-size-xxlarge)'
                : fontSize};
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'normal'
      ? 500
      : fontWeight === 'bold'
        ? 600
        : fontWeight === 'bolder'
          ? 800
          : fontWeight};
  color: ${({ fontColor }) =>
    fontColor === 'primary'
      ? 'var(--font-color-primary)'
      : fontColor === 'lightBlue'
        ? 'var(--font-color-light-blue)'
        : fontColor === 'primaryShadow'
          ? 'var(--font-color-primary-shadow)'
          : fontColor === 'secondary'
            ? 'var(--font-color-secondary)'
            : fontColor === 'darkBlue'
              ? 'var(--font-color-dark-blue)'
              : fontColor};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : '')};
  font-family: ${({ fontFamily }) =>
    fontFamily === 'sans'
      ? 'var(--font-family-secondary)'
      : 'var(--font-family-primary)'};
`

export const TextSpanStyled = styled.span<{
  padding?: string
  margin?: string
  width?: string
  height?: string
  fontSize?:
    | 'basic'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | string
  fontWeight?: 'normal' | 'bold' | 'bolder' | number
  fontColor?:
    | 'primary'
    | 'primaryShadow'
    | 'secondary'
    | 'darkBlue'
    | 'lightBlue'
    | string
  onClick?: () => void
  fontFamily?: 'round' | 'sans'
  color?: string
}>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) =>
    fontSize === 'basic'
      ? '16px'
      : fontSize === 'small'
        ? 'var(--font-size-small)'
        : fontSize === 'medium'
          ? 'var(--font-size-medium)'
          : fontSize === 'large'
            ? 'var(--font-size-large)'
            : fontSize === 'xlarge'
              ? 'var(--font-size-xlarge)'
              : fontSize === 'xxlarge'
                ? 'var(--font-size-xxlarge)'
                : fontSize};
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'normal'
      ? 500
      : fontWeight === 'bold'
        ? 600
        : fontWeight === 'bolder'
          ? 700
          : fontWeight};
  color: ${({ fontColor }) =>
    fontColor === 'primary'
      ? 'var(--font-color-primary)'
      : fontColor === 'lightBlue'
        ? 'var(--font-color-light-blue)'
        : fontColor === 'primaryShadow'
          ? 'var(--font-color-primary-shadow)'
          : fontColor === 'secondary'
            ? 'var(--font-color-secondary)'
            : fontColor === 'darkBlue'
              ? 'var(--font-color-dark-blue)'
              : fontColor};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  font-family: ${({ fontFamily }) =>
    fontFamily === 'sans'
      ? 'var(--font-family-secondary)'
      : 'var(--font-family-primary)'};
  color: ${({ color }) => color};
`

export const DivideStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px;
`

export const DivideLineStyle = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-medium);
  border-radius: 100px;
`

export const GapStyle = styled.div<{ size: number }>`
  height: ${({ size }) => (size ? `${size}px` : '0')};
`

export const ModalContainerStyle = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
`

export const ModalHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--line-color-primary);

  .title {
    font-size: var(--font-size-large);
  }

  .btn-close {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: var(--color-gray-light);
    background-image: url(${Assets.Icon.deleteBlack.src});
    background-size: 24px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
`

export const ModalBodyStyle = styled.div`
  padding: 25px;
`

export const SubPageNavHeaderStyle = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    display: block;
  }
`

export const BackNavHeaderStyle = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    display: block;
  }
`

export const PagenationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const PagenationItemStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-gray-medium);
  color: var(--font-color-primary);

  &.active {
    background-color: var(--font-color-primary);
    color: #fff;
  }
`

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
  font-size: var(--font-size-large);
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

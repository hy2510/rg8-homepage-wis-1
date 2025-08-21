import { Assets } from '@/8th/assets/asset-library'
import { ResourceDownloadButton, StartButton } from '@/8th/shared/ui/Buttons'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

/**
 * Book Single Item
 */
export default function DailyRGBookItem({
  imgUrl,
  bookNumber = 1,
  title = 'Title',
  point = 1,
  isCurrent = false,
}: {
  imgUrl: string
  bookNumber?: number
  title?: string
  point?: number
  isCurrent?: boolean
}) {
  const [animation, setAnimation] = useState('')

  useEffect(() => {
    if (isCurrent) {
      const timer = setTimeout(() => {
        setAnimation('animate__animated animate__bounce')
        setTimeout(() => {
          setAnimation('')
        }, 1000)

        const interval = setInterval(() => {
          setAnimation('animate__animated animate__bounce')
          setTimeout(() => {
            setAnimation('')
          }, 1000)
        }, 5000)

        return () => clearInterval(interval)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isCurrent])

  return (
    <DailyRGBookItemStyle className={isCurrent ? animation : ''}>
      <div className="book-container">
        <div className="book-number">{bookNumber}</div>
        <div className="thumbnail">
          <Image src={imgUrl || ''} alt="thumbnail" width={100} height={100} />
        </div>
        <div className="title-box">
          <div className="title">{title}</div>
          <div className="point">+{point}P</div>
          {isCurrent && <StartButton />}
        </div>
      </div>
      <ResourceDownloadButton />
    </DailyRGBookItemStyle>
  )
}

const DailyRGBookItemStyle = styled.div`
  width: 100%;
  min-height: 150px;
  border-radius: 20px;
  border: 1px solid var(--line-color-primary);
  box-shadow: 0 3px 0 0 var(--line-color-primary);
  padding: 10px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .book-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;

    .book-number {
      font-size: 0.8em;
      font-weight: 600;
      color: #fff;
      border-radius: 20px;
      border: 2px solid #fff;
      background: #b535dc;
      background-image: url('${Assets.Icon.glossyPointSmall.src}');
      background-size: 6px;
      background-repeat: no-repeat;
      background-position: top 5px left 5px;
      position: absolute;
      top: -10px;
      left: -10px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .thumbnail {
      border-radius: 10px;

      img {
        display: block;
        width: auto;
        height: 130px;
        border-radius: 15px;
        background-color: #f0f2f5;
      }
    }
  }

  .title-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    .title {
      font-size: 1.1em;
      font-weight: 500;
      padding-left: 5px;
    }

    .point {
      color: var(--font-color-secondary);
      font-size: 0.8em;
      padding-left: 5px;
    }
  }
`

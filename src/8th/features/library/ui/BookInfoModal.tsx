'use client'

import {
  BookInfoButtonsStyle,
  BookInfoDetailItemStyle,
  BookInfoDetailStyle,
  BookInfoMainBannerStyle,
  BookInfoModalStyle,
  BookInfoPointsStyle,
  BookInfoSummaryStyle,
} from '@/8th/features/FeaturesStyled'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import { MoreHorizontalButton, StartButton } from '@/8th/shared/ui/Buttons'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import PrintVocabularyModal from './PrintVocabularyModal'

/**
 * 도서정보 팝업
 */

interface BookInfoModalProps {
  onClickClose: () => void
  imgSrc?: string
  title?: string
  bookCode?: string
  author?: string
  summary?: string
  level?: string
  pages?: number
  words?: number
  genre?: string
  grade?: string
  code?: string
  passed?: number
  speak?: boolean
  point?: string
  videoSrc?: string
}

export default function BookInfoModal({
  onClickClose,
  imgSrc,
  title = "Alligator's Apples",
  bookCode = 'EB-KA-001',
  author = 'Author',
  summary = 'The world is full of sounds to hear. You can hear with your ears. What do you hear when there is a siren or a whisper? Read on to explore the sense of hearing.',
  level = 'KA',
  pages = 10,
  words = 10,
  genre = 'fiction',
  grade = 'All',
  code = 'EB-KA-001',
  passed = 0,
  speak = false,
  point = '1.1',
  videoSrc,
}: BookInfoModalProps) {
  const [addToDo, setAddToDo] = useState(false)
  const [addFavorite, setAddFavorite] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPrintVocabularyModalOpen, setIsPrintVocabularyModalOpen] =
    useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5
    }
  }, [videoSrc])

  return (
    <>
      <BookInfoModalStyle>
        <ModalContainerStyle>
          <ModalHeaderStyle>
            <div className="title">Book Info</div>
            <div className="btn-close" onClick={onClickClose} />
          </ModalHeaderStyle>
          <ModalBodyStyle>
            <BookInfoMainBannerStyle bookCover={imgSrc || ''}>
              <BoxStyle className="wrapper" display="flex" gap={20}>
                <div className="book-cover">
                  {/* <div className="movie-play-button">
                  <Image
                    src={Assets.Icon.playRed}
                    alt="badge"
                    width={40}
                    height={40}
                  />
                </div> */}
                  <Image
                    src={imgSrc || ''}
                    alt="book"
                    width={140}
                    height={200}
                    className="book-cover-img"
                  />
                </div>
                <BoxStyle
                  className="content"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  gap={10}>
                  <BoxStyle
                    className="book-info"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start">
                    <div className="book-code">{bookCode}</div>
                    <div className="title">{title}</div>
                    <div className="author">by {author}</div>
                  </BoxStyle>
                  <BoxStyle className="buttons" display="flex" gap={10}>
                    <StartButton />
                    <MoreHorizontalButton />
                  </BoxStyle>
                </BoxStyle>
              </BoxStyle>
            </BookInfoMainBannerStyle>
            {videoSrc && (
              <BoxStyle
                width="100%"
                margin="0 0 20px 0"
                borderRadius={20}
                overflow="hidden">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  autoPlay
                  loop
                  controlsList="nodownload nofullscreen noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </BoxStyle>
            )}
            <BookInfoSummaryStyle>
              <BoxStyle display="flex" flexDirection="column" gap={20}>
                <div className="summary-content">{summary}</div>
              </BoxStyle>
            </BookInfoSummaryStyle>
            <BookInfoButtonsStyle>
              <BoxStyle display="flex" alignItems="center" gap={20}>
                <div
                  className={`btn to-do ${addToDo ? 'remove' : 'add'}`}
                  onClick={() => {
                    addToDo ? setAddToDo(false) : setAddToDo(true)
                  }}>
                  To-Do
                </div>
                <div
                  className={`btn favorite ${addFavorite ? 'remove' : 'add'}`}
                  onClick={() => {
                    addFavorite ? setAddFavorite(false) : setAddFavorite(true)
                  }}>
                  Favorite
                </div>
                <div
                  className="btn"
                  onClick={() => setIsPrintVocabularyModalOpen(true)}>
                  Vocabulary
                </div>
                <div className="btn">Worksheet</div>
              </BoxStyle>
            </BookInfoButtonsStyle>
            <BookInfoDetailStyle>
              <BoxStyle display="flex" flexWrap="wrap" gap={20}>
                <DetailItem title="level" content={level} />
                <DetailItem title="pages" content={pages.toString()} />
                <DetailItem title="words" content={words.toString()} />
                <DetailItem title="genre" content={genre} />
                <DetailItem title="grade" content={grade} />
                <DetailItem title="code" content={code} />
                <DetailItem title="passed" content={`${passed}/2`} />
                <DetailItem
                  title="speak"
                  content={speak === true ? 'available' : 'none'}
                />
              </BoxStyle>
            </BookInfoDetailStyle>
            <BookInfoPointsStyle>
              <BoxStyle display="flex" gap={10}>
                <div className="title">point</div>
                <BoxStyle
                  className="wrapper"
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  gap={10}>
                  <BoxStyle
                    className="earn-point"
                    display="flex"
                    alignItems="center"
                    gap={10}>
                    <div className="point-icon passed"></div>
                    {/* <div className="passed">Passed 1</div> */}
                    <div className="passed">Full Mode</div>
                    <div className="point">+{point}P</div>
                  </BoxStyle>
                  <BoxStyle
                    className="earn-point"
                    display="flex"
                    alignItems="center"
                    gap={10}>
                    <div className="point-icon"></div>
                    {/* <div className="passed">Passed 2</div> */}
                    <div className="passed">Easy Mode</div>
                    <div className="point">
                      +{(Number(point) / 2).toFixed(1)}P
                    </div>
                  </BoxStyle>
                </BoxStyle>
              </BoxStyle>
            </BookInfoPointsStyle>
          </ModalBodyStyle>
        </ModalContainerStyle>
      </BookInfoModalStyle>
      {isPrintVocabularyModalOpen && (
        <PrintVocabularyModal
          onClickClose={() => setIsPrintVocabularyModalOpen(false)}
        />
      )}
    </>
  )
}

function DetailItem({ title, content }: { title: string; content?: string }) {
  return (
    <BookInfoDetailItemStyle>
      <BoxStyle display="flex" alignItems="center" gap={10}>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </BoxStyle>
    </BookInfoDetailItemStyle>
  )
}

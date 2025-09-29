'use client'

import { ModalBodyStyle, ModalHeaderStyle } from '@/8th/shared/SharedStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import { ModalContainer } from '@/8th/shared/ui/Modal'
import Image from 'next/image'
import { useState } from 'react'
import {
  BookInfoButtonsStyle,
  BookInfoDetailItemStyle,
  BookInfoDetailStyle,
  BookInfoMainBannerStyle,
  BookInfoModalStyle,
} from '../../FeaturesStyled'

export default function ReviewReportModal({
  onClickClose,
}: {
  onClickClose: () => void
}) {
  const [addFavorite, setAddFavorite] = useState(false)

  return (
    <BookInfoModalStyle>
      <ModalContainer>
        <ModalHeaderStyle>
          <div className="title">Assessment Reports</div>
          <div className="btn-close" onClick={onClickClose} />
        </ModalHeaderStyle>
        <ModalBodyStyle>
          <BookInfoMainBannerStyle
            bookCover={
              'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-021.jpg'
            }>
            <BoxStyle className="wrapper" display="flex" gap={20}>
              <div className="book-cover">
                <Image
                  src={
                    'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-2a-021.jpg'
                  }
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
                  <div className="book-code">{'EB-KA-001'}</div>
                  <div className="title">{"Alligator's Apples"}</div>
                  <div className="author">by {'Author'}</div>
                </BoxStyle>
                <BoxStyle className="buttons" display="flex" gap={10}>
                  {/* <StartButton />
                  <MoreHorizontalButton /> */}
                </BoxStyle>
              </BoxStyle>
            </BoxStyle>
          </BookInfoMainBannerStyle>
          <BookInfoButtonsStyle>
            <BoxStyle display="flex" alignItems="center" gap={20}>
              <div
                className={`btn favorite ${addFavorite ? 'remove' : 'add'}`}
                onClick={() => {
                  addFavorite ? setAddFavorite(false) : setAddFavorite(true)
                }}>
                Favorite
              </div>
              <div className="btn">Vocabulary</div>
              <div className="btn">Worksheet</div>
            </BoxStyle>
          </BookInfoButtonsStyle>
          <BookInfoDetailStyle>
            <BoxStyle display="grid" gridTemplateColumns="80px 1fr" gap={20}>
              <BookInfoDetailItemStyle>
                <div className="title">code</div>
              </BookInfoDetailItemStyle>
              <BookInfoDetailItemStyle>
                <div className="content">EB-KA-001</div>
              </BookInfoDetailItemStyle>
            </BoxStyle>
          </BookInfoDetailStyle>
          <BookInfoDetailStyle>
            <BoxStyle display="grid" gridTemplateColumns="80px 1fr" gap={20}>
              <BookInfoDetailItemStyle>
                <div className="title">date</div>
              </BookInfoDetailItemStyle>
              <BookInfoDetailItemStyle>
                <div className="content">2024.08.22</div>
              </BookInfoDetailItemStyle>
            </BoxStyle>
          </BookInfoDetailStyle>
          <BookInfoDetailStyle>
            <BoxStyle display="grid" gridTemplateColumns="80px 1fr" gap={20}>
              <BookInfoDetailItemStyle>
                <div className="title">score</div>
              </BookInfoDetailItemStyle>
              <BookInfoDetailItemStyle>
                <div className="content">100</div>
              </BookInfoDetailItemStyle>
            </BoxStyle>
          </BookInfoDetailStyle>
        </ModalBodyStyle>
      </ModalContainer>
    </BookInfoModalStyle>
  )
}

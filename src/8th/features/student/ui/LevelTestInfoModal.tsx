/**
 * 레벨테스트 모달
 */
import { useMediaQuery } from '@/8th/MediaQueries'
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
} from '@/8th/shared/SharedStyled'
import {
  BoxStyle,
  Gap,
  TextStyle,
  useLockBodyScroll,
} from '@/8th/shared/ui/Misc'
import { BookInfoModalStyle } from '../../FeaturesStyled'

interface LevelTestInfoModalProps {
  onCloseModal: () => void
}

export default function LevelTestInfoModal({
  onCloseModal,
}: LevelTestInfoModalProps) {
  // 모달이 열렸을 때 body 스크롤 막기
  useLockBodyScroll()

  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <BookInfoModalStyle>
      <ModalContainerStyle>
        <ModalHeaderStyle>
          <div className="title">레벨 테스트 이력</div>
          <div className="btn-close" onClick={onCloseModal} />
        </ModalHeaderStyle>
        <ModalBodyStyle>
          <BoxStyle
            display="flex"
            flexDirection="column"
            gap={10}
            minHeight="300px">
            <TextStyle
              fontSize="medium"
              fontFamily="sans"
              fontColor="secondary"
              fontWeight="bold">
              여기서 레벨 테스트 이력과 결과를 확인할 수 있습니다. 레벨 테스트는
              최초 시험일 기준 180일 이내 최대 2회까지 응시할 수 있으며, 마지막
              시험일 이후 180일이 지나면 다시 응시할 수 있습니다.
            </TextStyle>
            {/* 레벨 테스트 이력이 없을 때 */}
            {/* <TextStyle
              fontSize="medium"
              fontFamily="sans"
              fontColor="primary"
              fontWeight="bold">
              💡 현재는 레벨 테스트 이력이 없습니다.
            </TextStyle> */}
            {/* 레벨 테스트 이력이 있을 때 */}
            <HistoryItem
              date="2025.01.01"
              level="KC"
              viewReport={() => {}}
              showViewReport={true}
            />
            <HistoryItem
              date="2025.01.01"
              level="1A"
              viewReport={() => {}}
              showViewReport={false}
            />
          </BoxStyle>
          <Gap size={20} />
        </ModalBodyStyle>
        <ModalFooterStyle isFixedBottom={isMobile}>
          <BoxStyle
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={10}>
            <TextStyle fontFamily="sans" fontWeight="bold">
              현재 레벨 테스트를 응시할 수 있습니다.
            </TextStyle>
            <TextStyle
              onClick={() => {
                console.log('응시하기')
              }}
              fontFamily="sans"
              fontWeight="bold"
              fontColor="lightBlue"
              margin="0 10px 0 0">
              레벨 테스트 응시하기
            </TextStyle>
          </BoxStyle>
        </ModalFooterStyle>
      </ModalContainerStyle>
    </BookInfoModalStyle>
  )
}

function HistoryItem({
  date,
  level,
  viewReport,
  showViewReport,
}: {
  date: string
  level: string
  viewReport: () => void
  showViewReport: boolean
}) {
  return (
    <BoxStyle
      backgroundColor="var(--color-gray-light)"
      borderRadius={15}
      padding={'20px'}>
      <TextStyle
        fontSize="medium"
        fontFamily="sans"
        fontColor="secondary"
        fontWeight="bold"
        margin="0 0 5px 0">
        {date}
      </TextStyle>
      <BoxStyle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={10}>
        <TextStyle fontFamily="sans" fontWeight="bold">
          레벨 테스트 결과 · {level}
        </TextStyle>
        {showViewReport && (
          <TextStyle
            fontSize="medium"
            fontFamily="rg-b"
            fontColor="lightBlue"
            onClick={viewReport}>
            View Report
          </TextStyle>
        )}
      </BoxStyle>
    </BoxStyle>
  )
}

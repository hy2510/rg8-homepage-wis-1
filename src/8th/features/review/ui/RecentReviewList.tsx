import { Assets } from '@/8th/assets/asset-library'
import { RecentReviewListStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle, TextStyle } from '@/8th/shared/ui/Misc'
import { reviewBooks } from '@/app/[locale]/8th/activity/sampleReviewList'
import Image from 'next/image'
import ReviewBookItem from './ReviewBookItem'

/**
 * 리뷰 타이틀 및 목록
 */
export default function RecentReviewList() {
  return (
    <RecentReviewListStyle>
      <BoxStyle className="header" display="flex">
        Recent Activity
      </BoxStyle>
      {/* 도서가 있을 때 (15일 기준 3권까지 표시) */}
      <BoxStyle display="grid" gridTemplateColumns="repeat(1, 1fr)" gap={20}>
        {reviewBooks.map((book, index) => (
          <ReviewBookItem
            key={index}
            title={book.title}
            coverImage={book.coverImage}
            totalScore={book.totalScore}
            earnPoints={book.earnPoints}
            stepScore1={book.stepScores[0]}
            stepScore2={book.stepScores[1]}
            stepScore3={book.stepScores[2]}
            stepScore4={book.stepScores[3]}
            stepScore5={book.stepScores[4]}
            passMark={book.passMark}
            passCount={book.passCount}
            studyDate={book.studyDate}
          />
        ))}
      </BoxStyle>
      {/* 도서가 없을 때 */}
      <BoxStyle
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={20}
        minHeight="200px">
        <Image
          src={Assets.Image.emptyResults}
          alt="empty"
          width={120}
          height={120}
        />
        <TextStyle fontFamily="sans" fontSize="small" fontColor="secondary">
          최근 학습 기록이 없습니다.
        </TextStyle>
      </BoxStyle>
    </RecentReviewListStyle>
  )
}

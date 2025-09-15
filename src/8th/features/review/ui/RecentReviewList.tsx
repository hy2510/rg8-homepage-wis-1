import { RecentReviewListStyle } from '@/8th/features/FeaturesStyled'
import { BoxStyle } from '@/8th/shared/ui/Misc'
import { reviewBooks } from '@/app/[locale]/8th/activity/sampleReviewList'
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
      <BoxStyle display="grid" gridTemplateColumns="repeat(1, 1fr)" gap={20}>
        {reviewBooks.map((book, index) => (
          <ReviewBookItem
            key={index}
            title={book.title}
            coverImage={book.coverImage}
            totalScore={book.totalScore}
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
    </RecentReviewListStyle>
  )
}

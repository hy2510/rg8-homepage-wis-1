'use client'

import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useOnLoadCustomerReviewDetail } from '@/client/store/home/hook'
import { useStyle } from '@/ui/context/StyleContext'
import { ReviewContents } from '@/ui/modules/home-customer-review-components/review-contents'

const STYLE_ID = 'page_parents_content'

export default function Page({
  params,
}: {
  params: { writeType: string; id: string }
}) {
  const style = useStyle(STYLE_ID)

  const writeType = params.writeType
  const { payload, loading, error } = useOnLoadCustomerReviewDetail({
    writeType: writeType,
    boardId: params.id,
  })

  const sitePath =
    writeType === 'parent'
      ? SITE_PATH.HOME.CUSTOMER_PARENT_REVIEW
      : SITE_PATH.HOME.CUSTOMER_STUDENT_REVIEW
  const router = useRouter()

  if (error) {
    return <div>Content not found.</div>
  }

  let date = ''
  if (payload.regDate) {
    date = payload.regDate.split('T')[0]
  }

  return (
    <div className={style.content}>
      <ReviewContents
        no={``}
        title={payload.title}
        name={payload.writer}
        date={date}
        onClickBackToList={() => {
          router.back()
        }}
        onClickGoToList={() => {
          router.push(`${sitePath}`)
        }}>
        <div dangerouslySetInnerHTML={{ __html: payload.content }} />
      </ReviewContents>
    </div>
  )
}

'use client'

import DailyRGBookItem from '@/8th/features/daily/ui/DailyRGBookItem'
import DailyRGCourse from '@/8th/features/daily/ui/DailyRGCourse'
import DailyRGLevel from '@/8th/features/daily/ui/DailyRGLevel'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { MoreButton } from '@/8th/shared/ui/Buttons'
import { Divide, Gap } from '@/8th/shared/ui/Misc'

export default function Page() {
  return (
    <BasicGridLayout>
      <DailyRGLevel />
      <DailyRGCourse
        title="1. Learn the Alphabet"
        bookCount={2}
        total={26}
        isCurrent={true}
        bgColor="#b535dc"
        progressColor="#ffca2b"
      />
      <Divide title="Today's Pick" />
      <DailyRGBookItem
        bookNumber={1}
        imgUrl="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-301.jpg"
        title="Alphabet Aa"
        point={1}
        isCurrent={true}
      />
      <DailyRGBookItem
        bookNumber={2}
        imgUrl="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-302.jpg"
        title="Alphabet Bb"
        point={1}
      />
      <DailyRGBookItem
        bookNumber={3}
        imgUrl="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-303.jpg"
        title="Alphabet Cc"
        point={1}
      />
      <MoreButton marginTop={5} marginBottom={10} />
      <DailyRGCourse title="2. Learn Phonics 1" bookCount={2} total={26} />
      <DailyRGCourse title="3. Learn Phonics 2" bookCount={2} total={26} />
      <DailyRGCourse title="4. Sight Words 1" bookCount={2} total={26} />
      <DailyRGCourse title="5. Sight Words 2" bookCount={2} total={26} />
      <Gap size={100} />
    </BasicGridLayout>
  )
}

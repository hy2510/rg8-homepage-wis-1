'use client'

import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'
import { SubPageNavHeader } from '@/8th/shared/ui/Navigation'
import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <BasicGridLayout>
      <SubPageNavHeader
        title={'Study Result'}
        onBack={() => router.push(SITE_PATH.NW8.ACTIVITY)}
      />
    </BasicGridLayout>
  )
}

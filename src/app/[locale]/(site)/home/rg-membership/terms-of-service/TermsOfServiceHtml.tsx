'use client'

import IFrameWrapper from '@/app/_app/IFrameWrapper'
import { useSiteBlueprint } from '@/app/_context/CustomerContext'

export function TermsOfServiceHtml() {
  const { target, country } = useSiteBlueprint()

  if (target.private && country.vietnam) {
    // 베트남 이용약관 별도 처리
    const url =
      '/src/html/page-contents/pc/rg-membership-vn/membership_04_terms_of_use.html'
    return <IFrameWrapper pcUrl={url} mobileUrl={url} />
  }

  const pcUrl =
    '/src/html/page-contents/pc/rg-membership/membership_04_terms_of_use.html'
  const mobileUrl =
    '/src/html/page-contents/mobile/rg-membership/membership_04_terms_of_use.html'
  return <IFrameWrapper pcUrl={pcUrl} mobileUrl={mobileUrl} />
}

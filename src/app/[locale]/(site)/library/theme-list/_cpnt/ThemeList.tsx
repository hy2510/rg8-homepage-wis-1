'use client'

import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useOnLoadLibraryThemeList } from '@/client/store/library/theme-list/hook'
import { useLibraryThemeList } from '@/client/store/library/theme-list/selector'
import { useLibraryThemeAction } from '@/client/store/library/theme/selector'
import { SearchThemeCategory } from '@/repository/client/object/search-theme-category'
import { useStyle } from '@/ui/context/StyleContext'
import { ThemeListItem } from '@/ui/modules/library-explore-theme-list/theme-list'

const STYLE_ID = 'page_theme'

export default function ThemeList({ bookType }: { bookType: string }) {
  const style = useStyle(STYLE_ID)

  const { loading, error } = useOnLoadLibraryThemeList({ bookType })
  const { payload: themeList } = useLibraryThemeList()

  const router = useRouter()
  // Series
  const { setThemeSearch } = useLibraryThemeAction()

  if (loading) {
    return <></>
  }
  if (error) {
    return (
      <div>
        Series list not found. {`${!bookType ? ' (BookTypeError)' : ''}`}
      </div>
    )
  }

  const onClickTheme = (item: SearchThemeCategory) => {
    setThemeSearch({
      bookType,
      level: '',
      image: item.imagePath,
      title: item.name,
      keyword: item.code,
      page: 1,
    })
    router.push(SITE_PATH.LIBRARY.THEME)
  }

  return (
    <div className={style.container}>
      {themeList.map((theme) => {
        return (
          <ThemeListItem
            key={theme.name}
            title={theme.name}
            themeImgSrc={theme.imagePath}
            onClick={() => onClickTheme(theme)}
          />
        )
      })}
    </div>
  )
}

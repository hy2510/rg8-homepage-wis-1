'use client'

import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useOnLoadLibrarySeriesList } from '@/client/store/library/series-list/hook'
import { useLibrarySeriesList } from '@/client/store/library/series-list/selector'
import { useLibrarySeriesAction } from '@/client/store/library/series/selector'
import { SearchSeriesCategory } from '@/repository/client/object/search-series-category'
import { useStyle } from '@/ui/context/StyleContext'
import { SeriesItem } from '@/ui/modules/library-explore-series-list/series-list'

const STYLE_ID = 'page_series'

export default function SeriesList({ bookType }: { bookType: string }) {
  const style = useStyle(STYLE_ID)

  const { loading, error } = useOnLoadLibrarySeriesList({ bookType })
  const { payload: seriesList } = useLibrarySeriesList()

  const router = useRouter()
  // Series
  const { setSeriesSearch } = useLibrarySeriesAction()

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

  const onClickSeries = (item: SearchSeriesCategory) => {
    setSeriesSearch({
      bookType,
      level: '',
      image: item.imagePath,
      title: item.name,
      page: 1,
    })
    router.push(SITE_PATH.LIBRARY.SERIES)
  }

  return (
    <div className={style.container}>
      {seriesList.map((series) => {
        let seriesLevel: string
        if (series.bookLevelMin === series.bookLevelMax) {
          seriesLevel = series.bookLevelMin
        } else {
          seriesLevel = `${series.bookLevelMin} ~ ${series.bookLevelMax}`
        }
        return (
          <SeriesItem
            key={series.name}
            theme={series.color}
            seriesImgSrc={series.imagePath}
            seriesName={series.name}
            seriesLevel={seriesLevel}
            onClick={() => onClickSeries(series)}
          />
        )
      })}
    </div>
  )
}

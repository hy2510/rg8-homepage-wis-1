import Collections from '@/8th/features/library/ui/Collections'
import LeveledReading from '@/8th/features/library/ui/LevelSection'
import RecentlyViewed from '@/8th/features/library/ui/RecentlyViewed'
import SearchBar from '@/8th/features/library/ui/SearchBar'
import BasicGridLayout from '@/8th/shared/ui/BasicGridLayout'

export default function Page() {
  return (
    <BasicGridLayout>
      <SearchBar />
      <RecentlyViewed />
      <LeveledReading />
      <Collections bookInfo="eb" />
    </BasicGridLayout>
  )
}

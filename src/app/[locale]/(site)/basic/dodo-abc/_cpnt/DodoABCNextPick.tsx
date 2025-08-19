'use client'

import { useStyle } from '@/ui/context/StyleContext'

const STYLE_ID = 'page_kids_dodo_abc'

export default function DodoABCNextPick({
  image,
  title,
  onClickStart,
}: {
  image: string
  title: string
  onClickStart?: () => void
}) {
  const style = useStyle(STYLE_ID)

  return (
    <div className={style.next_pick_bar}>
      <div className={style.container}>
        <div className={style.col_1}>
          <div
            className={style.img_pick}
            style={{
              backgroundImage: `url('${image}')`,
            }}></div>
          <div>
            <div className={style.txt_label}>Next Pick!</div>
            <div className={style.txt_title}>{title}</div>
          </div>
        </div>
        <div className={style.col_2}>
          <div
            className={style.btn_start}
            onClick={() => onClickStart && onClickStart()}></div>
        </div>
      </div>
    </div>
  )
}

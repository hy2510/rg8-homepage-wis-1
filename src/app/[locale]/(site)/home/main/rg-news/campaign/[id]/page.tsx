'use client'

import { useEffect } from 'react'
import { useChangeBoard } from '../../_cpnt/StaticBoardContext'

export default function Page({ params }: { params: { id: string } }) {
  const setChangeBoard = useChangeBoard()

  useEffect(() => {
    if (setChangeBoard) {
      setChangeBoard(params.id)
    }
  }, [setChangeBoard, params.id])

  return null
}

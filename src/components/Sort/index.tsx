import { ReactElement, useEffect, useState } from 'react'


interface Props {
   onModeChange: (mode) => void
   onSortingOrderChange: (sortingOrder) => void
}

export default function Sort(props: Props): ReactElement {
   const { onModeChange, onSortingOrderChange } = props

   const [mode, setMode] = useState<string>('Alphabetical')
   const [sortingOrder, setSortingOrder] = useState<string>('Ascending')

   const modeChange = (): void => {
      setMode((oldMode) => {
         return oldMode === 'Alphabetical' ? 'Numerical' : 'Alphabetical'
      })
   }

   const sortingChange = (): void => {
      setSortingOrder((oldOrder) => {
         return oldOrder === 'Ascending' ? 'Descending' : 'Ascending'
      })
   }

   useEffect(() => {
      onModeChange(mode)
   }, [mode, onModeChange])

   useEffect(() => {
      onSortingOrderChange(sortingOrder)
   }, [sortingOrder, onSortingOrderChange])

   return (
      <>
         <button className="btn btn-sm btn-primary mx-1" onClick={modeChange}>
            {mode}
         </button>
         <button className="btn btn-sm btn-primary mx-1" onClick={sortingChange}>
            {sortingOrder}
         </button>
      </>
   )
}

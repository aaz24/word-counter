import React, { ReactElement, useEffect, useState } from 'react'

import Card from '../Card'
import './frequency.css'

interface Props {
   wording: string
   sorting: string
   sortingOrder: string
}

const mapWord = ({ listWord, sorting, sortingOrder }) => {
   const mappedWord = listWord.reduce((acc, curr) => {
      acc[curr] = !acc[curr] ? 1 : ++acc[curr]

      return acc
   }, {})

   // Sorting function based on sorting mode and sorting order mode
   const sortWord = ([keyA, valueA]: any, [keyB, valueB]: any) => {
      if (sorting === 'Alphabetical') {
         if (sortingOrder === 'Ascending') {
            return keyA < keyB ? -1 : 1
         }

         return keyA < keyB ? 1 : -1
      }

      return sortingOrder === 'Ascending' ? valueA - valueB : valueB - valueA
   }

   const mappedWordSort = Object.entries(mappedWord)
      .sort(sortWord)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

   return mappedWordSort
}

export default function WordFrequencyList(props: Props): ReactElement {
   const { wording, sorting, sortingOrder } = props

   const [listWord, setListWord] = useState<Array<string>>([])
   const [currWord, setCurrWord] = useState<string>('')
   const [mappedWord, setMappedWord] = useState<object>()

   useEffect(() => {
      const listWords = wording.split(' ').filter(Boolean)

      setListWord(listWords)
   }, [wording])

   useEffect(() => {
      const lastWord = listWord[listWord.length - 1]

      setCurrWord(lastWord)
      setMappedWord(mapWord({ listWord, sorting, sortingOrder }))
   }, [listWord, sorting, sortingOrder])

   const renderCard = () => {
      return Object.keys(mappedWord).map((key) => {
         const ramdomKey = performance.now().toString(36) + Math.random().toString(36).substr(2)

         return <Card key={ramdomKey} wordList={key} countList={mappedWord[key]} />
      })
   }

   return (
      <>
         {currWord && (
            <>
               <table className="table mb-0">
                  <thead>
                     <tr className="text-left">
                        <th scope="col" className="w-75">Word</th>
                        <th scope="col">Occurence</th>
                     </tr>
                  </thead>
               </table>
               <ul className="word-list">{renderCard()}</ul>
            </>
         )}

         {
            // Render when there is no word
            !currWord && <span>Put some words in the text area and I will start counting</span>
         }
      </>
   )
}

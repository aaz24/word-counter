import React, { ReactElement, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar/';
import TextArea from './components/TextArea/'
import Sort from './components/Sort'
import Frequency from './components/Frequency/index'

function Title({ title }: ITittle): ReactElement {
   return <h1>{title}</h1>
}

function App() {
   const [wording, setWords] = useState<string>('')
   const [sorting, setSorting] = useState<string>('Alphabetical')
   const [sortingOrder, setSortingOrder] = useState<string>('Ascending')

   const handleChange = (value: string): void => {
      setWords(value)
   }

   const sortingModeChange = (mode: string): void => {
      setSorting(mode)
   }

   const sortingOrderChange = (order: string): void => {
      setSortingOrder(order)
   }

   return (
      <div className="App">
         <Navbar/>

         <div className="container">

            <div className="jumbotron jumbotron-fluid mt-5">
               <div className="container">
                  <Title title="React + Typescript Word Counter" />
               </div>
            </div>

                  
            <TextArea onChange={handleChange} />

            <div className="row">
               <div className="col-3 text-left">
                  <ul className="list-inline">
                     <li className="list-inline-item">
                        <h5>Filter:</h5>
                     </li>
                  </ul>
               </div>

               <div className="col-9">
                  <ul className="list-inline text-right">
                     <li className="list-inline-item">
                        <Sort
                        onModeChange={sortingModeChange}
                        onSortingOrderChange={sortingOrderChange}
                        />
                     </li>
                  </ul>
               </div>
            </div>
   

                  <Frequency
                     wording={wording}
                     sorting={sorting}
                     sortingOrder={sortingOrder}
                  />

         </div>

      </div>


   )
}

interface ITittle {
   title: string
}

export default App

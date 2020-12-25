import { ReactElement } from 'react'

interface Props {
   wordList: string
   countList: number
}

export default function Card({ wordList, countList }: Props): ReactElement {
   return (



      <table className="table">
         <tbody>
            <tr className="text-left">
               <td className="w-75">{wordList}</td>
               <td className="pl-5">{countList}</td>
            </tr>
         </tbody>
      </table>

   )
}

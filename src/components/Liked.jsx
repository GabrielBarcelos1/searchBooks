import React from 'react'
import '../styles/liked.css'
import Finder from './Finder'
import BookList from './BooksList'
import { BookContext } from '../providers/ContextBook'



function Liked() {
  const {books} = React.useContext(BookContext)
  return(
    <div>
      <Finder/>
      <div className="likedList">
        <BookList
            arrBooks= {books}
            
            />
      </div>
    </div>
  )
}

export default Liked
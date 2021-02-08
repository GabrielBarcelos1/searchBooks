import React, {useState} from 'react'
export const BookContext = React.createContext([{}])


export function BookProvider(props){
  const [books, setBooks] = useState([])
  const [valueInput, setValueInput] = useState("")
  const [valueStar, setValueStar] = useState([])
  return(
    <BookContext.Provider value={{
      books, setBooks,
      valueInput, setValueInput,
      valueStar, setValueStar}}>
      {props.children}
    </BookContext.Provider>
  )
} 
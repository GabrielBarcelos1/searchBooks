import React, {useState} from 'react'
export const BookContext = React.createContext([{}])


export function BookProvider(props){
  const [books, setBooks] = useState([])
  const [valueInput, setValueInput] = useState("")
  return(
    <BookContext.Provider value={{ books, setBooks , valueInput, setValueInput}}>
      {props.children}
    </BookContext.Provider>
  )
} 
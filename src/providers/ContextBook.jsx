import React from 'react'
export const BookContext = React.createContext([{}])

const books = [{
  image: "teste"
}]
export function BookProvider(props){
  return(
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
} 
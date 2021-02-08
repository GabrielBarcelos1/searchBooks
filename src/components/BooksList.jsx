
import Books from './Books'
import '../styles/BookList.css'

function BookList (props){
    
    return (
        <div>
            {/* <p className="pTotal">{props.apperTotal == false ? "" : `Livros Encontrados: ${props.totalBooks}`}</p> */}
            <div className="divBookList">
                {props.arrBooks.map((teste, key)=>{

                    return <Books
                        key={key}
                        urlImage={teste.volumeInfo?.imageLinks?.smallThumbnail || teste.urlImage || '../images/not-found.png'}
                        id={teste.id}
                    />
                })}
            </div>
        </div>
    )

}

export default BookList
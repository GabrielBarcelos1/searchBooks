
import Books from './Books'
import '../styles/BookList.css'
function BookList (props){
    
    return (
        <div>
            {/* <p className="pTotal">{props.apperTotal == false ? "" : `Livros Encontrados: ${props.totalBooks}`}</p> */}
            <div className="divBookList">
                {props.arrBooks.map(teste=>{

                    return <Books
                        title={teste.volumeInfo.title}
                        publisher={teste.volumeInfo.publisher}
                        urlImage={teste.volumeInfo?.imageLinks?.smallThumbnail || '../images/not-found.png'}
                        authors={teste.volumeInfo.authors}
                        publishedDate={teste.volumeInfo.publishedDate}
                        id={teste.id}
                    />
                })}
            </div>
        </div>
    )

}

export default BookList
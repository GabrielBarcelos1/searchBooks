
import Books from './Books'
import '../styles/BookList.css'
function BookList (props){
    
    return (
        <div className="divBookList">
            {props.arrBooks.map(teste=>{
                {console.log(teste)}
                return <Books
                    title={teste.volumeInfo.title}
                    publisher={teste.volumeInfo.publisher}
                    urlImage={teste.volumeInfo?.imageLinks?.smallThumbnail || '../images/not-found.png'}
                    authors={teste.volumeInfo.authors}
                />
            })}
        </div>
    )

}

export default BookList
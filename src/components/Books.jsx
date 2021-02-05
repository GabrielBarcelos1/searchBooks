import {Link} from 'react-router-dom'
import '../styles/books.css'
import image from"../images/not-found.png"
function Books(props){
    return(
        <Link to={`../book-details/${props.id}`}>
                <img src={props.urlImage == '../images/not-found.png'? image : props.urlImage }  className="imagemLivro"/>
        </Link>
    )
}

export default Books
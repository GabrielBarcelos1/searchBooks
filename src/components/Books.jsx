import {Link} from 'react-router-dom'
import '../styles/books.css'
import image from"../images/not-found.png"
function Books(props){
    return(
        <div className="divBook">
            <div className="divBookImage">
                <img src={props.urlImage == '../images/not-found.png'? image : props.urlImage }  className="imagemLivro"/>
            </div>
            <div className="divBookInfo">
                <p className="pBooks">Titulo: <a>{props.title == undefined ? "titulo indefinido" : props.title }</a></p>
                <p className="pBooks">Editora:<a> {props.publisher == undefined ? "editora Indefinida" : props.publisher }</a></p>
                <p className="pBooks">Data da Publicação : <a>{props.publishedDate == undefined ? "data indefinida" : props.publishedDate}</a></p>
                <p className="pBooks">Autores: <a>{props.authors == undefined ? "autores indefinidos" : props.authors}</a></p>
                <Link to={`book-details/${props.id}`}>
                    <a className="myButton">Ver mais</a>
                </Link>
           </div>
          
        </div>
    )
}

export default Books
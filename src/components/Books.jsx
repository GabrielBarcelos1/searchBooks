import {useState} from 'react'
import '../styles/books.css'
import image from"../images/not-found.png"
function Books(props){
    

    return(
        <div className="divBook">
            {
            console.log(props.authors)
            }
            <div>
                <img src={props.urlImage == '../images/not-found.png'? image : props.urlImage }  className="imagemLivro"/>
            </div>
            <div>
                <p>Titulo: {props.title}</p>
                <p>Editora: {props.publisher}</p>
                <p>Autores: {props.authors}</p>
           </div>
        </div>
    )
}

export default Books
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { AiTwotoneStar } from "react-icons/ai";

import '../styles/bookDetails.css'

function BookDetails(){
    const [urlImage,setUrlImage] = useState("")
    const [bookTitle,setbookTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [publisher,setPublisher] = useState("")
    const [publishedDate,setPublishedDate] = useState("")
    const [pageCount,setPageCount] = useState("")
    const [averageRating,setAverageRating] = useState("")
    const [description,setDescription] = useState("")
    const [urlBuy,setUrlBuy] = useState("")
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(res=>{
            setUrlImage(res.data.volumeInfo.imageLinks.smallThumbnail)
            setbookTitle(res.data.volumeInfo.title)
            setAuthor(res.data.volumeInfo.authors)
            setPublisher(res.data.volumeInfo.publisher)
            setPublishedDate(res.data.volumeInfo.publishedDate)
            setPageCount(res.data.volumeInfo.pageCount)
            setAverageRating(res.data.volumeInfo.averageRating)
            setDescription(res.data.volumeInfo.description)
            setDescription(res.data.volumeInfo.description)
            setUrlBuy(res.data.volumeInfo.canonicalVolumeLink)
            return console.log(res.data.volumeInfo)
        })
        console.log(id)
    }, [])
   
    
    return(
        <div className="divBookDetails">
            <div className="divInnerBookDetails">
                <h2>{<a>{bookTitle == undefined ? "Titulo indefinido" : bookTitle }</a>}</h2>
                <img src={urlImage} />
                <p>Nome do autor: <a>{author == undefined ? "Autor indefinido" : author }</a></p>
                <p>Editora: <a>{publisher == undefined ? "Editora indefinida" : publisher }</a></p>
                <p>Data de publicação: <a>{publishedDate == undefined ? "Data indefinida" : publishedDate }</a></p>
                <p>Numero de paginas: {pageCount == undefined ? "Numero de paginas indefinido" : pageCount } </p>
                <p>Opinião dos criticos: <AiTwotoneStar className="star"/> {averageRating == undefined ? "Avaliação indefinida" : averageRating } </p>
                
            </div>
            <div className="divDescription">
            <h2>Descrição do livro:</h2>
            <p>{description}</p>
            <div className="divButtons">
            <a className="myButton" href={`https://play.google.com/books/reader?id=${id}&hl=&printsec=frontcover&source=gbs_api`}>Ler um resumo</a>
            <a className="myButton" href={urlBuy}>Comprar o livro</a>
            </div>
            </div>
        </div>
    )
}

export default BookDetails
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { AiTwotoneStar, AiOutlineHeart } from "react-icons/ai";
import Finder from './Finder'

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
    const [price, setPrice] = useState("")
    const [favorited, setFavorited] = useState("spanHeartOff")
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
            setPrice(res.data?.saleInfo?.listPrice?.amount  || "Preço indisponivel" )
        })
    }, [])
    function favoriteBook(){
        if(favorited === "spanHeartOff"){
            setFavorited("spanHeartOn")
        }else{
            setFavorited("spanHeartOff")
        }
    }
   
    
    return(
        <div className="all">
            <Finder/>
            <div className="divBookDetails">
                
                <div className="divInnerBookDetails">
                    <div className="pictureTitle">
                        <img src={urlImage} />
                        <div className="moreInfos">
                        <h2>{<a>{bookTitle == undefined ? "Titulo indefinido" : bookTitle }</a>}</h2>
                            <p className="ByFor">By: <a>{author == undefined ? "Autor indefinido" : author }</a></p>
                            <div className="bottomMoreInfos">
                                <p>{price === undefined ? "unpriced": price}</p>
                                <p><AiTwotoneStar className="star"/> {averageRating == undefined ? "Avaliação indefinida" : averageRating } </p>
                            </div>
                        </div>
                    </div>
                    <div className="PagesBuyContainer">
                        <p className="QuantityPages">{pageCount == undefined ? "Numero de paginas indefinido" : pageCount } Pages</p>
                        <div className="BuyFavorite">
                            <a className="myButton" href={urlBuy}>Buy</a><br/>
                            <span className={`${favorited}`} onClick={()=>favoriteBook()}>
                                <AiOutlineHeart/>
                            </span>
                        </div>
                    </div>
                
                    
                </div>
                <div className="divDescription">
                <p>{description}</p>
                <div className="divButtons">
            
                </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
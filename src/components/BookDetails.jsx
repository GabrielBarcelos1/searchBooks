import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { AiTwotoneStar, AiOutlineHeart } from "react-icons/ai";
import Finder from './Finder'
import { BookContext } from '../providers/ContextBook'
import ReactStars from "react-rating-stars-component";
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
    const [coin, setCoin] = useState("")
    const [favorited, setFavorited] = useState("spanHeartOff")
    const {books, setBooks} = React.useContext(BookContext)
    
   
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
            setPrice(res.data?.saleInfo?.listPrice?.amount  || "?.??" )
            
        })
        for(let i=0; i<= books.length; i++){
            if(books[i]?.id === id){
                setFavorited("spanHeartOn")
            }
            console.log("for")
        }

    }, [])
    function favoriteBook(){
        if(favorited === "spanHeartOff"){
            setFavorited("spanHeartOn")
            const seen = new Set();
            let array = books
            array.push({
                urlImage: urlImage,
                id : id
            })
            const filteredArr = array.filter(el => {
                const duplicate = seen.has(el.id);
                seen.add(el.id);
                return !duplicate;
              });
            setBooks(filteredArr)
            console.log(books)
        }else{
            setFavorited("spanHeartOff")
            let array = books
            console.log(array.length)
            for(let i=0; i<=array.length; i++){
                if(array[i]?.id === id){
                    array.splice(i,1)
                    
                }
                console.log("for")
            }
            console.log(array)
            setBooks(array)
            console.log(books)
        }
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    
    
    return(
        <div className="all">
            <Finder/>
            <div className="divBookDetails">
                
                <div className="divInnerBookDetails">
                    <div className="pictureTitle">
                        <img src={urlImage} />
                        <div className="moreInfos">
                        <h2 className="moreInfosTitle">{<a>{bookTitle == undefined ? "Titulo indefinido" : bookTitle }</a>}</h2>
                            <p className="ByFor">By: <a>{author == undefined ? "Autor indefinido" : author }</a></p>
                            <div className="bottomMoreInfos">
                                <p>$</p>
                                <p>{price === undefined ? "unpriced": price}</p>
                                <ReactStars
                                    count={5}
                                    value={3}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
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
                {description}
                <div className="divButtons">
            
                </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
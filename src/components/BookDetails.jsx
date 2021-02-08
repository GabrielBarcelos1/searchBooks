import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {  AiOutlineHeart } from "react-icons/ai";
import Finder from './Finder'
import { BookContext } from '../providers/ContextBook'
import ReactStars from "react-rating-stars-component";
import '../styles/bookDetails.css'
import imageNotFound from "../images/not-found.png"

function BookDetails(){
    const [urlImage,setUrlImage] = useState("")
    const [bookTitle,setbookTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [pageCount,setPageCount] = useState("")
    const [description,setDescription] = useState("")
    const [urlBuy,setUrlBuy] = useState("")
    const {id} = useParams()
    const [price, setPrice] = useState("")
    const [favorited, setFavorited] = useState("spanHeartOff")
    const {books, setBooks , valueStar , setValueStar} = React.useContext(BookContext)
    
   
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(res=>{
            setUrlImage(res.data.volumeInfo.imageLinks?.smallThumbnail)
            setbookTitle(res.data.volumeInfo.title)
            setAuthor(res.data.volumeInfo.authors)
            setPageCount(res.data.volumeInfo.pageCount)
            setDescription(res.data.volumeInfo.description)
            setDescription(res.data.volumeInfo.description)
            setUrlBuy(res.data.volumeInfo.canonicalVolumeLink)
            setPrice(res.data?.saleInfo?.listPrice?.amount  || "?.??" )
            
        })
        for(let i=0; i<= books.length; i++){
            if(books[i]?.id === id){
                setFavorited("spanHeartOn")
            }
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
    
        }else{
            setFavorited("spanHeartOff")
            let array = books
            for(let i=0; i<=array.length; i++){
                if(array[i]?.id === id){
                    array.splice(i,1)
                    
                }
            }
            setBooks(array)
        }
    }
    function ratingChanged(newRating){
            let verificator = true
            let array = valueStar
            for(let i=0; i<= valueStar.length; i++){
                if(valueStar[i]?.id === id){
                  valueStar[i].starQuantity = newRating
                  verificator = false
                }
          
            }
            if(verificator){
                array.push({
                    starQuantity: newRating,
                    id : id
            })
            }
            setValueStar(array)
      }
      function rating(){
        for(let i=0; i<= valueStar.length; i++){
            if(valueStar[i]?.id === id){
                return valueStar[i].starQuantity
            }
        }
      }

    
    
    return(
        <div className="all">
            <Finder/>
            <div className="divBookDetails">
                
                <div className="divInnerBookDetails">
                    <div className="pictureTitle">
                        <img src={urlImage ? urlImage: imageNotFound }/>
                        <div className="moreInfos">
                        <h2 className="moreInfosTitle">{<a>{bookTitle === undefined ? "Titulo indefinido" : bookTitle }</a>}</h2>
                            <p className="ByFor">By: <a>{author === undefined ? "Autor indefinido" : author }</a></p>
                            <div className="bottomMoreInfos">
                                <div className="divPrice">
                                    <p>$</p>
                                    <p>{price === undefined ? "unpriced": price}</p>
                                </div>
                                <div className="ratingStars">
                                    <ReactStars
                                        count={5}
                                        value={rating()}
                                        onChange={ratingChanged}
                                        size={18}
                                        activeColor="#594E04"
                                        color="#cdb820"
                                        />
                                    </div>
                                    </div>
                        </div>
                    </div>
                    <div className="PagesBuyContainer">
                        <p className="QuantityPages">{pageCount === undefined ? "Numero de paginas indefinido" : pageCount } Pages</p>
                        <div className="BuyFavorite">
                            <a className="myButton" href={urlBuy}><p className="labelBuy">Buy</p></a>
                            <span className={`${favorited}`} onClick={()=>favoriteBook()}>
                                <AiOutlineHeart/>
                            </span>
                        </div>
                    </div>
                
                    
                </div>
                <div className="divDescription">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                <div className="divButtons">
            
                </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
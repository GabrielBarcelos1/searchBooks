import {useState ,useEffect} from 'react'
import '../styles/Finder.css'
import Axios from 'axios'
import BookList from './BooksList'
import search from '../images/search.svg'
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom'
function Finder() {
  
    const [arrBooks, setArrBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)
    const [Loading, setLoading] = useState(false)
    const [loadingGif, setLoadingGif] = useState(true)
    const [apperTotal, setApperTotal] = useState(false)
    const [showMore, setShowMore] = useState(12)
    const {id} = useParams()
    useEffect(()=>{
      findBoooks()
  },[showMore])
    const findBoooks = () =>{
        function  findBoooksAsync(){
          const userSearch = document.getElementById("userSearch").value
            if(userSearch!==""){
            setLoadingGif(false)
            setLoading(true)
            Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userSearch}&maxResults=${showMore}`).then(res=>{
            setLoadingGif(true)
            console.log("entrei no then")
            setArrBooks(res.data.items)
            setTotalBooks(res.data.totalItems)
            setLoading(true)
            setApperTotal(true)
            }
            ).catch(error=>{
              console.log("erro" + error)
            })}
        }
        findBoooksAsync()
    }
    function ShowMoreFunction(){
      setShowMore(showMore => showMore + 6)
      console.log(showMore)
      findBoooks()
    }

    return (
      <div className="divFinder">
        <div className="divFinderBar">
            <div className="divToAfter">
              <Link to="/finder">
              <a className="Buttonback" ><AiOutlineArrowLeft/></a>
              </Link>
              <input type="text" placeholder="nome do livro desejado" id="userSearch" className="inputFinder"  autocomplete="off"/>

              { id === undefined ? <a onClick={findBoooks} className="buttonFinder"><AiOutlineSearch/></a>:
                <Link to="/finder">
                  <a onClick={findBoooks} className="buttonFinder"><AiOutlineSearch/></a>
                </Link>
              }
            </div>
            <div className="after">
            </div>
          </div>
          {id === undefined ?<img src={search} className={Loading ? "esconder" : "fotoSearch"}/>: ""}
          <img src="https://i.stack.imgur.com/kOnzy.gif" className={loadingGif ? "esconder" : "gif"}/>
          <BookList
          arrBooks= {arrBooks}
          totalBooks={totalBooks}
          apperTotal={apperTotal}
          />
          {apperTotal ? <a className="myButton" onClick={ ()=> ShowMoreFunction()}>Show More</a> : ""}
      </div>
      
    );
  }
  
  export default Finder;
  
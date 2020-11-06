import {useState} from 'react'
import '../styles/Finder.css'
import Axios from 'axios'
import BookList from './BooksList'
import search from '../images/search.svg'
import { AiOutlineSearch } from "react-icons/ai";
function Finder() {
    const [arrBooks, setArrBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)
    const [Loading, setLoading] = useState(false)
    const [loadingGif, setLoadingGif] = useState(true)
    const [apperTotal, setApperTotal] = useState(false)
    const findBoooks = () =>{
        function  findBoooksAsync(){
          setLoadingGif(false)
          setLoading(true)
            const userSearch = document.getElementById("userSearch").value
            Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userSearch}&maxResults=39`).then(res=>{
            setLoadingGif(true)
            console.log("entrei no then")
            setArrBooks(res.data.items)
            setTotalBooks(res.data.totalItems)
            setLoading(true)
            setApperTotal(true)
            }
            ).catch(error=>{
              console.log("erro" + error)
            })
            
    
        }
        findBoooksAsync()
    }

    return (
      <div className="divFinder">
       
        <div className="divFinderBar">
            <input type="text" placeholder="nome do livro desejado" id="userSearch" className="inputFinder"  autocomplete="off"/>
            <a  onClick={findBoooks} className="buttonFinder"><AiOutlineSearch/></a>
          </div>
          <img src={search} className={Loading ? "esconder" : "fotoSearch"}/>
          <img src="https://i.stack.imgur.com/kOnzy.gif" className={loadingGif ? "esconder" : "gif"}/>
          <BookList
          arrBooks= {arrBooks}
          totalBooks={totalBooks}
          apperTotal={apperTotal}
          />
          
          
          
      </div>
      
    );
  }
  
  export default Finder;
  
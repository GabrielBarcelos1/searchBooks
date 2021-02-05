import React from 'react'
import {useState ,useEffect} from 'react'
import '../styles/Finder.css'
import Axios from 'axios'
import BookList from './BooksList'
import search from '../images/search.svg'
import { AiOutlineSearch, AiOutlineArrowLeft, AiOutlineMenu } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom'
import { BookContext } from '../providers/ContextBook'

function Finder() {
  
    const [arrBooks, setArrBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)
    const [Loading, setLoading] = useState(false)
    const [loadingGif, setLoadingGif] = useState(true)
    const [apperTotal, setApperTotal] = useState(false)
    const [showMore, setShowMore] = useState(12)
    const [menuActive ,setMenuActive] = useState(true)
    const {id} = useParams()
    const {valueInput,setValueInput} = React.useContext(BookContext)
    useEffect(()=>{
      findBoooks(13)
  },[showMore])
    const findBoooks = (e) =>{
        function  findBoooksAsync(e){

          if(e == 13 ||    e?.charCode  === 13){
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
            })}}
        }
        findBoooksAsync(e)
    }
    function ShowMoreFunction(){
      setShowMore(showMore => showMore + 6)
      console.log(showMore)
      findBoooks()
    }
    function menuAnimation(){
      if(menuActive){
        setMenuActive(false)
      }else{
        setMenuActive(true)
      }
    }
    function inputAtt(e){
      setValueInput(e.target.value)
      console.log(valueInput)
    }

    return (
      <div className="divFinder">
        <div className="divFinderBar">
            <div className="divToAfter">
              {id === undefined ? <i className="menu" onClick={()=>menuAnimation()}><AiOutlineMenu/></i>:
                <Link to="/finder">
              <a className="Buttonback" ><AiOutlineArrowLeft/></a>
              </Link>}
              <input type="text" placeholder="nome do livro desejado" id="userSearch" className="inputFinder" value={valueInput} autocomplete="off" onKeyPress={(e)=>findBoooks(e)} onChange={(e)=>inputAtt(e)}/>

              { id === undefined ? <a onClick={()=>findBoooks(13)} className="buttonFinder"><AiOutlineSearch/></a>:
                <Link to="/finder">
                  <a onClick={findBoooks} className="buttonFinder"><AiOutlineSearch/></a>
                </Link>
              }
            </div>
              <div className="after">
              </div>
             
          </div>
          {menuActive && id === undefined ? 
              <div className="menuItens">
                <Link to="/liked/1">
                  <p>Liked</p>
                </Link>
                <Link to="/">
                  <p>Home</p>
                </Link>
              </div>
              : ""}
          {id === undefined ?<img src={search} className={Loading ? "esconder" : "fotoSearch"}/>: ""}
          <img src="https://i.stack.imgur.com/kOnzy.gif" className={loadingGif ? "esconder" : "gif"}/>
          {id === undefined ?
          <BookList
          arrBooks= {arrBooks}
          totalBooks={totalBooks}
          apperTotal={apperTotal}
          />: ""}
          {apperTotal && id === undefined ? <a className="myButton" onClick={ ()=> ShowMoreFunction()}>Show More</a> : ""}
      </div>
      
    );
  }
  
  export default Finder;
  
import {useState} from 'react'
import '../styles/Finder.css'
import Axios from 'axios'
import BookList from './BooksList'
function Finder() {
    const [arrBooks, setArrBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)
    const findBoooks = () =>{
        async function  findBoooksAsync(){
            const userSearch = document.getElementById("userSearch").value
            const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userSearch}&maxResults=39`)
      
            setArrBooks(res.data.items)
            setTotalBooks(res.data.totalItems)
    
        }
        findBoooksAsync()
    }

    return (
      <div className="divFinder">
       
        <div className="divFinderBar">
          <input type="text" placeholder="nome do livro desejado" id="userSearch"/>
          <button  onClick={findBoooks}>Buscar</button>
          </div>
        <BookList
        arrBooks= {arrBooks}
        totalBooks={totalBooks}
        />
          
      </div>
    );
  }
  
  export default Finder;
  
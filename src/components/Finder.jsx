import {useState} from 'react'
import '../styles/Finder.css'
import Axios from 'axios'
import BookList from './BooksList'
function Finder() {
    const [arrBooks, setArrBooks] = useState([])
    const findBoooks = () =>{
        async function  findBoooksAsync(){
            const userSearch = document.getElementById("userSearch").value
            const res = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userSearch}&maxResults=39`)

            setArrBooks(res.data.items)
    
        }
        findBoooksAsync()
    }

    return (
      <div className="divFinder">
          <input type="text" placeholder="nome do livro desejado" id="userSearch"/>
          <button  onClick={findBoooks}>Buscar</button>
        <BookList
        arrBooks= {arrBooks}
        />
          
      </div>
    );
  }
  
  export default Finder;
  
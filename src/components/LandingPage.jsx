import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/landingPage.css'
import home1Svg from '../images/home-1.svg'
import { BookContext } from '../providers/ContextBook'
import { AiOutlineSearch} from "react-icons/ai";


function LandingPage(){ 
    const {valueInput,setValueInput} = React.useContext(BookContext)
    function inputAtt(e){
        setValueInput(e.target.value)
        console.log(valueInput)
      }
    return(
        <div>
           
            <div className="divPrincipalHome">
                <img src={home1Svg} alt=""/>
                <div className="divConteudoHome">
                    <p className="p2">Encontre o <a className="wordBook">livro</a> que você esta procurando em poucos passos.</p>
                    {/* <p className="p2">Procure livros em qualquer lugar, você não precisa saber o nome do livro, se você souber o nome do autor ou da editora, basta digitar e pesquisar.</p> */}
                    <div className="searchHome">
                        <input type="text" value={valueInput} onChange={(e)=>inputAtt(e)}></input>
                        <Link to="/finder">
                            <AiOutlineSearch size="1.3em" color="#877703"/>
                        </Link>
                    </div>
  
                </div>
            </div>
        </div>
        
    )
}


export default LandingPage
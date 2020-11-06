import {Link} from 'react-router-dom'
import '../styles/landingPage.css'
import home1Svg from '../images/home-1.svg'

function LandingPage(){ 
    return(
        <div>
           
            <div className="divPrincipalHome">
                <div className="divConteudoHome">
                    <p className="p1">Encontre o <a className="wordBook">livro</a> que você esta procurando em poucos passos.</p>
                    <p className="p2">Procure livros em qualquer lugar, você não precisa saber o nome do livro, se você souber o nome do autor ou da editora, basta digitar e pesquisar.</p>
                    <Link to="/finder">
                        <a className="myButton">Buscar livros</a>
                    </Link>
                </div>
                <img src={home1Svg} alt=""/>
            </div>
        </div>
        
    )
}


export default LandingPage
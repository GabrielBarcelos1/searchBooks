import { Link } from "react-router-dom";
import "./index.css";
import image from "../../images/not-found.png";
function Books(props) {
  return (
    <Link to={`../book-details/${props.id}`}>
      <img
        src={
          props.urlImage === "../images/not-found.png" ? image : props.urlImage
        }
        className="imagemLivro"
        alt="foto do livro"
      />
    </Link>
  );
}

export default Books;

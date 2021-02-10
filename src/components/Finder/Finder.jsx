import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Axios from "axios";
import BookList from "../BookList/BooksList";
import search from "../../images/search.svg";
import {
  AiOutlineSearch,
  AiOutlineArrowLeft,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { BookContext } from "../../providers/ContextBook";
import { useHistory } from "react-router-dom";
import "side-drawer";
import notFoundSearch from "../../images/not-found-search.png";

function Finder() {
  const [arrBooks, setArrBooks] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [loadingGif, setLoadingGif] = useState(true);
  const [apperTotal, setApperTotal] = useState(false);
  const [showMore, setShowMore] = useState(12);
  const [maxStack, setMaxStack] = useState(false);
  const [menuActive, setMenuActive] = useState(undefined);
  const [lastSearch, setLastSearch] = useState("");
  const { id } = useParams();
  const { valueInput, setValueInput } = React.useContext(BookContext);
  const history = useHistory();
  useEffect(() => {
    findBooks();
    if (showMore >= 40) {
      setMaxStack(true);
    }else{
      setMaxStack(false);
    }
  }, [showMore]);
  function findBooks() {
      if (valueInput !== "") {
        if (valueInput !== lastSearch) {
          setShowMore(12);
        }
        setLoadingGif(false);
        setLoading(true);
        Axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${valueInput}&maxResults=${
            valueInput !== lastSearch ? 12 : showMore
          }`
        )
          .then((res) => {
            setArrBooks(res.data.items);
            setLoadingGif(true);
            setApperTotal(true);
            setLastSearch(valueInput);
          })
          .catch((error) => {
            console.error(error);
          });
      }
  }
  function findBooksEnter(e){
    if (e === 13 || e?.charCode === 13) {
      findBooks()
    }

  }
  function ShowMoreFunction() {
    if (showMore <= 34) {
      setShowMore(showMore + 6);
    } else {
      setShowMore(40);
    }
  }
  function menuAnimation() {
    if (menuActive) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  }
  function inputAtt(e) {
    setValueInput(e.target.value);
  }
  function redirect(e) {
    if (e.charCode === 13) {
      history.goBack();
    }
  }
  function redirectBack() {
    history.goBack();
  }

  return (
    <div className="divFinder">
      <side-drawer open={menuActive}>
        <div className="menuItens">
          <Link to="/" className="menuIten">
            <p>Home</p>
          </Link>
          <Link to="/liked/1" className="menuIten">
            <p>Favorites</p>
          </Link>
        </div>
      </side-drawer>
      <div className="divFinderBar">
        <div className="divToAfter">
          {id === undefined ? (
            <i className="menu" onClick={() => menuAnimation()}>
              <AiOutlineMenu />
            </i>
          ) : (
            <a className="Buttonback" onClick={redirectBack}>
              <AiOutlineArrowLeft />
            </a>
          )}
          <input
            type="text"
            placeholder="Name of the book"
            id="userSearch"
            className="inputFinder"
            value={valueInput}
            autoComplete="off"
            onKeyPress={id === undefined ? findBooksEnter : redirect}
            onChange={inputAtt}
          />

          {id === undefined ? (
            <a onClick={() => findBooks} className="buttonFinder">
              <AiOutlineSearch />
            </a>
          ) : (
            <Link to="/finder">
              <a onClick={findBooks} className="buttonFinder">
                <AiOutlineSearch />
              </a>
            </Link>
          )}
        </div>
        <div className="after"></div>
      </div>
      {id === undefined && (
        <img src={search} className={Loading ? "esconder" : "fotoSearch"} />
      )}
      {id === undefined && (
        <section>
          <BookList
            arrBooks={arrBooks || []}
            apperTotal={apperTotal}
          />
          <img
            src="https://i.stack.imgur.com/kOnzy.gif"
            className={loadingGif ? "esconder" : "gif"}
            alt="loading"
          />
        </section>
      )}

      {apperTotal && id === undefined && !maxStack && arrBooks && (
        <a className="myButton" onClick={() => ShowMoreFunction()}>
          Show More
        </a>
      )}
      {!arrBooks && id === undefined && (
        <div className="notFoundSearch">
          <img
            src={notFoundSearch}
            alt="notFoundSearch"
            className="imageNotFoundSearch"
          ></img>
          <p>Search not found</p>
        </div>
      )}
    </div>
  );
}

export default Finder;

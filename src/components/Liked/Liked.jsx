import React from "react";
import "./index.css";
import Finder from "../Finder/Finder";
import BookList from "../BookList/BooksList";
import { BookContext } from "../../providers/ContextBook";

function Liked() {
  const { books } = React.useContext(BookContext);
  return (
    <div>
      <Finder />
      <div className="likedList">
        <BookList arrBooks={books} />
      </div>
    </div>
  );
}

export default Liked;

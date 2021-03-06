import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import home1Svg from "../../images/home-1.svg";
import { BookContext } from "../../providers/ContextBook";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const { valueInput, setValueInput } = React.useContext(BookContext);
  const history = useHistory();
  function inputAtt(e) {
    setValueInput(e.target.value);
  }
  function redirect(e) {
    if (e.charCode === 13) {
      const path = `/finder`;
      history.push(path);
    }
  }
  return (
    <div className="boxHome">
      <div className="divPrincipalHome">
        <img src={home1Svg} alt="foto-home" />
        <div className="divConteudoHome">
          <p className="p2">Find the book you're looking for in minutes</p>
          <div className="searchHome">
            <input
              type="text"
              placeholder="Name of the book"
              id="userSearch"
              autoComplete="off"
              onKeyPress={redirect}
              onChange={inputAtt}
            ></input>
            <Link to="/finder">
              <AiOutlineSearch
                size="1.3em"
                color="#877703"
                className="iconSearch"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

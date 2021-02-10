import { BrowserRouter, Switch, Route } from "react-router-dom";
import Finder from "./components/Finder/Finder";
import LandingPage from "./components/LandingPage/LandingPage";
import BookDetails from "./components/BookDetails/BookDetails";
import Liked from "./components/Liked/Liked";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/finder" component={Finder} />
        <Route path="/book-details/:id" component={BookDetails} />
        <Route path="/liked/:id" component={Liked} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

import {BrowserRouter, Switch , Route} from 'react-router-dom'
import Finder from './components/Finder'
import LandingPage from './components/LandingPage'
import BookDetails from './components/BookDetails'

function Routes(){
return <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/finder" component={Finder}/>
            <Route path="/book-details/:id" component={BookDetails}/>

        </Switch>
    </BrowserRouter>
}

export default Routes
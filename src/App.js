import Navbar from "./navbar.js";
import Home from "./Home";
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom' ;
import Create from "./Create.js";
import Blogdetails from "./BlogDetalis.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
           <Route path="/create">
             <Create/>
          </Route>
          <Route path="/blogs/:id">
             <Blogdetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
       
      </div>
    </div>
    </Router>
  );
}

export default App;

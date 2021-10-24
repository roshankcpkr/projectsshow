import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import AddImage from "./AddImage";
import EditImage from "./EditImage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddImage} />
          <Route path="/edit/:id" component={EditImage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Header from "./Header";
import "./App.css";
import Login from "./Auth/Login";
import "./Auth.css";
import Register from "./Auth/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header /><Router>
      
       
        <Route exact path="/" component={Login} />

        <Route path="/Register" component={Register} />
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

const TITLE = "Shaun Khundker";
class App extends React.Component {
  componentDidMount() {
    document.title = "Shaun's Website"
  }
  render() {
    return (
      <Router>
        <title>{TITLE}</title>
        <div className="App">
          <div id="body-format">
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" component={Work} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

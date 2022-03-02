import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Footer from "./components/pages/Footer/Footer";
import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

const TITLE = "Shaun Khundker";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="App">
          <div id="body-format">
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/work" component={Work} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

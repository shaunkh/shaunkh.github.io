import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Work from "./components/pages/Work";
import Footer from "./components/pages/Footer/Footer";
import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const TITLE = "Shaun Khundker";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/work" component={Work} />
          </Switch>
          <div className="main-footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

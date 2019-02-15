import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Survey from "./Survey";
import SurveyResults from "./SurveyResults";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Survey} />
          <footer>
            <SurveyResults />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Relay's Take-Home Exercise</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Take The Survey</Link>
            </li>
            <li>
              <Link to="/questions/new">Add A New Question</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

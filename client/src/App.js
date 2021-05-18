import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Form from "./components/Form";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <h2>Welcome to Student Leaderboard</h2>
      <nav>
        <ul>
          <li>
            <Link to={"/form"}>Form</Link>
          </li>
          <li>
            <Link to={"/leaderboard"}>Leaderboard</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/form" component={Form} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

const Error = () => {
  return <div>Error</div>;
};

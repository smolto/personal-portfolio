import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { HomePage } from 'src/pages/HomePage/HomePage';
import { AboutMePage } from 'src/pages/AboutMePage/AboutMePage';
import { MyWorkPage } from 'src/pages/MyWorkPage/MyWorkPage';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <AboutMePage />
          </Route>
          <Route path="/work">
            <MyWorkPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

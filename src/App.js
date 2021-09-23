import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import { HomePage } from 'src/pages/HomePage/HomePage';
import { AboutMePage } from 'src/pages/AboutMePage/AboutMePage'
import { MyWorkPage } from 'src/pages/MyWorkPage/MyWorkPage'
import { LoadingPage } from 'src/pages/LoadingPage/LoadingPage'

const HomePage = lazy(() => import('src/pages/HomePage/HomePage'))

export default function App () {
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
            <Suspense fallback={<LoadingPage />}>
              <HomePage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

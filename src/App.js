import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
// import JobItemDetails from './components/JobItemDetails'
import JobsRoute from './components/JobsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import JobCard from './components/JobCard'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
// eslint-disable-next-line

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />

    <ProtectedRoute exact path="/Jobs" component={JobsRoute} />
    <ProtectedRoute exact path="/JobDetails" component={JobCard} />

    <Route component={NotFoundRoute} />
  </Switch>
)
export default App

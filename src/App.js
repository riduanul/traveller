import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import BookingDetail from './components/BookingDetail/BookingDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
    return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <Router>
  <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/booking">
        <Booking />
      </Route>
      <PrivateRoute path="/bookingDetail">
        <BookingDetail />
      </PrivateRoute>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
</UserContext.Provider>
  );
}

export default App;

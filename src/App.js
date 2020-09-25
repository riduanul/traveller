import React, { createContext, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import BookingDetail from "./components/BookingDetail/BookingDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import travelData from "./resorces/travelData/travelData";

export const UserContext = createContext();
function App() {
  const [locationInfo, setLocationInfo] = useState(travelData[0]);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, locationInfo, setLocationInfo]}>
    
      <div className="app">
        <Router>
          
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
      </div>
    </UserContext.Provider>
  );
}

export default App;

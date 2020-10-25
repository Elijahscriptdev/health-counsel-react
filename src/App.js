import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Doctors from "./components/pages/doctors/Doctors";
import HomePage from "./components/pages/homepage/HomePage";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
// import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/doctors' component={Doctors} />
          {/* <Route exact path='/profile/:id' component={Profile} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

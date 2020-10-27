import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Doctors from "./components/pages/doctors/Doctors";
import HomePage from "./components/pages/homepage/HomePage";
import LoginPatient from "./components/pages/login/Login";
import RegisterPatient from "./components/pages/register/Register";
import DoctorLogin from "./components/pages/doctor-login-reg/login/Login";
import DoctorRegister from "./components/pages/doctor-login-reg/register/Register";
// import './App.css';
// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/patient/login' component={LoginPatient} />
          <Route exact path='/patient/register' component={RegisterPatient} />
          <Route exact path='/doctor/login' component={DoctorLogin} />
          <Route exact path='/doctor/register' component={DoctorRegister} />
          <Route exact path='/doctors' component={Doctors} />
          {/* <Route exact path='/profile/:id' component={Profile} /> */}
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
// "scripts": {
//   "dev": "react-scripts start",
//   "start": "serve -s build",
//   "build": "react-scripts build",
//   "test": "react-scripts test --env=jsdom",
//   "eject": "react-scripts eject",
//   "heroku-postbuild": "npm run build"
// }

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }

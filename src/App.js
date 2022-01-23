import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/";
import Footer from "./Components/Footer";
import Courses from "./Components/Courses/Courses";
import CoursesSearchPage from "./Components/CoursesSearch/CoursesSearchPage";
import CoursesDetails from "./Components/CoursesSearch/CoursesDetails";
import Login from "./Components/Login/Login";
import CoursesLocal from "./Components/Courses/CoursesLocal";
import CoursesForeign from "./Components/Courses/CoursesForeign";
import "./assets/style/responsive.scss";
import { useSelector } from "react-redux";

const App = () => {
  const isLogged = useSelector((state) => state.login.data);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/search" exact>
          <CoursesSearchPage />
        </Route>
        <Route path="/search/:courseId" exact>
          <CoursesDetails />
        </Route>
        <Route path="/coursesLocal" exact>
          <CoursesLocal />
        </Route>
        <Route path="/coursesForeign" exact>
          <CoursesForeign />
        </Route>
        <Route path="/login" exact>
          {isLogged ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

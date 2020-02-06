import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles.css";

const Homepage = lazy(() => import("./components/Homepage"));
const Profile = lazy(() => import("./components/Profile"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));

const App = () => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

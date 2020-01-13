import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

const Homepage = lazy(() => import("./components/Content"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));

const App = () => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Switch>
        <Route exact path="/" component={Homepage} />
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

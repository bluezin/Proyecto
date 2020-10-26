import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const history = () => {
  return <Router history={history} />;
};
export default createBrowserHistory();

import * as React from "react";
import {Route, Switch} from 'react-router-dom';
import ErrorComponent from "../pages/error/index";
import FormComponent from "../pages/credit-cards/container";

export const AllRoutes = () => {
  return (
      <Switch>
        <Route exact path="/" component={FormComponent}/>
        <Route component={ErrorComponent}/>
      </Switch>
  );
};

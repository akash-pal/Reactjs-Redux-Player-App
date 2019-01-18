import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import EditPlayer from './EditPlayer';
import AddPlayer from './AddPlayer';
import NotFound from "./NotFound"; 

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path='/edit-player/:id' component={EditPlayer}/>
      <Route path='/add' component={AddPlayer}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router; 
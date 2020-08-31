import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard/Dashboard";


const Routes = () => (
    <>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    </>
);


export default Routes;

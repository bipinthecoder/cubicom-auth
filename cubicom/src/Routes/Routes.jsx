import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "../Components/Login";


const Routes = () => (
    <>
        <Switch>
            <Route path="/" exact component={Login} />
        </Switch>
    </>
);


export default Routes;

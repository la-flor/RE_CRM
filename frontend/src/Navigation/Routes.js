import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Components/HomePage";
import NewLeadPage from "../Components/NewLeadPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/submission">
                <NewLeadPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;
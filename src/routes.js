import React from "react"
import {Route,Switch} from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form"

export default (
    <Switch>
        <Route path="/form" component={Form} />
        <Route path="/" component={Dashboard} />
    </Switch>
)
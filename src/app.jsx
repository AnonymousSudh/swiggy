import React from "react";
import Header from "./header";
import Signin from "./Signin";
import Menu from "./Menu"
import Search from "./Search";
import { NavLink, Route, Switch } from "react-router-dom";

const App = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/Signin" component={Signin} />
                <Route exact path="/Search" component={Search} />
            </Switch>

        </>
    );

};

export default App;
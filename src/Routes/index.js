import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BasicLayout from "../layout/BasicLayout/";
export default function Routes(props) {
    return (
        <Router>
            <Route component={BasicLayout}></Route>
        </Router>
    );
}

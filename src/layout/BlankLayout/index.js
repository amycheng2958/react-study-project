import React, { Component } from "react";
import classnames from "classnames";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { blankRoutes as routes } from "../../Routes/routes";
import "./index.scss";

export default function BlankLayout() {
    return (
        <div className={classnames("blankLayout", "layout")}>
            <article>
                <Switch>
                    {routes.map(item => {
                        return item.guard ? (
                            <item.guard
                                key={item.path}
                                path={item.path}
                                component={item.component}
                                {...item.props}
                            />
                        ) : (
                            <Route
                                key={item.path}
                                path={item.path}
                                component={item.component}
                                {...item.props}
                            ></Route>
                        );
                    })}
                </Switch>
            </article>
        </div>
    );
}

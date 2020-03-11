import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import classnames from "classnames";
import { basicRoutes as routes } from "../../Routes/routes";
import { matchAllRoute, matchRoute } from "../../Routes/matchRoute";
import TopBar from "../../components/TopBar/";
import BottomNav from "../../components/BottomNav/";
import _404 from "../../pages/_404";
import BlankLayout from "../BlankLayout";
import "./index.scss";

export default function BasicLayout(props) {
    const { location } = props;
    const matchAll = matchAllRoute(location);
    if (!matchAll) {
        return <Route component={_404} />;
    }
    //在路由表配置过路由，但是没有使用BasicLayout的框架的页面
    const match = matchRoute(routes, location);
    if (!match) {
        return <Route component={BlankLayout} />;
    }
    const { title, showTopBar } = match;
    return (
        <div className={classnames("basicLayout", "layout")}>
            <TopBar title={title} />
            <article>
                <Switch>
                    {routes.map(item =>
                        item.guard ? (
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
                            />
                        )
                    )}
                </Switch>
            </article>
            <BottomNav menu={routes} />
        </div>
    );
}

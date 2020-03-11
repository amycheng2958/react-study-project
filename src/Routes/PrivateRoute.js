import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
export default connect(({ user }) => ({
    isLogin: user.isLogin
}))(function PrivateRoute({ component: Cmp, isLogin, ...rest }) {
    console.log({ ...rest }, 100);

    return (
        <Route
            render={({ location }) => {
                return isLogin ? (
                    <Cmp {...rest} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { redirect: location.pathname }
                        }}
                    />
                );
            }}
        ></Route>
    );
});

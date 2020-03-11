import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./index.scss";
export default connect(({ user }) => ({ user }))(
    class LoginPage extends Component {
        constructor(props) {
            super(props);
            this.state = { name: "" };
        }
        render() {
            console.log(this.props, "this.props");
            const { login, user, location } = this.props;
            const { isLogin, loading, err, tip } = user;
            const { name } = this.state;
            if (isLogin) {
                const { redirect = "/" } = location.state || {};
                return <Redirect to={redirect} />;
            }
            return (
                <div className="loginPage">
                    <h3>LoginPage</h3>
                    <input
                        type="text"
                        value={name}
                        onChange={event => {
                            this.setState({ name: event.target.value });
                        }}
                    />
                    <p className="red">{err.msg}</p>
                    <button
                        onClick={() => {
                            console.log(1);
                        }}
                    >
                        {loading ? "登录中..." : "登录"}
                    </button>
                    <p className="green">{tip.msg}</p>
                </div>
            );
        }
    }
);

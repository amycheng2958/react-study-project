import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./index.scss";

export default class BottomNav extends Component {
    render() {
        const { menu } = this.props;
        console.log(menu);
        return (
            <ul className="bottomNav">
                {menu.map(item =>
                    item._1stNav ? <MenuItem key={item.path} {...item} /> : null
                )}
            </ul>
        );
    }
}

function MenuItem({ path, title }) {
    return (
        <NavLink
            exact
            to={path}
            activeClassName="selected"
            className="menuItem"
        >
            <div>{title}</div>
        </NavLink>
    );
}

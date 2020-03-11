import React, { Component } from "react";
import "./index.scss";

export default function TopBar({ title }) {
    return (
        <div className="topBar">
            <div className="menuItem">{title}</div>
        </div>
    );
}

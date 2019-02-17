import React from "react";
import "./Navigation.css";
import {NavLink }from "react-router-dom";

const navigation = (props) => {
    return (
        <div className="ui secondary pointing menu navigation">
            <NavLink className="item" exact to="/">FlashCardio</NavLink>
            <div className="right menu">
                <NavLink activeStyle="active" className="item" exact to="/">Home</NavLink>
                <NavLink activrStyle="active" className="item" to="/add">Add</NavLink>
            </div>

        </div>
    );
};

export default navigation;
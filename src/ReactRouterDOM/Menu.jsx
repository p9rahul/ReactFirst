import React from "react";
import { NavLink } from "react-router-dom";
import "./router.css"

const Menu = () => {

    return (
        <>

            <div className="menu_style">
                <NavLink exact className="active_class" to="/"> About us </NavLink>
                <NavLink exact className="active_class" to="/contact"> Contact us </NavLink>
                <NavLink  className="active_class" to="/service"> Service</NavLink>
                <NavLink className="active_class" to="/user/ram"> Users</NavLink>
                <NavLink className="active_class" to="/search"> Search</NavLink>
            </div>

            {/* <NavLink exact style={({ isActive }) => ({
                    color: isActive
                        ? "Red"
                        : "Blue",
                })} to="/"> About us </NavLink> */}
            {/* <NavLink exact style={({ isActive }) => ({
                    color: isActive
                        ? "Red"
                        : "Blue",
                })} to="/contact"> Contact us </NavLink> <br /> */}

            {/* Anchor tag will reload the page not
            <a href="/"> About us</a>
            <a href="/contact"> Contact us</a> */}

        </>
    );
};

export default Menu;
import React from "react";
import './Header.scss'

export const Header = (props) => {

    return (
        <div className="Header">
            {props.children}
        </div>
    )
};

import React from "react";
import './Notifications.scss'

export const Notifications = props => {
    return (
        <div className='Notifications'>
            {props.children}
        </div>
    );
};

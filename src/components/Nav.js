import React from "react";
import './Nav.scss'

export const Nav = props => {
  return (
      <div className='Nav'>
          {props.children}
      </div>
  );
};

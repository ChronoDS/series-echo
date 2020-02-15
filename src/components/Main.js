import React from "react";
import './Main.scss'

export const Main = props => {
  return (
      <div className='Main'>
          {props.children}
      </div>
  );
};

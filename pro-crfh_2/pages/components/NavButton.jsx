import React from 'react';
import {useRouter} from 'next/router';


const NavButton = ({ name, path, onAction }) => {
  
  const router = useRouter();

  return ( path ?
                (<div key={name} className={router.pathname === path ? 'navbar-current-location navbar-button' : 'navbar-button'} aria-label={name} onClick={()=>{
                  return router.push(path);
                }}>
                <span className='navbar-button-text'>{ name }</span>
                <div className={router.pathname === path ? 'navbutton-bar' : 'navbutton-bar-disabled'} />
                </div>) : (
                  <div key={name} className= 'navbar-button' aria-label={name} onClick={onAction}>
                  <span><b>{ name }</b></span>
                  </div>
                )

  );
}

export default NavButton;

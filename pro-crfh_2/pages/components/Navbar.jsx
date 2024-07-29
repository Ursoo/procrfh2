import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image';

import NavButton from './NavButton';
import { useState } from 'react';
import ContactView from './ContactView';
import CategoryMenu from './CategoryMenu';
import { useRouter } from 'next/router';


const Navbar = ({response}) => {
  const [ isActive, setIsActive ] = useState(false);
  const [ remove, setRemove ] = useState(true);
  const router= useRouter();

  const toggleContact = () => {
    if ( isActive !== true ) 
    {
      setIsActive(true);
      
      if ( remove )
      setRemove(false);

      return;
    }
    
    setIsActive(false);
    setTimeout((()=>{
      setRemove(true);
    }), 200);
  };

  const menuItems = [{
    'name' : 'Acasa',
    'path' : '/',
    'function' : undefined,
  },{
    'name' : 'Magazin',
    'path' : '/shop',
    'function' : undefined,
  },
  {
    'name' : 'Automatizare',
    'path' : '/automatizare',
    'function' : undefined,
  },
{
  'name' : 'Contact',
  'path' : undefined,
  'function' : toggleContact,
},
]

  return (
    <div>
        <AppBar className="navbar-container" position='fixed' color='inherit'>
            <Toolbar disableGutters>
              <CategoryMenu />
                <div onClick={() => {
                  router.push('/');
                }}
                style={{
                  cursor:'pointer',
                }}>
                    <Image src='/logo2.png' height="50px" width="350px" />
                </div>
                <div className="navbar-spacing" />
                <div className='navbar-button-container'>
                  {menuItems.map((item) => {
                    return (
                    <React.Fragment key={item['name']}>
                      <NavButton name={item['name']} path={item['path']} onAction={item['function']} />
                    </React.Fragment>
                    );
                  })}
                 {!remove && <ContactView isActive={isActive}/>}
                </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar;

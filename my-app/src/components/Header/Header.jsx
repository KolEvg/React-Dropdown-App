import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { users } from '../../data/data';

import './index.css';

export function Header() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const name = prompt('Авторизуйтесь', 'ilya');
    console.log(users[name]);
    setUser(users[name]);
  }, []);

  return (
    <div className="container header__container">
      <div className="dropdown">
        <nav className="dropbtn">Messenger</nav>
          <div className="dropdown-content">       
            {user?.role === 'admin' 
              ? 
              <>
                <Link to="/contacts" alt=''>Telegram</Link>
                <Link to="/contacts" alt=''>WhatsApp</Link>
                <Link to="/contacts" alt=''>Signal</Link>
                <Link to="/contacts" alt=''>Viber</Link>
              </>
              : 
              <>
                <Link to="#" alt=''>VK Chat</Link>
                <Link to="#" alt=''>Facebook Chat</Link>
              </>
            }
          </div>
      </div>
      <div className="dropdown">
        <nav className="dropbtn">JavaScript</nav>
          <div className="dropdown-content">
            <Link to="#" alt=''>React</Link>
            <Link to="#" alt=''>Vue</Link>
            <Link to="#" alt=''>Svelte</Link>
            <Link to="#" alt=''>Angular</Link>
        </div>
      </div>
      <div className="dropdown">
        <nav className="dropbtn">Videoconference</nav>
          <div className="dropdown-content">
            <Link to="#" alt=''>Zoom</Link>
            <Link to="#" alt=''>Telemost</Link>
            <Link to="#" alt=''>Microsoft Teams</Link>
            <Link to="#" alt=''>Google Meet</Link>
          </div>
      </div>
      <div className="dropdown">
        <nav className="dropbtn">Contacts</nav>
          <div className="dropdown-content">
            <Link to="#" alt=''>KMPG</Link>
            <Link to="#" alt=''>E&Y</Link>
            <Link to="#" alt=''>Deloitte</Link>
            <Link to="#" alt=''>PWC</Link>
          </div>      
      </div>
    </div>
  );
}

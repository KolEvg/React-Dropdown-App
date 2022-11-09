import React from "react";
import { useState, useEffect } from "react";

import { users } from '../../data/data';

import './index.css';

export function Header() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const name = prompt('Авторизуйтесь', 'ilya');
    setUser(users[name]);
  }, []);

  console.log('user --->', user);

  return (
    <div className="container header__container">
      <div className="dropdown">
        <nav className="dropbtn">Info</nav>
        <div className="dropdown-content">
          
          {user?.role === 'admin' 
            ? <>
              <a href="#" alt=''>Link 1</a>
              <a href="#" alt=''>Link 2</a>
              <a href="#" alt=''>Link 3</a>
              <a href="#" alt=''>Link 4</a>
            </>
            : <>
              <a href="#" alt=''>Link 1</a>
              <a href="#" alt=''>Link 4</a>
              </>
          }

          
        </div>
      </div>

      <div className="dropdown">
        <nav className="dropbtn">Store</nav>
        <div className="dropdown-content">
          <a href="#" alt=''>Link 5</a>
          <a href="#" alt=''>Link 6</a>
          <a href="#" alt=''>Link 7</a>
          <a href="#" alt=''>Link 8</a>
        </div>
      </div>

      <div className="dropdown">
        <nav className="dropbtn">Gift</nav>
        <div className="dropdown-content">
          <a href="#" alt=''>Link 9</a>
          <a href="#" alt=''>Link 10</a>
          <a href="#" alt=''>Link 11</a>
          <a href="#" alt=''>Link 12</a>
        </div>
      </div>

      <div className="dropdown">
        <nav className="dropbtn">Contacts</nav>
        <div className="dropdown-content">
          <a href="#" alt=''>Link 13</a>
          <a href="#" alt=''>Link 14</a>
          <a href="#" alt=''>Link 15</a>
          <a href="#" alt=''>Link 16</a>
        </div>      
      </div>
    </div>
  );
}

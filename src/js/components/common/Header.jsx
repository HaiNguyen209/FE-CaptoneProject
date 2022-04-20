import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../../scss/header.module.scss';

function Header() {
  const name = 'Hai';
  return (
    <div className={styles.container}>
      <div className={styles['container-inner']}>
        <div className={styles['container-inner_content']}>
          {/* <img src="" alt="" /> */}
          <span> Hi {name}</span>
        </div>
        <div className={styles['container-inner_navbar']}>
          <div className={styles['container-inner_navbar--link']}>
            <ul>
              <li>
                <NavLink exact activeClassName={styles.activelink} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.activelink} to="/forum"> Forum</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.activelink} to="/question"> Question</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.activelink} to="/acount"> Account</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Button className={styles['container-inner_navbar--signIn']}> Sign In</Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;

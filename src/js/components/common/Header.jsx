import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { MenuOutlined } from '@ant-design/icons';
import styles from '../../../scss/header.module.scss';

function Header() {
  const name = 'Hai';
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  // const isIpad = useMediaQuery({
  //   query: '(max-width: 740px)',
  // });
  // const isSmallPhone = useMediaQuery({
  //   query: '(min-width: 320px)',
  // });

  return (
    <div className={styles.container}>
      <div className={styles['container-inner']}>
        <div className={styles['container-inner_content']}>
          {/* <img src="" alt="" /> */}
          <span> Hi {name}</span>
        </div>
        { isDesktop ? (
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
              <NavLink className={styles['container-inner_navbar--signIn']} to="/Sign-in">SignIn</NavLink>
              <NavLink className={styles['container-inner_navbar--signUp']} to="/Sign-up"> SignUp</NavLink>
            </div>
          </div>
        ) : <div className={styles['container-inner_navbar']}><MenuOutlined /> </div>}
      </div>
    </div>
  );
}

export default Header;

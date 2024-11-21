import React from 'react'
import Logo from '../assets/Logo'
import ButtonRound from './ButtonRound'
import style from './Header.module.css'
import useMedia from '../hooks/useMedia'

const Header = () => {
  const mobile = useMedia('(max-width: 43.75rem)');
  const [mobileActive, setMobileActive] = React.useState(false);


  return (
    <div className={`container ${style.container}`}>
      <Logo/>
      {mobile && <button className={`${style.hamburgerMenu} ${mobileActive ? style.active : ''}`} onClick={() => setMobileActive(!mobileActive)}>
      </button>}
      <nav className={`${style.nav} ${mobileActive ? style.active : ''}`}>
        <ul>
          <li><a className={style.navItem} href="">Features</a></li>
          <li><a className={style.navItem} href="">Pricing</a></li>
          <li><a className={style.navItem} href="">Resources</a></li>
        </ul>
        <ul>
          <li><a className={style.navItem} href="">Login</a></li>
          <li><ButtonRound style={{fontSize: '16px', padding: '8px 24px'}}>SingUp</ButtonRound></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
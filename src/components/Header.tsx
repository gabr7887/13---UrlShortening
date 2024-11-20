import React from 'react'
import Logo from '../assets/Logo'
import ButtonRound from './ButtonRound'
import style from './Header.module.css'

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    
  }, []) 


  return (
    <div className={`container ${style.container}`}>
      <Logo/>
      <nav className={style.nav}>
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
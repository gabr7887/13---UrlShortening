import ButtonRound from './ButtonRound'
import ilu from '../assets/images/illustration-working.svg'

import style from './Intro.module.css'
const Intro = () => {
  return (
    <div className={`container ${style.container}`}>
      <div className={style.content}>
        <div>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        </div>
        <ButtonRound>Get Started</ButtonRound>
      </div>
      <img src={ilu} alt="" />
    </div>
  )
}

export default Intro
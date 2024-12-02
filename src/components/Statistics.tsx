import style from './Statistics.module.css'
import IconBrandRecognition from '../assets/IconBrandRecognition'
import Card from './Card'

const Statistics = () => {
  return (
    <div className={`container ${style.container}`}>
      <h1>Advanced Statistics</h1>
      <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      <div className={`container ${style.subContainer}`}>
      <Card imgSrc={IconBrandRecognition} title='Brand Recognition'> aasds asdsa asd sadad asdasd asds asdsadasdasdas sadasd asd sad asd as</Card>
      </div>
    </div>
  )
}

export default Statistics
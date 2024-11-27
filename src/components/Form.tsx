import React from 'react'
import Button from './Button'
import Style from './Form.module.css'
import FormInput from './FormInput'

const Form = () => {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <form className={`container ${Style.container}`}>
        <FormInput label='LinkInput' customPlaceHolder='Shorten a link here' 
        stateValue={value}
        setStateValue={setValue}/>
        <Button>Shorten it!</Button>
      </form>
    </div>
  )
}

export default Form
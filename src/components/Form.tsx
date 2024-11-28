import React from 'react'
import Button from './Button'
import Style from './Form.module.css'
import FormInput from './FormInput'

const Form = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if(value.length > 0) {
      console.log("ok");
    } else {
      setError(true);
    }
  }

  return (
    <div className={Style.bg}>
      <form onSubmit={handleSubmit} className={`container ${Style.container}`}>
        <FormInput label='LinkInput' customPlaceHolder='Shorten a link here' 
        stateValue={value}
        setStateValue={setValue}
        stateError={error}
        setStateError={setError}/>
        <Button>Shorten it!</Button>
      </form>
    </div>
  )
}

export default Form
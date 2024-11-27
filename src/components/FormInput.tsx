import React from 'react'
import Style from './FormInput.module.css' 

type inputParams = React.HTMLProps<'input'> & {
  label : string,
  customPlaceHolder: string,
  stateValue: string,
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormInput = (props : inputParams) => {
  const [isFocused, setIsFocused] = React.useState(false);

  function OnFocus(){
    setIsFocused(true);
  }

  function OnBlur(){
    setIsFocused(false);
  }

  return (
    <div className={`${Style.inputDiv} ${Style.errorState}`}>
      <label className={isFocused && props.stateValue === '' ? Style.disabled : ''} htmlFor={props.label}>{props.customPlaceHolder}</label>
      <input onFocus={OnFocus} onBlur={OnBlur} onChange={({target}) => props.setStateValue(target.value)} type="text" name={props.label} id={props.label}/>
      <span className={Style.errorMessage}>please add a link</span>
    </div>
  )
}

export default FormInput
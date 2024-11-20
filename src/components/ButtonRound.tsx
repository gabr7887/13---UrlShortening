import React from "react"

const ButtonRound = (props: React.PropsWithChildren & React.HTMLProps<'a'> ) => {
  return (
    <a  className='button' style={{borderRadius: '32px', ...props.style}} >{props.children}</a>
  )
}

export default ButtonRound
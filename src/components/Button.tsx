import React from "react"

const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="button" style={{borderRadius: '10px'}}>{props.children}</button>
  )
}

export default Button
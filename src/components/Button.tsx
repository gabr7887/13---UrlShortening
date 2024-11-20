import React from "react"

const Button = (props: React.PropsWithChildren) => {
  return (
    <a className="button" style={{borderRadius: '10px'}}>{props.children}</a>
  )
}

export default Button
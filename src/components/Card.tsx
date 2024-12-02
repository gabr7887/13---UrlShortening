import React from "react"

type card = React.PropsWithChildren & {
  imgSrc: React.JSX.Element,
  title: string
}

const Card = ({imgSrc, title, ...props} : card  ) => {
  return (
    <div>
      <img src={imgSrc} />
      <h2>{title}</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default Card
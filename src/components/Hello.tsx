import React from "react"
import style from "@components/index.scss"

console.log(style)

interface HelloProps {
  name: string
}

const Hello = (props: HelloProps) => {
  return <div className={style.cr}>hello {props.name}</div>
}
export default Hello

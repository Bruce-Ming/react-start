import React from "react"
import ReactDOM from "react-dom"
import Hello from "@components/Hello"

const App = () => {
  return (
    <>
      <div>哈哈哈</div>
      <Hello name="zdm"></Hello>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

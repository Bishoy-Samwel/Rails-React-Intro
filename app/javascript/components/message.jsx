import React from "react"
import ReactDOM from 'react-dom'


export default function Message(props) {
  return (
    <div>
      <h2>The Message is {props.msg}.</h2>
    </div>
  );
}

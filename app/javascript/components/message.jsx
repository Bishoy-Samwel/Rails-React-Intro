import React from "react"
import { useSelector, useDispatch } from "react-redux";

const GET_RANDOM_MSG = 'GET_RANDOM_MSG';

GetRandomMsg = () => {
  console.log('GetRandomMsg() Action')
  return {
    type: GET_RANDOM_MSG
  }
}

export default function Message(props) {
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.msg)
  return (
    <div>
      <h2>The Message from props is {msg}.</h2>
      <button className="getMessageBtn" onClick={() => dispatch(GetRandomMsg())}> Get Random Message</button>
      <h2>The Message from store is {message.title}.</h2>
    </div>
  );
}

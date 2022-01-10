import React from "react"
import { useSelector, useDispatch } from "react-redux";

const GET_RANDOM_MSG_REQUEST = 'GET_RANDOM_MSG_REQUEST';
const GET_RANDOM_MSG_SUCCSESS = 'GET_RANDOM_MSG_SUCCSESS';

getRandomMsg = () => {
  return (dispacth) => {
    dispacth({type: GET_RANDOM_MSG_REQUEST});
    return fetch(`api/v1/randomMessage`)
    .then(response => response.json())
    .then(json => dispacth(getRandomMsgSuccess(json)))
    .catch(error => console.log(error))
  }
}

getRandomMsgSuccess = (json) => {
  console.log('GetRandomMsg() Action')
  return {
    type: GET_RANDOM_MSG_SUCCSESS,
    json
  }
}

export default function Message(props) {
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.msg)
  return (
    <div>
      <h2>The Message from props is {msg}.</h2>
      <button className="getMessageBtn" onClick={() => dispatch(getRandomMsg())}> Get Random Message</button>
      <h2>The Message from store is {message.title}.</h2>
    </div>
  );
}

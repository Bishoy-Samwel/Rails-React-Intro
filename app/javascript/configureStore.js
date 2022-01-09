import { createStore } from 'redux';

const initialState = {
  msg: { title: "Hello", body: "English Message" }
};

rootReducer = (state = initialState, action) => {
  console.log(action.type, "request");
  switch (action.type) {
    default:
      return state
  }
}

export default configureStore = () => {
  const store = createStore(rootReducer, initialState);
  return store;
}
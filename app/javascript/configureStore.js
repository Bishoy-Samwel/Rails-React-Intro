import { createStore } from 'redux';

const initialState = { 
  message: []
};

rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default configureStore = () => {
  const store = createStore(rootReducer, initialState);
  return store;
}
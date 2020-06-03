import React from 'react';

import './App.css';

import DisplayMessages from './DisplayMessages.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
/* function App() {
  return (
    <div className="App">
      
    </div>
  );
}
*/

//redux
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

//       const store = Redux.createStore(messageReducer);
const store = createStore(messageReducer);

//redux

//       const Provider = ReactRedux.Provider;

//class AppWrapper extends React.Component {
  class App extends React.Component {  
  render() {
    return(
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Message from './message.jsx'

const App = () => {
    return (
      <Message msg="hi" />
      // <Router>
      //   <Switch>
      //     <Route exact path="/" render={()=> <Message msg="hi" />}/>
      //     <Route path="/message" render={() => <Message msg="hi" />} />
      //   </Switch>
      // </Router>
    );
}

export default App;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
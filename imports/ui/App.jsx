import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <React.StrictMode>
      <Hello />
      <Info />
    </React.StrictMode>
  </div>
);

export default App;

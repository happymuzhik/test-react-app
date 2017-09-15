import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.component';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
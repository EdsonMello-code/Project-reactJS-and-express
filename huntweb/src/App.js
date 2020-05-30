import React from 'react';

import Routes from './routes'
import Header from './components/header'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;

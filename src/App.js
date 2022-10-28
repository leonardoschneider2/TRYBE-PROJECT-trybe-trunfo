import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './styles/App.css';

// Hello World!
class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

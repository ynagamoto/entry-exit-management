import logo from './logo.svg';
import './App.css';

import ApiRequest from './module/ApiRequest'

function App() {
  // const url = 'http://management-api:8080'
  const url = 'http://chat.192.168.99.109.nip.io'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ApiRequest url={ url } />        

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

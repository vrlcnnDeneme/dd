import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-3xl font-bold underline">
            Learn React with vural
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;

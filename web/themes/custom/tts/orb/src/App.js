import logo from './logo.svg';
import './App.css';
import MyReactBitsComponent from './components/MyReactBitsComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
       {/* Remove the default header and just show Orb */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <MyReactBitsComponent
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  );
}

export default App;

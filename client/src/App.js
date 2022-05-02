import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './css/index.css';
import Nav from './Components/Nav'
import logo from "./img/MGE-Logo.svg"

function App() {
  return (
    <div className="App">
      <div>
        <img 
          src={logo} 
          alt='logo.png' 
          style={{
            width: '15%',
            margin: '1% 0%'
          }} 
        />
      </div>
      <Nav />
    </div>
  );
}

export default App;

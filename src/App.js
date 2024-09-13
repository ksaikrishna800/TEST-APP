// import logo from './logo.svg';
import TestFirst from './TestFirst/TestFirst';
import TestSecond from './TestSecond/TestSecond';
import logo from './fulllogo.jpg';
import './App.css';

function App() {
  return (
    <div>
    <div className="imageApp"><img src={logo} /><div className="QuoteStyles">Make Peoples life Better</div></div>
    <div style={{ display: 'grid', backgroundColor: '#fff9ee' }}>
    {/* backgroundColor: '#rgb(255 252 248 / 38%)' */}
    {/* background-color: #f1f8ff61; */}
    {/* background-color: #fff9ee; */}
    {/* rgb(255 249 241 / 38%) */}
      {/* <div className="App">
          <div class="header" id="header">
              <div class="navBar" id="nav_Bar">
                  <ul class="navLists">
                      <li class="navItem"><a href="#catalog" class="navLink">catalog</a></li>
                      <li class="navItem"><a href="#clients" class="navLink">clients</a></li>
                      <li class="navItem"><a href="#blog" class="navLink">blog</a></li>
                      <li class="navItem"><a href="#contact" class="navLink">contact</a></li>
                  </ul>
              </div>
          </div>
      </div> */}
          <div style={{ marginBottom: '100px' }}><TestFirst /></div>
          <div style={{ marginBottom: '100px' }}><TestSecond /></div>
          <div style={{ marginBottom: '100px' }}><TestFirst /></div>
          <div style={{ marginBottom: '100px' }}><TestSecond /></div>
          <div style={{ marginBottom: '100px' }}><TestFirst /></div>
          <div style={{ marginBottom: '100px' }}><TestSecond /></div>
    </div>
    </div>
  );
}

export default App;

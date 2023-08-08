import logo from './logo.svg';
import './App.css';
import img from "./nitalogo.png";


function App() {
  return (
    <div className="App">
      <div class="container">
        <div>
          <img src={img} alt="logo" class="logo"/>
        </div>
          <div class="inbox">
            <div class="intup-style">
              <input class="user" placeholder='UserName' type="text"></input>
            </div>
            <div class="intup-style">
              <input class="pass" placeholder='PassWord' type="text"></input>
            </div> 
            <div class="use">
              
            </div>
            <div class="pass">

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

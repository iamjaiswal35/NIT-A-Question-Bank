import './signin.css';
import img from "../../nitalogo.png";
import { useState } from 'react';


function Signin() {
  const init = new Date();
  const [second,setSecond] = useState(init.getSeconds());
  setInterval(() => {
    const date = new Date();
    setSecond(date.getSeconds());
  },1000);

   const [minute,setMinute] = useState(init.getMinutes());
  setInterval(() => {
    const date = new Date();
    setMinute(date.getMinutes());
  },60000);

  const [hour,setHour] = useState(init.getHours());
  setInterval(() => {
    const date = new Date();
    setHour(date.getHours());
  },360000);

  return (
    <div className="App">
      <div class="container">
      <div>
        <h2 className='time'>Current Time : {hour}:{minute}:{second}  </h2>

      </div>
        <div>
          <img src={img} alt="logo" className="logo"/>
        </div>
        
          <div className="inbox">
          <h2>Welcome to the App!!</h2>
            <div className="intup-style">
              <label className="font">
                Username:
              </label>
              <input className="user" placeholder='Username' type="text" ></input>
            </div>
            
            <div className="intup-style">
              <label className="font">
                Password:
              </label>
              <input className="user" placeholder='Password' type="text"></input>
            </div> 
              <div className='bot'>
              <input type='button' className='button' value={"Sign in"} />
              <input type='button' className='button' value={"Sign up"}/>
              </div>
            
          </div>
      </div>
    </div>
  );
}

export default Signin;

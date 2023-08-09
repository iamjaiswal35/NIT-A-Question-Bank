import './signin.css';
import img from "../../nitalogo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";





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
          <div className='toolbar'>
              <div className='threeline'>
              <GiHamburgerMenu />
              </div>
          </div>
        <div>
          <img src={img} alt="logo" className="logo"/>
        </div>
          
          <div className="inbox">
          <h2 className="sty" >National Institute of Technology Agartala</h2>
          <h2 className="sty">राष्ट्रीय प्रौद्योगिकी संस्थान अगरतला</h2>
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
              <input className="user" placeholder='Password' id="password" type="password"></input>
            </div> 
              <div className='bot'>
              <input type='button' className='button' value={"Sign in"} />
              </div>
              <div>
                <label className='reg'>New user? <Link to={"/signup"}> Register</Link></label>
              </div>
            
          </div>
      </div>
      
    </div>
  );
}

export default Signin;

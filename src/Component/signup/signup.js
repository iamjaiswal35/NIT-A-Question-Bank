import './signup.css';
import img from "../../nitalogo.png";
import { useState } from 'react';


function Signup() {
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
    <div className="singup">
      <div className='backg'>
      <div>
        <h2 className='timee'>Current Time : {hour}:{minute}:{second}  </h2>

      </div>
        <div>
        <img src={img} alt="logo" className="logo"/>
        </div>
        <div className='inbox'>
        <h2 className='sign-up'>Sign Up!!</h2>
            
            <label className="font">
                First name:
            </label>
            <input className="user" placeholder='First name' type="text" ></input>
            
            <label className="font">
                Last name:
            </label>
            <input className="user" placeholder='Last name' type="text" ></input>

            <label className="font">
                Enrollment no:
            </label>
            <input className="user" placeholder='Enrollment no' type="text" ></input>

            <label className="font">
                Email address:
            </label>
            <input className="user" placeholder='Email address' type="text" ></input>

            <label className="font">
                Phone no:
            </label>
            <input className="user" placeholder='Phone No' type="text" ></input>

            <label className="font">
                Department:
            </label>
            <input className="user" placeholder='Department' type="text" ></input>

            <div className='bot'>
              <input type='button' className='button' value={"Sign up"} />
              </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

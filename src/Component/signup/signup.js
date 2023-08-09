import './signup.css';
import img from "../../nitalogo.png";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';



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
      <div className='toolbar'>
              <div className='threeline'>
              <GiHamburgerMenu />
              </div>
          </div>
        <div>
        <img src={img} alt="logo" className="logo"/>
        </div>
        <div className='inbo'>
        <h2 className='sign-up'>Sign Up!!</h2>
            <div>
            <label className="fontt">
                First name:
            </label>
            <input className="user" placeholder='First name' type="text" ></input>
            </div>
            
            <div>
            <label className="fontt">
                Last name:
            </label>
            <input className="user" placeholder='Last name' type="text" ></input>
            </div>

            <div>
            <label className="fontt">
                Username:
            </label>
            <input className="user" placeholder='Username' type="text" ></input>
            </div>

            <div>
            <label className="fontt">
                 Password:
            </label>
            <input className="user" placeholder='Password' type="text" ></input>
            </div>

            <div>
            <label className="fontt">
                Enrollment no:
            </label>
            <input className="user" placeholder='Enrollment no' type="text" ></input>
            </div>

            <div>
            <label className="fontt">
                Email address:
            </label>
            <input className="user" placeholder='Email address' type="text" ></input>
            </div>

            <div>
            <label className="fontt">
                Phone no:
            </label>
            <input className="user" placeholder='Phone No' type="text" ></input>
            </div>



            <div className='bot'>
              <input type='button' className='button' value={"Sign up"} />
              </div>
              <div>
                <label className='logg'>Already Register? <Link to={"/login"}> login</Link></label>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

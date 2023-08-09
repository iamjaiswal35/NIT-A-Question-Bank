import { useState } from 'react';
import './firstpage.css';
import { GiHamburgerMenu } from "react-icons/gi";



function Firstpage() {
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
    <div className="first-page">
      <div className='back1'>
        <div className='toolbar'>
              <div className='threeline'>
              <GiHamburgerMenu />
              </div>
        </div>
          <div className='box'>
              <h2 className='ready'>
              ALL THE BEST 😇
              </h2>
            <div className='box1'>

            </div>
            
            <div className='box2'>
            
            </div>

            <div className='box3'>

            </div>

            <div className='box4'>

            </div>
          </div>  
      </div>
    </div>
  );
}

export default Firstpage;
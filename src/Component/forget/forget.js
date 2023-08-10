import './forget.css';
import { GiHamburgerMenu } from "react-icons/gi";
import img2 from "../../nitalogo.png";
import { Link } from 'react-router-dom';

function Forget() {
    
  return (
    <div className="forget">
            <div className='innboox'>
            <div className='toolbr'>
                <div className='threeline'>
                <GiHamburgerMenu />
            </div>
            </div>
            <div>
              <img src={img2} alt="logo" className="logo"/>
            </div>
            <div className='boxe'>
            <h2 className='headingfot'>Reset your password!!</h2>
            <br/>
            <div>
            

            <label className="fontt">
                Registered phone no:
            </label>
            <input className="user" placeholder='Phone No' type="text" ></input>
            </div>

            <div>
            <label className="fontt">
                Username:
            </label>
            <input className="user" placeholder='Username' type="text" ></input>
            </div>

            <div className='bot'>
              <input type='button' className='button' value={"Send otp"} />
              </div>

              <div>
                <label className='for'><Link to={"/login"}> Login?</Link></label>
              </div>


            </div>  
      </div>
    </div>
  );
}

export default Forget;
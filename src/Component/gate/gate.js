import './gate.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Gate() {
    
  return (
    <div className="gate">
        <div className='toolbr'>
                <div className='threeline'>
                <GiHamburgerMenu />
                </div>
        </div>
      <div className='innbox'>
      <div className="inbox">
          <h2>
            Sign In!!
          </h2>
          <br/>
            
            
          </div>
      </div>
    </div>
  );
}

export default Gate;
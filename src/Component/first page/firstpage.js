import './firstpage.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';



function Firstpage() {
    const navigate = useNavigate();
    
  
    const handleClick = () => {
      navigate('/firstyr')
    }
    const botClick = () => {
      navigate('/sem')
    }
    const handClick = () => {
      navigate('/gate')
    }
    const lolClick = () => {
      navigate('/upsc')
    }


  return (
    <div className="first-page">
      <div className='back10'>
        <div className='toolbar'>
              <div className='threeline'>
              <GiHamburgerMenu />
              </div>
        </div>
          <div className='box'>
              <h2 className='ready'>
              ALL THE BEST 😇
              </h2>
            <div onClick={handleClick} className='box1'>

            </div>
            
            <div onClick={botClick} className='box2'>
            </div>

            <div onClick={handClick} className='box3'>

            </div>

            <div onClick={lolClick} className='box4'>

            </div>
          </div>  
      </div>
    </div>
  );
}

export default Firstpage;
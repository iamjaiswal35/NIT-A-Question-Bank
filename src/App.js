import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Component/login/signin';
import Signup from './Component/signup/signup';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Signin />} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

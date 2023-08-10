import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Component/login/signin';
import Signup from './Component/signup/signup';
import Forget from './Component/forget/forget';
import Firstpage from './Component/first page/firstpage';
import Gate from './Component/gate/gate';
import Sem from './Component/sem/sem';
import Firstyr from './Component/firstyr/firstyr';
import Upsc from './Component/upsc/upsc';




function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Signin />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/forget' element={<Forget />}/>
          <Route path='/firstpage' element={<Firstpage />}/>
          <Route path='/gate' element={<Gate />}/>
          <Route path='/firstyr' element={<Firstyr />}/>
          <Route path='/upsc' element={<Upsc />}/>
          <Route path='/sem' element={<Sem />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

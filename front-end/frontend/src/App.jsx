import {Routes, Route} from 'react-router-dom';

import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx";
import Navbar from './components/Navbar.jsx';

function App(){
  return(
    <div className='p-6'>
    <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>   
  
    </div>
  )
}

export default App;
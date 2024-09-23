import './App.css'
import Register from './Screens/Register.tsx';
import Login from './Screens/Login.tsx';
import Navbar from '../src/Components/Navbar.tsx'
import Home from './Screens/Admin/home.tsx';


import { Route, Routes } from 'react-router-dom';

function App() {

  return (    
    <>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Admin/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App

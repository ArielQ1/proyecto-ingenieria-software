import './App.css'
import Register from './Screens/Register.tsx';
import Login from './Screens/Login.tsx';
import Navbar from '../src/Components/Navbar.tsx'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (    
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App

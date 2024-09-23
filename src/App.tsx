import './App.css'
import Register from './Screens/Register.tsx';
import Login from './Screens/Login.tsx';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar.tsx'
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App

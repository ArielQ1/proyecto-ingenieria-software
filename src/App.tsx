import Register from './Screens/Register.tsx';
import Login from './Screens/Login.tsx';
import HomeAdmi from './Screens/Admin/home.tsx';
import HomePublic from './Screens/Home.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (    
    <>
      <Routes>
        <Route path='/' element={<HomePublic/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Admin/home' element={<HomeAdmi/>}/>
      </Routes>
    </>
  )
}

export default App

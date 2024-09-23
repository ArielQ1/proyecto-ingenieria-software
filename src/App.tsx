import './App.css'
import Register from './Screens/Register.tsx';
import Login from './Screens/Login.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App

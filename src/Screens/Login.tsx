import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col place-items-center w-screen h-screen bg-fondoLogin bg-cover bg-center py-20">
      <div className="w-full mb-32">
        <Navbar />
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-900 p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-4 text-center text-white">Iniciar Sesión</h2>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
            required 
            aria-label="Correo Electrónico"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
            required 
            aria-label="Contraseña"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;

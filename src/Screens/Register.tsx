import Navbar from "../Components/Navbar";


const Register = () => {
    return (
        <div className="flex flex-col place-items-center w-screen h-screen bg-backgroundRegister bg-contain">
            <div className="w-full mb-32">
                <Navbar />
            </div>

            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className='text-4xl text-white font-bold text-center mb-6'>Registrarse</h1>
                <div className='relative my-4'>
                    <input id="correo" type="email" className='block w-72 py-2.5 px-0 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none' />
                    <label htmlFor="correo" className='absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] '>Ingrese Correo</label>
                </div>
                <div className='relative my-4'>
                    <input id="nombre" type="text" className='block w-72 py-2.5 px-0 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none ' />
                    <label htmlFor="nombre" className='absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] '>Nombre</label>
                </div>
                <div className='relative my-4'>
                    <input id="contrasena" type="password" className='block w-72 py-2.5 px-0 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none  ' />
                    <label htmlFor="contrasena" className='absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] '>Contraseña</label>
                </div>
                <div className='relative my-4 flex items-center justify-center' >
                    <input id="condiciones" type="checkbox" className='mr-4' />
                    <label htmlFor="condiciones" className='text-white origin-[0] '>Acepto las Condiciones</label>
                </div>
                <button className='w-full mb-4 text-[18px] mt-6 rounded-md bg-slate-50 duration-500 text-slate-950 hover:bg-slate-600 hover:text-white py-2'>Registrarse</button>
            </div>
        </div>
    )
};

export default Register;
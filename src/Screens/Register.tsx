import logoToyota from '../assets/toyota_logo.png';

const Register = () => {
    return (
        <div className="flex flex-col place-items-center w-screen h-screen" >
            <div className="">
                <img src={logoToyota} alt="logo toyosa" className='w-28' />
            </div>

            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1>Registrarse</h1>
                <div>
                    <input id="correo" type="email" />
                    <label htmlFor="correo">Ingrese Correo</label>
                </div>
                <div>
                    <input id="nombre" type="text" />
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div>
                    <input id="contrasena" type="password" />
                    <label htmlFor="contrasena">Contraseña</label>
                </div>
                <div>
                    <input id="condiciones" type="checkbox" />
                    <label htmlFor="condiciones">Acepto las Condiciones</label>
                </div>
                <button>Registrarse</button>
            </div>
        </div>
    )
};

export default Register;
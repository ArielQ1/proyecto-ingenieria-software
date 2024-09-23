import NavbarAdmin from '../../Components/NavbarAdmin';
import React, { useState } from 'react';

const AdminHome = () => {

    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <>
            <header>
                <NavbarAdmin />
            </header>

            <div className="flex h-screen">
                {/* Barra de navegación */}
                <div
                    className={`${isNavOpen ? 'w-1/5 min-w-[10%]' : 'w-16'
                        } bg-gray-500 text-white transition-all duration-300 ease-in-out flex flex-col items-center`}
                >
                    {/* Botón de abrir/cerrar */}
                    <button
                        className="p-2 mt-4 bg-gray-700 hover:bg-gray-600 rounded-full"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        {isNavOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 12H6"
                                />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        )}
                    </button>

                    {/* Navegación */}
                    {isNavOpen && (
                        <nav className="mt-8 w-full">
                            <ul className="flex flex-col items-start px-4">
                                <li className="py-2 hover:bg-gray-600 rounded w-full ps-4">Inicio</li>
                                <li className="py-2 hover:bg-gray-600 rounded w-full ps-4">Vender</li>
                                <li className="py-2 hover:bg-gray-600 rounded w-full ps-4">Configuración</li>
                                <li className="py-2 hover:bg-gray-600 rounded w-full ps-4">Ayuda</li>
                            </ul>
                        </nav>
                    )}
                </div>

                {/* Contenido principal */}
                <div className="flex-1 bg-gray-100 p-4">
                    <h1 className="text-2xl font-bold mb-4">Contenido Principal</h1>
                    <p>
                        Aquí se desplegarán las pantallas de contenido. Puedes agregar tus
                        componentes aquí.
                    </p>
                </div>
            </div>
        </>
    )
};

export default AdminHome;
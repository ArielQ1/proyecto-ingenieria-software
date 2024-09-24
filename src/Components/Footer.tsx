import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-screen flex flex-row h-16 bg-black text-white fixed bottom-0">
            <section className="w-9/12 h-full grid place-content-around ">
                <ul className="grid grid-cols-3 text-lg gap-8">
                    <li className="hover:text-red-600 duration-300"><Link to="" >Sobre Nosotros</Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to="">Nuestra Politica</Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to=""> ... </Link></li>
                </ul>
            </section>
            <section className="w-3/12 h-full grid place-content-center">
                <ul className="grid grid-cols-4 text-2xl gap-8">
                    <li className="hover:text-red-600 duration-300"><Link to=""><FaTiktok /></Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to=""><FaFacebookF /></Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to=""><FaInstagram /></Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to=""><FaXTwitter /></Link></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;
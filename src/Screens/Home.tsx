import CardImageText from "../Components/CardImageText";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import img from "../assets/xD.jpg";
import { FaCar, FaShoppingCart, FaHeadphonesAlt } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";


const Home = () => {
    return (
        <>
            <Navbar/>
            <section className="mt-24 text-center w-fit grid grid-cols-2">
                <div>
                    /* Carusel */
                </div>
                <article>
                    <h1 className="font-bold text-8xl text-center ">TOYOSA</h1>
                    <p className="text-left mx-5 my-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis similique nihil beatae porro aut ipsum repudiandae, earum, aliquid doloribus, explicabo sed voluptate sapiente! Temporibus incidunt voluptatem tempore sequi quas sed.
                        Blanditiis voluptate dolores nulla unde temporibus autem veniam quisquam, laborum asperiores culpa voluptas suscipit earum eveniet rerum numquam deserunt repellat. Commodi quae amet obcaecati voluptatem debitis et quisquam quo a.
                    </p>
                </article>
            </section>
            <section className="grid grid-cols-7 ">
                <article className="col-span-4 grid place-items-center"> 
                    <h1 className="text-4xl font-semibold text-center">Servicios y Ventas Automotrices</h1>
                    <p className="text-xl my-2">En Toyosa le ofrecemos:</p>
                    <CardImageText icon={FaCar} position="left" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ducimus corrupti, cumque est maxime nulla consectetur repudiandae porro libero! Velit est ullam nisi dolorum odio laborum cupiditate? Sequi, qui."/>
                    <CardImageText icon={HiMiniWrenchScrewdriver} position="right" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ducimus corrupti, cumque est maxime nulla consectetur repudiandae porro libero! Velit est ullam nisi dolorum odio laborum cupiditate? Sequi, qui."/>
                    <CardImageText icon={FaShoppingCart} position="left" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ducimus corrupti, cumque est maxime nulla consectetur repudiandae porro libero! Velit est ullam nisi dolorum odio laborum cupiditate? Sequi, qui."/>
                    <CardImageText icon={FaHeadphonesAlt} position="right" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ducimus corrupti, cumque est maxime nulla consectetur repudiandae porro libero! Velit est ullam nisi dolorum odio laborum cupiditate? Sequi, qui."/>
                </article>
                <div className="col-span-3 grid place-items-center">
                    <img src={img} alt="xD" className="h-5/6" />
                </div>
            </section>
            <Footer/>            
        </>
    )
}

export default Home;
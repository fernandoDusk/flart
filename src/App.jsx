import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Banner from "./components/Banner";
import Carousel from "./components/carousel";
import icon from "./assets/icon.png";

export default function App() {
  return (
    <>
    <main className="bg-[#757A66]">
      <section className="
      flex justify-center h-96 rounded-b-2xl
      bg-[url('./assets/bg.JPG')] bg-cover md:bg-center w-full
      ">
        <div className="absolute">
          <Banner />
        </div>
        <div className="flex justify-center items-end gap-4 mb-10 ">
          <a href="https://wa.me/5522974007815" target="_blank" rel="noopener noreferrer"
            className="
              border py-2 px-8 flex items-center gap-2
              shadow-2xl
              bg-[#47472D] text-white
              hover:bg-white hover:text-[#25D366]
              transition-colors duration-300"
          ><FaWhatsapp size={25} color="#25D366" />Whatsapp</a>
          <a href="https://www.instagram.com/luanaflart/" target="_blank" rel="noopener noreferrer" className="
            border py-2 px-8 flex items-center gap-2
            shadow-2xl
            bg-white/50 text-black
            hover:bg-white hover:text-[#E4405F]
            transition-colors duration-300"><FaInstagram size={25} color="#E4405F" />Instagram</a>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-6 h-full">
        <h1 className="text-2xl text-white flex gap-2"><span><img src={icon}/></span>Galeria<span><img src={icon}/></span></h1>
        <Carousel />
      </section>
    </main>
    </>
  )
}
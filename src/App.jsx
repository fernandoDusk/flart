import Banner from "./components/Banner";
import Carousel from "./components/carousel";

export default function App() {
  return (
    <>
    <main className="bg-green-950">
      <section className="
      flex justify-center h-96 rounded-b-2xl
      bg-[url('./assets/bg.JPG')] bg-cover md:bg-center w-full
      ">
        <Banner />
      </section>
      <section className="flex flex-col justify-center items-center p-6 h-full">
        <h1 className="text-2xl text-white">Galeria</h1>
        <Carousel />
      </section>
    </main>
    </>
  )
}
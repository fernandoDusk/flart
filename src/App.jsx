import Banner from "./components/Banner";

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
    </main>
    </>
  )
}
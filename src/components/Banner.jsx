export default function Banner() {
  return (
    <div className="relative bg-neutral-200/35 rounded-b-full p-2 h-60 flex flex-col items-center justify-center shadow-lg">
      <h1 className="text-6xl font-bold text-neutral-950 text-right leading-12 relative">
        agenda <br /> aberta
      </h1>
      <span className="absolute text-white text-3xl font-sans
       italic ml-18 mb-8 flex items-center shadow-2xl"><span className="text-5xl">A</span>gosto</span>
      <span className="text-lg p-2">Nova Friburgo</span>
    </div>
  )
}
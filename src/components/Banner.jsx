export default function Banner() {
  const month = new Date().toLocaleString("pt-Br", { month: "long" })
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  return (
    <div className="relative bg-neutral-200/35 rounded-b-full p-2 h-60 flex flex-col items-center justify-center shadow-lg">
      <h1 className="text-6xl font-bold text-neutral-950 text-right leading-12 relative">
        agenda <br /> aberta
      </h1>
      <span className="absolute text-white text-7xl font-qwitcher ml-18 mb-8 mr-8 flex items-center font-bold" style={{ fontFamily: "'Qwitcher Grypen', cursive" }}>{capitalizedMonth}</span>
      <span className="text-lg p-2">Nova Friburgo</span>
    </div>
  )
}
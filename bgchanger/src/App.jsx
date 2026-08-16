import { useState } from "react"


function App() {
  const [color, setColor] = useState("yellow")

  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center"style = {{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center gap-3 bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-lg">
      <button className="px-4 py-2 bg-red-500 text-white rounded-2xl" onClick={() => setColor("red")}>
        red
        </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl" onClick={() => setColor("blue")}>
        blue
        </button>
      <button className="px-4 py-2 bg-white text-black rounded-2xl"onClick={() => setColor("white")}>
        white
        </button>
      <button className="px-4 py-2 bg-black text-white rounded-2xl" onClick={() => setColor("black")}>
        black
        </button>
      <button className="px-4 py-2 bg-purple-300 text-black rounded-2xl" onClick={() => setColor("#E6E6FA")}>
        lavender
        </button>
      <button className="px-4 py-2 bg-orange-500 text-white rounded-2xl" onClick={() => setColor("orange")}>
        orange
        </button>

      </div>
    </div>
  )
}

export default App

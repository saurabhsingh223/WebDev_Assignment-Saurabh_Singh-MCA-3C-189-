import { useState } from "react"


function App() {
  const [color, setColor] = useState("#212121")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
     <h1 className="text-gray-300 text-4xl font-semibold flex items-center justify-center h-screen">
  Welcome to Color Park!
</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("#ec4899")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#ec4899"}}
          >Pink</button>
          <button
          onClick={() => setColor("#a855f7")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#a855f7"}}
          >Purple</button>
          <button
          onClick={() => setColor("#f97316")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#f97316"}}
          >Orange</button>
          <button
          onClick={() => setColor("#d946ef")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#d946ef"}}
          >Fuchisa</button>
          <button
          onClick={() => setColor("#10b981")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#10b981"}}
          >Emerald</button>
          <button
          onClick={() => setColor("#f43f5e")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#f43f5e"}}
          >Rose</button>
        </div>
      </div>
    </div>
  )
}

export default App
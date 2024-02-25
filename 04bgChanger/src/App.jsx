import { useState } from "react"


function App() {
  const [Color, setColor] = useState("skyBlue")

  return (
    <div>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: Color }}>
        <div className=" fixed flex flex-wrap  justify-center 
        bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 text-white  py-2 rounded-3xl" >
            <button onClick={() => setColor("red")}
              className="outline-none px-4 py-2 rounded-full "
              style={{ backgroundColor: "red" }}>
              red
            </button  >
            <button onClick={() => setColor("#FFFDD0")}
              className="outline-none text-black px-4 py-2 rounded-full "
              style={{ backgroundColor: "#FFFDD0" }}>
              CreameYellow
            </button>
            <button onClick={() => setColor("black")}

              className="outline-none px-4 py-2 rounded-full "
              style={{ backgroundColor: "black" }}>
              black
            </button>
            <button onClick={() => setColor("green")}

              className="outline-none px-4 py-2 rounded-full "
              style={{ backgroundColor: "green" }}>
              green
            </button>
            <button onClick={() => setColor("#FF4500")}

              className="outline-none px-4 py-2 rounded-full "
              style={{ backgroundColor: "#FF4500" }}>
              OrangeRed
            </button>




          </div>

        </div>
      </div>
    </div>
  )
}

export default App

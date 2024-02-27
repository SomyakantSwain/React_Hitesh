import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // use ref Hook
  const passwordref = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(char);
    }
    setPassword(pass)







  }, [length, numberAllowed, charAllowed, setPassword])



  const copytoClipboard = useCallback(() => {
    passwordref.current?.select();

    passwordref.current?.setSelectionRange(0, 20);

    window.navigator.clipboard.writeText(Password)



  }, [Password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
       bg-gray-500'>
        <h1 className=' text-white text-center  my-4
        '>Password Generator</h1>
        <div className='className=" flex shadow 
        rounded-lg overflow-hidden mb-4"'>

          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          />

          <button onClick={copytoClipboard}
            className='bg-blue-700 text-white px-4 py-0.5
          shrink-0 overflow-hidden 
        
          hover:bg-blue-600 active:bg-blue-700 focus:outline-double focus:ring focus:ring-blue-900 ...
          '>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1'>
            <input
              type="range"

              min={6}
              max={100}
              value={length}
              className='cursor-pointer' cc
              onChange={(e) => { setLength(e.target.value) }}
            />

            <label > length:{length}</label>
          </div>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Number</label>


          <input type="checkbox"
            defaultChecked={charAllowed}
            id="charinput"
            onChange={() => {
              setCharAllowed((e) => !e);
            }}
          />
          <label htmlFor="charinput">CharInput</label>
        </div>
      </div>

    </>
  )
}


export default App

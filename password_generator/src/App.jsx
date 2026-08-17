import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [password,setpassword] = useState("");


  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz"
    if (numberAllowed) str +="1234567890"
    if (charAllowed) str +="!@#$%^&*(){}~`_+-="

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed,setpassword])

  const copypasswordtoclpboard = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-600 text-center bg-gray-400'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passRef} />
      <button
      onClick={copypasswordtoclpboard}
      className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg
       hover:bg-blue-700 active:scale-95 transition cursor-pointer">copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={30}
        value={length}
         onChange={(e)=>setlength(e.target.value)}
         />
        <label>length : {length}</label>
      </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberinput" 
          onChange={()=>{
            setnumberAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor="numberinput">numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id="charinput" 
          onChange={()=>{
            setcharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor="charinput">characters</label>
        </div>

    </div>
   </div>
    </>
  )
}

export default App

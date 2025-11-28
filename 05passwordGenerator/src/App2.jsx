import React, { useCallback, useState } from "react";

const App2 = () => {
  const [length, setLength] = useState(8)
  const [numbers, setNumber] = useState(false)
  const [Characters, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str += "1234567890"
    if(Characters) str+= "!@#$%^&*()_-{}[]\:;?/"

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }

   setPassword(pass)

  }, [length, numbers, Characters, setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[])




  return (
    <>
      <div>
       <h1>Password Generator</h1>
       <div>
        <input type="password"
        value={password}
        placeholder="password" />

        <button>copy</button>
       </div>

       <div>
        
       </div>
      </div>
    </>
  );
};

export default App2;

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef: stores values without causing re-renders AND gives access to DOM elements.
  const passwordRef = useRef(null);



  // useCallback: memoizes a function so it is NOT recreated on every render.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  // copying the password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);


  // useEffect: runs side effects after render (API calls, timers, subscriptions, DOM updates).
// Dependency array [] controls when it runs:
// [] → run once on mount
// [deps] → run when deps change
// no deps → run after every render


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-red-500">
      <h1 className="text-white text-center my-3">PASSWORD GENERATOR</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-red-500 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;


/*
  📌 React Hooks Used in This App (Hinglish + Simple Notes)

  1) useState
     - Definition: Component ke andar data store karne ke liye use hota hai.
       Jab state change hota hai → component re-render hota hai.
     - Usage in this app:
       length, numberAllowed, charAllowed, password store karne ke liye.

  2) useRef
     - Definition: Aisi value store karta hai jo re-render par change nahi hoti,
       aur directly DOM element ko access karne ke kaam aata hai.
     - Usage in this app:
       password input ko select/copy karne ke liye (passwordRef).

  3) useCallback
     - Definition: Function ko memoize karta hai taaki har render par 
       woh function dobara na bane (performance improve hoti hai).
     - Usage in this app:
       passwordGenerator and copyPasswordToClipboard ko stable banane ke liye.

  4) useEffect
     - Definition: Render ke baad side effects chalane ke liye use hota hai
       (API calls, subscriptions, timers, DOM updates, etc.)
     - Usage in this app:
       Jab length, numberAllowed, charAllowed change ho → password auto-generate ho.
*/

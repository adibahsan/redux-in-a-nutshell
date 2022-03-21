import logo from './logo.svg';
import { useState, useRef,useEffect } from 'react';
import './App.css';
import BIRDS from 'vanta/dist/vanta.birds.min'


function App() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
  <>
  <div style={{height:800}} ref={myRef} >
  <h1 style = {{color: "white"}}> Foreground content goes here</h1>
  </div>
  </>
  );
}

export default App;

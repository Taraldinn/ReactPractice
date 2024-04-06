import Button from "./Component/Button"
import { useState } from 'react';
import PricingSection from "./Component/Princing";

function App() {
  const [show, setShow] = useState(false)
  return (
    <>


        <button className='' onClick={() => setShow(!show)}>
            Toggole Button 
        </button>
     <h1 className="text-3xl font-bold underline font-sans">
      Hello world!
    </h1>

    {show && <Button/>}

    <PricingSection/>
    </>
  )
}

export default App

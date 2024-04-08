import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from './Component/Home/Home';
import Blogs from './Pages/Blog';
import Contact from './Component/Contact/Contact';
import NoPage from './Pages/NoPage';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />}> */}
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App ;

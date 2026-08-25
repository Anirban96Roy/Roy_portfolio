import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


import Home from "./components/Home/Home";
import About from "./components/About/About";
import Research from "./components/Research/Research";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Awards from "./components/Awards/Award";
import Contact from "./components/Contact/Contact";





function ScrollToTop(){


const {pathname}=useLocation();


useEffect(()=>{


window.scrollTo({

top:0,

left:0,

behavior:"smooth"

});


},[pathname]);



return null;


}







function App(){


return(


<div

className="
bg-[#020617]
text-white
min-h-screen
"

>


<ScrollToTop/>


<Navbar/>


<main>


<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/about" element={<About/>}/>


<Route path="/research" element={<Research/>}/>


<Route path="/projects" element={<Projects/>}/>


<Route path="/skills" element={<Skills/>}/>


<Route path="/education" element={<Education/>}/>


<Route path="/awards" element={<Awards/>}/>


<Route path="/contact" element={<Contact/>}/>



</Routes>


</main>



<Footer/>


</div>


);


}


export default App;
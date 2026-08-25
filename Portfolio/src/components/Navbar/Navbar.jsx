import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar = () => {


const [isOpen,setIsOpen] = useState(false);

const [isScrolled,setIsScrolled] = useState(false);





useEffect(()=>{


const handleScroll=()=>{

setIsScrolled(window.scrollY > 40);

};


window.addEventListener(
"scroll",
handleScroll
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);






const menuItems=[


{
path:"/",
label:"Home"
},


{
path:"/about",
label:"About"
},


{
path:"/research",
label:"Research"
},


{
path:"/projects",
label:"Projects"
},


{
path:"/skills",
label:"Skills"
},


{
path:"/education",
label:"Education"
},


{
path:"/awards",
label:"Awards"
},


{
path:"/contact",
label:"Contact"
}



];







const handleNavigation=()=>{


setIsOpen(false);


window.scrollTo({

top:0,

left:0,

behavior:"smooth"

});


};







return(



<nav


className={`

fixed

top-0

left-0

w-full

z-50

transition-all

duration-300


${

isScrolled

?

"bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800"

:

"bg-[#020617]/40 backdrop-blur-md"

}


`}



>



<div


className="

max-w-7xl

mx-auto


px-5

sm:px-8

lg:px-12


py-4

sm:py-5


flex

justify-between

items-center


"

>







{/* LOGO */}



<Link


to="/"

onClick={handleNavigation}


className="

cursor-pointer

font-bold


text-lg

sm:text-xl

md:text-2xl


whitespace-nowrap

"

>



<span className="text-cyan-400">

&lt;

</span>



<span className="text-white">

Anirban Roy

</span>



<span className="text-cyan-400">

/&gt;

</span>



</Link>










{/* DESKTOP MENU */}



<ul


className="

hidden

lg:flex


items-center


gap-6

xl:gap-8


text-slate-300

font-medium

"

>



{

menuItems.map((item)=>(


<li

key={item.path}

>


<Link


to={item.path}


onClick={handleNavigation}


className="

hover:text-cyan-400

transition

duration-300

"

>


{item.label}


</Link>


</li>



))


}



</ul>












{/* MOBILE MENU BUTTON */}



<div

className="

lg:hidden

"

>


{


isOpen


?


<FiX

size={30}

className="

text-cyan-400

cursor-pointer

"

onClick={()=>setIsOpen(false)}

/>


:


<FiMenu

size={30}

className="

text-cyan-400

cursor-pointer

"

onClick={()=>setIsOpen(true)}

/>



}




</div>





</div>












{/* MOBILE MENU */}



<div


className={`


lg:hidden


overflow-hidden


transition-all

duration-300



${

isOpen

?

"max-h-screen opacity-100"

:

"max-h-0 opacity-0"

}


`}



>


<div


className="

bg-[#020617]

border-t

border-slate-800

shadow-xl

"


>



<ul


className="

flex

flex-col


items-center


gap-6


py-8


text-slate-300


font-medium

"

>


{


menuItems.map((item)=>(


<li


key={item.path}


>


<Link


to={item.path}


onClick={handleNavigation}


className="

text-lg

hover:text-cyan-400

transition

"

>


{item.label}


</Link>


</li>



))


}




</ul>



</div>


</div>






</nav>



);


};



export default Navbar;
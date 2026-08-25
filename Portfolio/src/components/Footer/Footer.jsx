import React from "react";
import {
Github,
Linkedin,
Mail,
ArrowUpRight
} from "lucide-react";


const Footer = () => {


return (


<footer

className="
relative

bg-[#020617]

border-t

border-slate-800

text-white

mt-16

overflow-hidden

"

>



{/* Background Glow */}

<div

className="
absolute

top-0

left-1/2

-translate-x-1/2

w-[300px]

h-[150px]

md:w-[600px]

md:h-[200px]

bg-cyan-400/10

blur-3xl

rounded-full

"

/>







<div

className="
relative

max-w-7xl

mx-auto

px-5

md:px-12

py-12

md:py-14

grid

grid-cols-1

md:grid-cols-3

gap-10

md:gap-12

"

>









{/* PROFILE */}



<div

className="
text-center

md:text-left

"

>


<h2

className="
text-3xl

font-bold

"

>


<span className="text-cyan-400">

&lt;

</span>


Anirban Roy


<span className="text-cyan-400">

/&gt;

</span>


</h2>







<p

className="
mt-5

text-slate-300

leading-relaxed

"

>

Artificial Intelligence Researcher |

Computer Science Engineer

</p>






<p

className="
mt-4

text-slate-500

leading-relaxed

text-sm

"

>

Building intelligent systems through
Artificial Intelligence, Machine Learning,
Computer Vision, and Human-Centered AI.

</p>








<div

className="
mt-6

inline-flex

items-center

px-4

py-2

rounded-full

bg-cyan-400/10

border

border-cyan-400/30

text-cyan-400

text-sm

"

>


● Available for Research Collaboration


</div>





</div>












{/* QUICK LINKS */}


<div

className="
text-center

md:text-left

"

>


<h3

className="
text-xl

font-semibold

mb-6

"

>

Explore

</h3>





<ul

className="

flex

flex-row

flex-wrap

justify-center

md:justify-start

gap-x-6

gap-y-3

text-slate-400

"

>



{

[

["About","/Roy_portfolio/about"],

["Research","/Roy_portfolio/research"],

["Projects","/Roy_portfolio/projects"],

["Contact","/Roy_portfolio/contact"]

].map(([name,link])=>(



<li

key={name}

className="
text-sm
md:text-base
"

>



<a


href={link}


className="

flex

items-center

gap-2

hover:text-cyan-400

transition

group

"

>


{name}



<ArrowUpRight

size={15}

className="

opacity-0

group-hover:opacity-100

transition

"

/>



</a>



</li>



))


}





</ul>





</div>










{/* CONNECT */}



<div

className="
text-center

md:text-left

"

>


<h3

className="
text-xl

font-semibold

mb-6

"

>

Connect

</h3>







<p

className="
text-slate-400

text-sm

mb-6

max-w-sm

mx-auto

md:mx-0

"

>

Let's discuss AI research,
software projects, and innovative ideas.

</p>







<div

className="
flex

justify-center

md:justify-start

gap-4

"

>






<a

href="https://github.com/Anirban96Roy/"

target="_blank"

rel="noopener noreferrer"

className="
w-12

h-12

md:w-14

md:h-14

rounded-2xl

bg-slate-900

border

border-slate-800

flex

items-center

justify-center

hover:border-cyan-400

hover:text-cyan-400

hover:-translate-y-1

transition

"

>

<Github size={22}/>

</a>








<a

href="https://www.linkedin.com/in/anirban-roy007/"

target="_blank"

rel="noopener noreferrer"

className="
w-12

h-12

md:w-14

md:h-14

rounded-2xl

bg-slate-900

border

border-slate-800

flex

items-center

justify-center

hover:border-cyan-400

hover:text-cyan-400

hover:-translate-y-1

transition

"

>

<Linkedin size={22}/>

</a>








<a

href="mailto:royanirban347@gmail.com"

className="
w-12

h-12

md:w-14

md:h-14

rounded-2xl

bg-slate-900

border

border-slate-800

flex

items-center

justify-center

hover:border-cyan-400

hover:text-cyan-400

hover:-translate-y-1

transition

"

>

<Mail size={22}/>

</a>





</div>







<div

className="
mt-7

text-sm

text-slate-500

"

>


Based in Khulna, Bangladesh 🇧🇩


</div>







</div>









</div>









{/* COPYRIGHT */}



<div

className="
relative

border-t

border-slate-800

py-5

px-5

text-center

text-xs

md:text-sm

text-slate-500

"

>


© {new Date().getFullYear()} Anirban Roy.

<br className="md:hidden"/>

<span className="hidden md:inline">

&nbsp;

</span>

All rights reserved.


</div>







</footer>


)

}


export default Footer;
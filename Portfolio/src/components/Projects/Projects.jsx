import React,{useState} from "react";
import {projects} from "../../constants";
import {Github,ExternalLink} from "lucide-react";


const Projects=()=>{


const [selectedProject,setSelectedProject]=useState(null);



return(

<section

id="projects"

className="
relative
py-20
md:py-24
px-5
sm:px-8
md:px-12
bg-[#020617]
"

>


<div

className="
max-w-6xl
mx-auto
"

>


{/* HEADER */}

<div

className="
text-center
mb-12
md:mb-16
"

>


<h2

className="
text-3xl
sm:text-4xl
font-bold
text-white
"

>

Projects

</h2>


<div

className="
w-20
h-1
bg-cyan-400
mx-auto
mt-5
rounded-full
"

/>


<p

className="
mt-5
text-sm
sm:text-base
md:text-lg
text-slate-400
"

>

AI systems, software solutions, and intelligent engineering projects.

</p>


</div>








{/* PROJECT GRID */}


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
md:gap-8
"

>


{

projects.map((project)=>(


<div

key={project.id}

className="
cursor-pointer
bg-slate-900/70
border
border-slate-800
rounded-2xl
overflow-hidden
hover:border-cyan-400/50
hover:-translate-y-2
hover:shadow-xl
hover:shadow-cyan-400/10
transition
duration-300
"

onClick={()=>setSelectedProject(project)}

>



{/* IMAGE */}


<div

className="
h-48
sm:h-52
overflow-hidden
bg-slate-800
"

>


<img

src={project.image}

alt={project.title}

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-500
"

/>


</div>







{/* CONTENT */}


<div

className="
p-5
md:p-6
"

>


<h3

className="
text-lg
md:text-xl
font-bold
text-white
mb-3
"

>

{project.title}

</h3>





<p

className="
text-slate-400
text-sm
leading-relaxed
line-clamp-3
"

>

{project.description}

</p>







{/* TAGS */}


<div

className="
flex
flex-wrap
gap-2
mt-5
"

>


{

project.tags.map((tag,index)=>(


<span

key={index}

className="
px-3
py-1
rounded-full
bg-cyan-400/10
border
border-cyan-400/20
text-cyan-400
text-xs
"

>

{tag}

</span>


))

}


</div>







{/* GITHUB BUTTON */}


<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

onClick={(e)=>e.stopPropagation()}

className="
mt-6
inline-flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-cyan-400
text-black
text-sm
font-semibold
hover:bg-cyan-300
transition
"

>


<Github size={16}/>

GitHub


</a>





</div>





</div>


))


}


</div>









{/* MODAL */}


{

selectedProject && (


<div

className="
fixed
inset-0
z-50
bg-black/80
backdrop-blur-sm
flex
items-center
justify-center
p-4
"

onClick={()=>setSelectedProject(null)}

>


<div

className="
w-full
max-w-4xl
max-h-[90vh]
overflow-y-auto
bg-slate-900
rounded-2xl
border
border-slate-700
"

onClick={(e)=>e.stopPropagation()}

>



<img

src={selectedProject.image}

alt={selectedProject.title}

className="
w-full
h-52
sm:h-72
object-cover
"

/>





<div

className="
p-6
md:p-8
"

>


<button

onClick={()=>setSelectedProject(null)}

className="
float-right
text-3xl
text-slate-300
hover:text-white
"

>

×

</button>





<h2

className="
text-2xl
md:text-3xl
font-bold
text-white
mb-5
"

>

{selectedProject.title}

</h2>






<p

className="
text-slate-300
leading-relaxed
"

>

{selectedProject.description}

</p>







<div

className="
flex
flex-wrap
gap-3
mt-6
"

>


{

selectedProject.tags.map((tag,index)=>(


<span

key={index}

className="
px-3
py-1
rounded-full
bg-cyan-400/10
text-cyan-400
text-sm
"

>

{tag}

</span>


))


}


</div>







<a

href={selectedProject.github}

target="_blank"

rel="noopener noreferrer"

className="
mt-8
inline-flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-cyan-400
text-black
font-semibold
hover:bg-cyan-300
transition
"

>


<Github size={18}/>

View GitHub Repository


<ExternalLink size={16}/>


</a>





</div>



</div>



</div>


)


}




</div>


</section>


)


}


export default Projects;
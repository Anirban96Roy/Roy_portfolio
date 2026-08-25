import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";


const Skills = () => {


return (

<section

id="skills"

className="
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
mb-10
md:mb-14
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

Technical Skills

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
leading-relaxed
"

>

Technologies and tools developed through research,
software engineering, and AI projects.

</p>



</div>









{/* SKILL CATEGORIES */}


<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
md:gap-8
"

>


{


SkillsInfo.map(category=>(


<Tilt

key={category.title}

tiltMaxAngleX={8}

tiltMaxAngleY={8}

perspective={1000}

scale={1.02}

>


<div

className="
relative
bg-slate-900/70
border
border-slate-800
rounded-3xl
p-5
sm:p-6
md:p-8
overflow-hidden
hover:border-cyan-400/50
transition
"

>





{/* Glow */}


<div

className="
absolute
right-0
top-0
w-32
h-32
sm:w-40
sm:h-40
bg-cyan-400/10
blur-3xl
rounded-full
"

></div>










<h3

className="
relative
text-xl
sm:text-2xl
font-bold
text-white
text-center
mb-6
md:mb-8
"

>

{category.title}

</h3>









<div

className="
relative
grid
grid-cols-2
sm:grid-cols-3
gap-3
sm:gap-5
"

>


{


category.skills.map(skill=>(


<div

key={skill.name}

className="
group
bg-[#111c32]
border
border-slate-700
rounded-2xl
p-3
sm:p-4
md:p-5
flex
flex-col
items-center
justify-center
gap-2
sm:gap-3
hover:bg-cyan-400/10
hover:border-cyan-400/50
hover:-translate-y-2
transition-all
duration-300
"

>








{/* ICON BOX */}


<div

className="
w-12
h-12
sm:w-14
sm:h-14
md:w-16
md:h-16
rounded-xl
sm:rounded-2xl
bg-[#0b162b]
border
border-slate-700
flex
items-center
justify-center
shadow-lg
group-hover:shadow-cyan-400/30
transition
"

>


{


typeof skill.logo==="string"

?

<img

src={skill.logo}

alt={skill.name}

className="
w-7
h-7
sm:w-8
sm:h-8
md:w-10
md:h-10
object-contain
group-hover:scale-110
transition
duration-300
"

/>


:


<skill.logo

className="
w-7
h-7
sm:w-8
sm:h-8
md:w-10
md:h-10
text-white
group-hover:scale-110
transition
duration-300
"

/>


}



</div>









<span

className="
text-xs
sm:text-sm
font-semibold
text-center
text-slate-300
group-hover:text-cyan-300
transition
"

>

{skill.name}

</span>





</div>


))


}



</div>








</div>


</Tilt>


))


}



</div>






</div>


</section>


)

}


export default Skills;
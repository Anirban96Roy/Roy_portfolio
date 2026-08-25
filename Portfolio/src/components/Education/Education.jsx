import React, { useRef } from "react";
import { education } from "../../constants";
import {
motion,
useScroll,
useSpring,
useTransform
} from "framer-motion";



const MovingPin = () => {


return (

<div

className="
text-3xl
drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]
"

>

📍

</div>


)

}





const Education = () => {


const sectionRef = useRef(null);



const {
scrollYProgress
} = useScroll({

target:sectionRef,

offset:[
"start center",
"end center"
]

});



const smoothProgress = useSpring(

scrollYProgress,

{
stiffness:80,
damping:25
}

);



const pinPosition = useTransform(

smoothProgress,

[0,1],

["0%","92%"]

);







return (

<section

ref={sectionRef}

id="education"

className="
bg-[#020617]

pt-32
md:py-24

px-5
md:px-12

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

mb-14
md:mb-20

"

>


<h2

className="
text-3xl
md:text-4xl

font-bold

text-white

"

>

Education Journey

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

text-slate-400

text-sm
md:text-lg

"

>

A journey from academic foundation to Computer Science and Engineering.

</p>




</div>









{/* TIMELINE CONTAINER */}



<div

className="
relative

"

>





{/* ROAD LINE */}


<div

className="
absolute

left-6

md:left-1/2

top-0

bottom-0

w-[3px]

bg-gradient-to-b

from-cyan-400

via-blue-500

to-purple-500

md:-translate-x-1/2

"

>



</div>









{/* MOVING PIN */}



<motion.div


style={{
top:pinPosition
}}


className="
absolute

left-6

md:left-1/2

-translate-x-1/2

z-40

"


>


<MovingPin/>


</motion.div>









{

education.map((edu,index)=>(



<div


key={edu.id}


className="
relative

flex

items-start

mb-24

md:mb-40

"



>









{/* STATION */}



<div

className="
absolute

left-6

md:left-1/2

-translate-x-1/2

z-20

w-14
h-14

md:w-16
md:h-16

rounded-full

bg-slate-950

border-4

border-cyan-400

shadow-[0_0_30px_rgba(34,211,238,.8)]

flex

items-center

justify-center

"


>


<img

src={edu.img}

alt={edu.school}

className="
w-9
h-9

md:w-11
md:h-11

rounded-full

object-cover

"

/>


</div>









{/* CARD */}




<div


className={`


ml-20

md:ml-0


w-[calc(100%-5rem)]

md:w-[45%]


bg-slate-900/80

border

border-slate-800

rounded-3xl


p-5
md:p-7


backdrop-blur-md


hover:border-cyan-400/50


hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]


transition-all



${

index%2===0

?

"md:mr-auto"

:

"md:ml-auto"

}


`}


>









<div

className="
flex

gap-4

items-center

mb-5

"

>



<img

src={edu.img}

alt=""

className="
w-14
h-14

md:w-16
md:h-16

rounded-xl

object-cover

"

/>





<div>


<h3

className="
text-lg

md:text-xl

font-bold

text-white

"

>

{edu.degree}

</h3>




<p

className="
text-cyan-400

text-xs
md:text-sm

"

>

{edu.school}

</p>





<p

className="
text-slate-400

text-xs
md:text-sm

"

>

{edu.date}

</p>




</div>





</div>









<span

className="
inline-flex

px-4

py-1

rounded-full


bg-cyan-400/10


border

border-cyan-400/30


text-cyan-400


text-xs
md:text-sm

"

>


{edu.grade}


</span>








<p

className="
mt-5

text-slate-300

leading-relaxed

text-sm
md:text-base

"

>

{edu.desc}

</p>








</div>









</div>



))


}





</div>







</div>


</section>


)

}



export default Education;
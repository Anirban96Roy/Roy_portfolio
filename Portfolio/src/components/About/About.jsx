import React from "react";
import profileImage from "../../assets/anirban_project/a.jpg";


const About = () => {


return (

<section

id="about"

className="
w-full
scroll-mt-24
bg-[#010817]
pt-28
md:pt-20
pb-16
px-6
md:px-12
"

>


<div

className="
max-w-[1100px]
mx-auto
rounded-3xl
overflow-hidden
border
border-slate-800
bg-[#071426]
shadow-2xl
"

>


<div

className="
flex
flex-col
md:flex-row
h-auto
md:h-[620px]
"

>





{/* LEFT CONTENT */}

<div

className="
md:w-[58%]
p-10
md:p-12
flex
flex-col
justify-center
"

>


<h2

className="
text-4xl
md:text-5xl
font-bold
text-white
mb-8
"

>

About Me

</h2>







<p

className="
text-slate-300
leading-relaxed
text-base
md:text-lg
mb-7
text-justify
"

>

I am Anirban Roy, a Computer Science and Engineering
graduate from Khulna University of Engineering & Technology
(KUET), passionate about developing intelligent systems
that solve real-world problems through Artificial Intelligence
and advanced computing technologies.

</p>







<p

className="
text-slate-300
leading-relaxed
text-base
md:text-lg
mb-7
text-justify
"

>

My research interests focus on Artificial Intelligence,
Machine Learning, Deep Learning, Computer Vision,
Large Language Models, Robotics, and Autonomous Systems.
I aim to design reliable and human-centered AI solutions
that connect advanced research with practical applications.

</p>







<p

className="
text-slate-300
leading-relaxed
text-base
md:text-lg
text-justify
"

>

Beyond research and technology, I enjoy travelling,
playing chess on online platforms, and exploring different
food cultures. These experiences continuously inspire my
curiosity, creativity, and perspective toward innovation.

</p>



</div>









{/* RIGHT IMAGE */}

<div

className="
md:w-[42%]
h-[450px]
md:h-[620px]
bg-[#06101f]
overflow-hidden
"

>


<img

src={profileImage}

alt="Anirban Roy"

className="
w-full
h-full
object-cover
object-center
"

 />



</div>









</div>


</div>


</section>


)

}


export default About;
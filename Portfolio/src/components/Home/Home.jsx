import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImage from "./anirban.png";


const Home = () => {


return (

<section

id="home"

className="
relative
min-h-screen
flex
items-center
overflow-hidden
bg-[#010817]
px-6
sm:px-8
md:px-12
lg:px-[8vw]
pt-28
pb-16
"

>


{/* Neural Background */}

<div

className="
absolute
right-[-120px]
bottom-0

w-[90%]
h-[45%]

sm:w-[70%]
sm:h-[55%]

md:w-[55%]
md:h-[65%]

opacity-20
md:opacity-40

pointer-events-none

"

>


<svg

viewBox="0 0 900 600"

className="
w-full
h-full
"

>


<g

stroke="#22d3ee"

strokeWidth="1.5"

fill="none"

opacity="0.5"

>


<path d="M40 520 C170 400 250 450 350 360 S560 230 700 260 S820 160 880 90"/>

<path d="M100 560 C230 500 300 420 420 430 S600 500 760 330"/>

<path d="M350 360 L450 250"/>

<path d="M450 250 L600 330"/>

<path d="M600 330 L760 330"/>

<path d="M700 260 L820 190"/>

<path d="M820 190 L880 90"/>


</g>



<g fill="#22d3ee">


<circle cx="40" cy="520" r="6"/>

<circle cx="100" cy="560" r="5"/>

<circle cx="350" cy="360" r="7"/>

<circle cx="450" cy="250" r="7"/>

<circle cx="600" cy="330" r="7"/>

<circle cx="700" cy="260" r="6"/>

<circle cx="760" cy="330" r="6"/>

<circle cx="820" cy="190" r="5"/>

<circle cx="880" cy="90" r="9"/>


</g>


</svg>


</div>








<div

className="
relative
z-10

w-full
max-w-7xl
mx-auto

grid

grid-cols-1

md:grid-cols-[60%_40%]

items-center

gap-12

"

>





{/* LEFT CONTENT */}


<div

className="
text-center
md:text-left
"

>



<h1

className="
text-white
font-bold

text-5xl

sm:text-6xl

md:text-7xl

tracking-tight

"

>

Anirban Roy

</h1>






<h2

className="
mt-4

text-2xl

sm:text-3xl

md:text-5xl

font-bold

text-cyan-400

"

>

Artificial Intelligence Researcher

</h2>






<h3

className="
mt-5

text-lg

sm:text-xl

md:text-2xl

text-slate-300

"

>


Research Areas:

{" "}


<span

className="
text-cyan-400
font-semibold
"

>


<Typewriter

words={[

"Machine Learning",

"Deep Learning",

"Reinforcement Learning",

"Human-Centered AI",

"Computer Vision",

"Large Language Models",

"Robotics",

"Autonomous Systems"

]}


loop={0}

cursor

cursorStyle="|"

typeSpeed={70}

deleteSpeed={40}

delaySpeed={1200}

/>


</span>


</h3>







<p

className="
mt-7

max-w-4xl

text-base

sm:text-lg

leading-relaxed

text-slate-400

text-justify

"

>

Exploring intelligent systems at the intersection of Artificial
Intelligence, Machine Learning, and Human-Centered Computing.
My research focuses on developing reliable AI systems through
deep learning, computer vision, large language models,
reinforcement learning, robotics, and autonomous intelligent agents.

</p>









{/* BUTTONS */}


<div

className="
mt-8

flex

flex-col

sm:flex-row

justify-center

md:justify-start

gap-4

"

>









<a

href="https://github.com/Anirban96Roy/"

target="_blank"

rel="noreferrer"

className="
w-full
sm:w-auto

px-6

py-3

rounded-lg

bg-cyan-400

text-black

font-semibold

flex

justify-center

items-center

gap-2

"

>

<FaGithub/>

GitHub

</a>








<a

href="https://www.linkedin.com/in/anirban-roy96"

target="_blank"

rel="noreferrer"

className="
w-full
sm:w-auto

px-6

py-3

rounded-lg

bg-cyan-400

text-black

font-semibold

flex

justify-center

items-center

gap-2

"

>


<FaLinkedin/>

LinkedIn


</a>







<a

href="https://www.researchgate.net/profile/Anirban-Roy-55"

target="_blank"

rel="noreferrer"

className="
w-full
sm:w-auto

text-center

px-6

py-3

rounded-lg

bg-cyan-400

text-black

font-semibold

"

>

ResearchGate

</a>



</div>



</div>









{/* IMAGE */}



<div

className="
flex

justify-center

items-center

md:translate-y-4

"

>


<div

className="

relative

w-[260px]

h-[260px]


sm:w-[320px]

sm:h-[320px]


md:w-[390px]

md:h-[390px]


rounded-full

overflow-hidden

border-2

border-cyan-400/40

shadow-2xl

shadow-cyan-500/30

"

>


<img

src={profileImage}

alt="Anirban Roy"

className="
w-full

h-full

object-cover

object-top

"

/>


</div>


</div>






</div>



</section>


);


};


export default Home;
import React,{useRef,useState} from "react";
import emailjs from "@emailjs/browser";
import {
Mail,
Phone,
MapPin,
Github,
Linkedin,
Send
} from "lucide-react";


const Contact=()=>{


const form=useRef();

const [sent,setSent]=useState(false);



const sendEmail=(e)=>{

e.preventDefault();


emailjs.sendForm(

"service_4r1txjq",

"template_bfpzn0g",

form.current,

"Qm3SERqzbNTzWlLHK"

)

.then(()=>{

setSent(true);

form.current.reset();


setTimeout(()=>{

setSent(false)

},4000)

});


};





return(


<section

id="contact"

className="
relative
pt-32
md:py-24
px-5
md:px-12
bg-[#020617]
overflow-hidden
"

>



{/* BACKGROUND EFFECT */}


<div

className="
absolute

w-[250px]
h-[250px]

md:w-[500px]
md:h-[500px]

bg-cyan-400/10

blur-3xl

rounded-full

top-10
left-[-80px]

md:top-0
md:left-0

"

/>



<div

className="
absolute

w-[220px]
h-[220px]

md:w-[400px]
md:h-[400px]

bg-blue-500/10

blur-3xl

rounded-full

bottom-0
right-[-60px]

md:right-0

"

/>






<div

className="
relative

max-w-6xl

mx-auto

bg-[#071426]/80

backdrop-blur-xl

border

border-slate-800

rounded-3xl

overflow-hidden

shadow-2xl

"


>



<div

className="
grid

grid-cols-1

md:grid-cols-2

"

>







{/* LEFT SIDE */}



<div

className="
p-6
sm:p-8
md:p-14

"

>



<p

className="
text-cyan-400

font-semibold

tracking-wider

mb-4

text-sm

"

>

GET IN TOUCH

</p>





<h2

className="
text-3xl

sm:text-4xl

md:text-5xl

font-bold

text-white

leading-tight

"

>

Let's Build Something

<br className="hidden md:block"/>

Intelligent Together

</h2>







<p

className="
mt-6

text-slate-400

leading-relaxed

text-sm

md:text-base

"

>

Interested in AI research, machine learning,
computer vision, robotics, or innovative software
projects? Feel free to reach out for collaboration,
discussion, or opportunities.

</p>







{/* CONTACT CARDS */}



<div

className="
mt-8

md:mt-10

space-y-4

"

>




<div

className="
flex

items-center

gap-4

p-4

rounded-2xl

bg-slate-900/60

border

border-slate-800

hover:border-cyan-400/40

transition

"

>


<Mail

className="
text-cyan-400

shrink-0

"

/>



<div>


<p

className="
text-white

font-semibold

"

>

Email

</p>



<p

className="
text-slate-400

text-sm

break-all

"

>

royanirban347@gmail.com

</p>



</div>


</div>







<div

className="
flex

items-center

gap-4

p-4

rounded-2xl

bg-slate-900/60

border

border-slate-800

hover:border-cyan-400/40

transition

"

>


<Phone

className="
text-cyan-400

shrink-0

"

/>




<div>


<p

className="
text-white

font-semibold

"

>

Phone

</p>



<p

className="
text-slate-400

text-sm

"

>

+8801632346677

</p>


</div>


</div>







<div

className="
flex

items-center

gap-4

p-4

rounded-2xl

bg-slate-900/60

border

border-slate-800

hover:border-cyan-400/40

transition

"

>


<MapPin

className="
text-cyan-400

shrink-0

"

/>




<div>


<p

className="
text-white

font-semibold

"

>

Location

</p>




<p

className="
text-slate-400

text-sm

"

>

Khulna, Bangladesh

</p>



</div>



</div>






</div>









{/* SOCIAL */}



<div

className="
flex

gap-4

mt-8

"

>


<a

href="https://github.com/Anirban96Roy/"

target="_blank"

rel="noreferrer"

className="
p-3

rounded-xl

bg-slate-800

text-white

hover:bg-cyan-400

hover:text-black

transition

"

>

<Github size={20}/>

</a>




<a

href="https://www.linkedin.com/in/anirban-roy007/"

target="_blank"

rel="noreferrer"

className="
p-3

rounded-xl

bg-slate-800

text-white

hover:bg-cyan-400

hover:text-black

transition

"

>

<Linkedin size={20}/>

</a>



</div>






</div>









{/* FORM SIDE */}




<div

className="
p-6

sm:p-8

md:p-14

border-t

md:border-t-0

md:border-l

border-slate-800

"

>




<form

ref={form}

onSubmit={sendEmail}

className="
space-y-5

"

>



<input

required

name="user_name"

placeholder="Your Name"

className="
w-full

px-5

py-4

rounded-xl

bg-slate-900

border

border-slate-700

text-white

outline-none

focus:border-cyan-400

transition

"

/>






<input

required

name="user_email"

placeholder="Your Email"

className="
w-full

px-5

py-4

rounded-xl

bg-slate-900

border

border-slate-700

text-white

outline-none

focus:border-cyan-400

transition

"

/>






<textarea

required

name="message"

rows="6"

placeholder="Tell me about your project..."

className="
w-full

px-5

py-4

rounded-xl

bg-slate-900

border

border-slate-700

text-white

outline-none

focus:border-cyan-400

transition

"

/>







<button

className="
group

flex

items-center

justify-center

gap-3

w-full

py-4

rounded-xl

bg-cyan-400

text-black

font-bold

hover:bg-cyan-300

transition

"

>


Send Message


<Send

size={18}

className="
group-hover:translate-x-1

transition

"

/>


</button>







{

sent &&

<div

className="
text-center

text-cyan-400

font-semibold

animate-pulse

"

>

✓ Message sent successfully!

</div>


}



</form>





</div>








</div>



</div>



</section>


)


}


export default Contact;
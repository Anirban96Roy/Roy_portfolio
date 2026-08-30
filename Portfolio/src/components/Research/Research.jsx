import React, { useState } from "react";


const researchInterests = [

"Artificial Intelligence",
"Machine Learning",
"Deep Learning",
"Computer Vision",
"Large Language Models",
"Human-Centered AI",
"Reinforcement Learning",
"Robotics",
"Autonomous Systems",
"Healthcare AI"

];







const publications = [


{

title:
"WaveGuard: A Flood Monitoring and Rescue System",

authors:
"A. N. Likhan, A. Roy, M. S. Salim, S. I. Hossain",

venue:
"SoftwareX (Elsevier), Vol. 32, 2025, Article 102361",

status:
"Published",

description:
"An AI-powered flood monitoring and rescue coordination system integrating natural language processing, geospatial analytics, and intelligent decision support for efficient disaster response.",

doi:
"DOI: 10.1016/j.softx.2025.102361"

},



{

title:
"A YOLO–TrOCR Pipeline with Dictionary Refinement for Handwritten Medicine Name Extraction",

authors:
"A. Roy, D. Saha, S. Debnath",

venue:
"1st International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE, 2026",

status:
"Accepted & Presented",

description:
"A document intelligence framework combining YOLO-based region detection, TrOCR-based text recognition, and dictionary refinement for accurate handwritten medicine name extraction.",

doi:
"DOI: 10.1109/PECCII70991.2026.11662060"

}


];








const ongoingResearch = [


{

type:
"Undergraduate Thesis",

title:
"A Self-Supervised Feature Fusion and Ensemble Framework for Skin Lesion Classification",

description:
"Developed an eight-class skin lesion classification framework using Rotation and SimCLR self-supervised learning, feature fusion, and ensemble strategies. Evaluated class-balanced performance and cross-dataset generalization on ISIC 2019 and PAD-UFES-20.",

keywords:[

"Self-Supervised Learning",
"Computer Vision",
"Medical AI",
"Ensemble Learning"

]

},




{

type:
"Submitted Conference Work",

title:
"A Quantitative Explainable AI Framework for Maternal Health Risk Prediction",

description:
"Developed an explainable machine learning framework for maternal health risk prediction using SHAP-based explainability and quantitative reliability analysis with reinforcement learning-based adaptive decision support across pregnancy stages.",

keywords:[

"Explainable AI",
"Healthcare AI",
"SHAP",
"Reinforcement Learning"

]

},






{

type:
"Ongoing Personal Robotics Project",

title:
"SPIDERONE X1: Spider-Inspired Compact Aerial Robot",

description:
"Developing a compact aerial robotic platform exploring ESP32-based embedded control, IMU and sensor integration, motor control, lightweight mechanical design, stabilization, and future autonomous operation.",

keywords:[

"Robotics",
"Embedded Systems",
"Autonomous Systems",
"Sensor Fusion"

]

},






{

type:
"Ongoing Research",

title:
"Emotion-Aware Adaptive Response Selection for Healthcare Companion Systems",

description:
"Exploring deep learning and reinforcement learning approaches for adaptive response selection in healthcare companion systems, focusing on facial emotion recognition, patient-support decision-making, feedback-based reward design, and future human-centered robotic integration.",

keywords:[

"Deep Learning",
"Reinforcement Learning",
"Emotion Recognition",
"Human-Centered AI"

]

},
{

type:
"Ongoing Research Project",

title:
"CogniDrive: Multimodal Machine Learning Framework for Driver Cognitive Readiness Assessment in Conditionally Automated Vehicles",

description:
"Developing a machine learning framework to assess driver readiness during automated vehicle takeover using driving behaviour and physiological signals. Exploring reaction time, steering variation, speed changes, and heart-rate-related metrics with Random Forest, XGBoost, and LSTM models for safe human–machine interaction.",

keywords:[

"Autonomous Vehicles",
"Human-Machine Interaction",
"LSTM",
"Multimodal Learning"

]

}


];








const Research =()=>{


const [selectedItem,setSelectedItem] = useState(null);



return(


<section

id="research"

className="
scroll-mt-24
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

Research & Publications

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
md:mt-6
text-sm
sm:text-base
md:text-lg
text-slate-400
leading-relaxed
"

>

Exploring intelligent systems through Artificial Intelligence,
Machine Learning, Computer Vision, and Human-Centered AI.

</p>




</div>








{/* RESEARCH INTEREST */}


<div

className="
bg-slate-900/70
border
border-slate-800
rounded-2xl
p-5
sm:p-8
mb-12
md:mb-14
"

>


<h3

className="
text-xl
sm:text-2xl
font-bold
text-white
mb-5
"

>

Research Interests

</h3>





<div

className="
grid
grid-cols-2
md:flex
md:flex-wrap
gap-3
"

>


{

researchInterests.map(item=>(


<button

key={item}

className="
w-full
md:w-auto
min-h-[42px]
px-3
md:px-4
py-2
rounded-full
bg-cyan-400/10
border
border-cyan-400/30
text-cyan-400
text-xs
sm:text-sm
text-center
flex
items-center
justify-center
hover:bg-cyan-400
hover:text-slate-900
hover:scale-105
transition-all
duration-300
"

>

{item}

</button>


))


}



</div>



</div>
{/* PUBLICATIONS */}


<h3

className="
text-2xl
sm:text-3xl
font-bold
text-white
mb-6
md:mb-8
"

>

Selected Publications

</h3>







<div

className="
space-y-5
md:space-y-8
mb-12
md:mb-16
"

>


{

publications.map((paper,index)=>(


<div

key={index}

onClick={()=>setSelectedItem(paper)}

className="
cursor-pointer
bg-slate-900/70
border
border-slate-800
rounded-2xl
p-5
sm:p-6
md:p-8
hover:border-cyan-400/60
hover:-translate-y-1
md:hover:-translate-y-2
hover:shadow-xl
hover:shadow-cyan-400/10
transition-all
duration-300
"

>






<span

className="
inline-flex
px-3
py-1
rounded-full
bg-green-400/10
text-green-400
border
border-green-400/30
text-xs
font-semibold
"

>

{paper.status}

</span>








<h4

className="
mt-4
md:mt-5
text-lg
sm:text-xl
md:text-2xl
font-bold
text-white
leading-snug
"

>

{paper.title}

</h4>








<p

className="
mt-3
text-sm
sm:text-base
italic
text-slate-400
"

>

{paper.authors}

</p>








<p

className="
mt-3
text-sm
sm:text-base
text-cyan-400
font-semibold
leading-relaxed
"

>

{paper.venue}

</p>








<p

className="
mt-4
text-sm
sm:text-base
text-slate-300
leading-relaxed
line-clamp-4
"

>

{paper.description}

</p>








<p

className="
mt-4
text-xs
sm:text-sm
text-cyan-400
"

>

Click to view details →

</p>







</div>


))


}



</div>









{/* ONGOING RESEARCH */}



<h3

className="
text-2xl
sm:text-3xl
font-bold
text-white
mb-6
md:mb-8
"

>

Under Review & Ongoing Research

</h3>









<div

className="
space-y-5
md:space-y-8
"

>


{

ongoingResearch.map((item,index)=>(


<div

key={index}

onClick={()=>setSelectedItem(item)}

className="
cursor-pointer
bg-slate-900/70
border
border-slate-800
rounded-2xl
p-5
sm:p-6
md:p-8
hover:border-cyan-400/60
hover:-translate-y-1
md:hover:-translate-y-2
hover:shadow-xl
hover:shadow-cyan-400/10
transition-all
duration-300
"

>








<span

className="
text-cyan-400
text-xs
sm:text-sm
font-semibold
"

>

{item.type}

</span>








<h4

className="
mt-3
sm:mt-4
text-lg
sm:text-xl
md:text-2xl
font-bold
text-white
leading-snug
"

>

{item.title}

</h4>








<p

className="
mt-4
text-sm
sm:text-base
text-slate-300
leading-relaxed
line-clamp-5
"

>

{item.description}

</p>








<div

className="
flex
flex-wrap
gap-2
sm:gap-3
mt-5
"

>


{

item.keywords.map(keyword=>(


<span

key={keyword}

className="
px-3
py-1
rounded-full
bg-slate-800
text-slate-300
text-xs
hover:bg-cyan-400/20
hover:text-cyan-300
transition
"

>

{keyword}

</span>


))


}



</div>








<p

className="
mt-4
text-xs
sm:text-sm
text-cyan-400
"

>

Click to explore details →

</p>







</div>


))


}



</div>




</div>





{/* MODAL */}



{

selectedItem && (


<div

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
backdrop-blur-sm
px-4
py-6
"

onClick={()=>setSelectedItem(null)}

>



<div

className="
relative
w-full
max-w-3xl
max-h-[90vh]
overflow-y-auto
bg-[#071426]
border
border-cyan-400/30
rounded-2xl
sm:rounded-3xl
p-5
sm:p-8
shadow-2xl
shadow-cyan-400/20
"

onClick={(e)=>e.stopPropagation()}

>





<button

onClick={()=>setSelectedItem(null)}

className="
absolute
top-4
right-4
sm:top-5
sm:right-6
text-slate-400
hover:text-white
text-2xl
"

>

×

</button>








<div

className="
flex
flex-wrap
gap-2
"

>


{

selectedItem.status && (


<span

className="
inline-flex
px-3
py-1
rounded-full
bg-green-400/10
text-green-400
border
border-green-400/30
text-xs
"

>

{selectedItem.status}

</span>


)


}







{

selectedItem.type && (


<span

className="
inline-flex
px-3
py-1
rounded-full
bg-cyan-400/10
text-cyan-400
border
border-cyan-400/30
text-xs
"

>

{selectedItem.type}

</span>


)


}



</div>









<h2

className="
mt-5
sm:mt-6
pr-8
text-xl
sm:text-2xl
md:text-3xl
font-bold
text-white
leading-tight
"

>

{selectedItem.title}

</h2>









{

selectedItem.authors && (


<p

className="
mt-4
text-sm
sm:text-base
italic
text-slate-400
"

>

{selectedItem.authors}

</p>


)


}









{

selectedItem.venue && (


<p

className="
mt-3
text-sm
sm:text-base
text-cyan-400
font-semibold
leading-relaxed
"

>

{selectedItem.venue}

</p>


)


}









<p

className="
mt-5
sm:mt-6
text-sm
sm:text-base
text-slate-300
leading-relaxed
"

>

{selectedItem.description}

</p>









{

selectedItem.doi && (


<p

className="
mt-5
text-xs
sm:text-sm
text-slate-400
break-words
"

>

{selectedItem.doi}

</p>


)


}









{

selectedItem.keywords && (


<div

className="
flex
flex-wrap
gap-2
sm:gap-3
mt-6
"

>


{

selectedItem.keywords.map(keyword=>(


<span

key={keyword}

className="
px-3
sm:px-4
py-1.5
rounded-full
bg-slate-800
text-cyan-300
text-xs
sm:text-sm
"

>

{keyword}

</span>


))


}



</div>


)



}





</div>





</div>


)



}



</section>


)


}


export default Research;
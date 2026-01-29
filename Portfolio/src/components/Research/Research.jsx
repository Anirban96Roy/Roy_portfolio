import React from 'react'

const papers = [
  {
    title: 'WaveGuard: A Flood Monitoring and Rescue System',
  authors: 'Anirban Roy, Arittra Naha , Shahidul Salim Sakib, Sk. Imran Hossain',
  publication: 'SoftwareX (Peer-Reviewed), In Process',
  description: 'An AI-powered system for real-time flood rescue coordination, using NLP and geospatial analytics.',
  bgColor: 'bg-[#E9F8F9]',
},
 {
  title: "A Quantitatively Validated Explainable AI Framework for Maternal Health Risk Prediction in Rural Bangladesh",
  authors: "Md. Tahsinur Rahman, Anirban Ghosh, Anirban Roy",
  publication: "Manuscript in preparation (2025)",
  description:
    "An explainable machine learning framework for maternal health risk prediction with quantitative XAI validation (e.g., faithfulness and stability). Work in progress.",
  bgColor: "bg-[#FFF3E2]",
}
,
  
 {
  title: "An Intelligent Framework for Medical Prescription Information Preservation",
  publication: "Work in progress",
  description:
    "A medical document understanding pipeline for handwritten and printed prescriptions, combining ROI detection and structured information extraction to preserve and organize patient medication records.",
}
,
]

const Research = () => {
  return (
    <section id="research" className="py-16 scroll-mt-29 px-4 sm:px-8 lg:px-16 ">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Research & Publications</h2>

      <div className="space-y-10">
        {papers.map((paper, index) => (
          <div
            key={index}
            className={`w-full p-6 lg:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ${paper.bgColor}`}
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{paper.title}</h3>
            <p className="text-sm italic text-gray-700 mb-1">{paper.authors}</p>
            <p className="text-sm text-gray-500 mb-3">{paper.publication}</p>
            <p className="text-gray-800">{paper.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Research

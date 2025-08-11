import React, { useState } from 'react'

// Import images
import award1 from '../../assets/anirban_project/home.png'
import award2 from '../../assets/anirban_project/home.png'
import award3 from '../../assets/anirban_project/home.png'
import award4 from '../../assets/anirban_project/home.png'
import award5 from '../../assets/anirban_project/ART.png'
import award6 from '../../assets/anirban_project/home.png'
import award7 from '../../assets/anirban_project/kuet.jpg'
import award8 from '../../assets/anirban_project/home.png'

// Awards with individual background color for title section
const awards = [
  { id: 1, title: 'Best Research Award', year: 2024, image: award1, description: 'Awarded for outstanding research contribution.', bgColor: 'bg-[#E9F8F9]' },
  { id: 2, title: 'Hackathon Champion', year: 2023, image: award2, description: 'Winner of University-wide innovation challenge.', bgColor: 'bg-[#FFF3E2]' },
  { id: 3, title: 'Dean’s List', year: 2024, image: award3, description: 'Academic excellence recognition.', bgColor: 'bg-[#FDE2F3]' },
  { id: 4, title: 'Volunteer Excellence', year: 2022, image: award4, description: 'For exceptional community service.', bgColor: 'bg-[#E4F1FF]' },
  { id: 5, title: 'Certificate of Merit', year: 2023, image: award5, description: 'Top performance in AI lab projects.', bgColor: 'bg-gray-200' },
  { id: 6, title: 'Poster Winner', year: 2023, image: award6, description: 'Best poster at AI4Change Summit.', bgColor: 'bg-[#E9F8F9]' },
  { id: 7, title: 'Teaching Assistant Award', year: 2024, image: award7, description: 'Recognized for academic assistance.', bgColor: 'bg-[#FFF3E2]' },
  { id: 8, title: 'Research Scholarship', year: 2025, image: award8, description: 'Full scholarship for AI research.', bgColor: 'bg-[#E4F1FF]' },
]

const Award = () => {
  const [selectedAward, setSelectedAward] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const awardsPerPage = 9

  const indexOfLastAward = currentPage * awardsPerPage
  const indexOfFirstAward = indexOfLastAward - awardsPerPage
  const currentAwards = awards.slice(indexOfFirstAward, indexOfLastAward)
  const totalPages = Math.ceil(awards.length / awardsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <section id="awards" className="py-16 scroll-mt-20 px-4 sm:px-8 lg:px-16 bg-[#A3DC9A] border-t">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Awards & Achievements</h2>
      <br></br>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {currentAwards.map((award) => (
          <div
            key={award.id}
            className="break-inside-avoid rounded-xl shadow-md bg-white hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => setSelectedAward(award)}
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full object-cover rounded-t-xl"
            />
            <div className={`p-4 ${award.bgColor}`}>
              <h3 className="text-md font-semibold text-gray-800">{award.title}</h3>
              <p className="text-sm text-gray-600">{award.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>

      {/* Popup */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-5xl rounded-xl p-6 relative shadow-xl overflow-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 left-4 text-gray-500 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <img
              src={selectedAward.image}
              alt={selectedAward.title}
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">{selectedAward.title}</h3>
            <p className="text-sm text-gray-500 mb-2">Year: {selectedAward.year}</p>
            <p className="text-sm text-gray-700">{selectedAward.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Award

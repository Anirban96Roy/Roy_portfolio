import React, { useState } from 'react'

// Import images
import award1 from '../../assets/certificates/Untitled-1.jpg'
import award2 from '../../assets/certificates/Untitled-2.jpg'
import award3 from '../../assets/certificates/Untitled-3.jpg'
import award4 from '../../assets/certificates/Untitled-4.jpg'
import award5 from '../../assets/certificates/Untitled-5.jpg'
import award6 from '../../assets/certificates/Untitled-6.jpg'
import award7 from '../../assets/certificates/Untitled-7.jpg'
import award8 from '../../assets/certificates/Untitled-8.jpg'
import award9 from '../../assets/certificates/Untitled-9.jpg'
import award10 from '../../assets/certificates/Untitled-10.jpg'
import award11 from '../../assets/certificates/Untitled-11.jpg'
import award12 from '../../assets/certificates/Untitled-12.jpg'
import award13 from '../../assets/certificates/Untitled-13.jpg'
import award14 from '../../assets/certificates/Untitled-14.jpg'
import award15 from '../../assets/certificates/Untitled-15.jpg'
import award16 from '../../assets/certificates/Untitled-16.jpg'
import award17 from '../../assets/certificates/Untitled-17.jpg'
import award18 from '../../assets/certificates/Untitled-18.jpg'
import award19 from '../../assets/certificates/Untitled-19.jpg'
import award20 from '../../assets/certificates/Untitled-20.jpg'
import award21 from '../../assets/certificates/Untitled-21.jpg'
import award22 from '../../assets/certificates/Untitled-22.jpg'
import award23 from '../../assets/certificates/Untitled-23.jpg'
import award24 from '../../assets/certificates/Untitled-24.jpg'
import award25 from '../../assets/certificates/Untitled-25.jpg'
import award26 from '../../assets/certificates/Untitled-26.jpg'
import award27 from '../../assets/certificates/Untitled-27.jpg'
import award28 from '../../assets/certificates/Untitled-28.jpg'
import award29 from '../../assets/certificates/Untitled-29.jpg'
import award30 from '../../assets/certificates/Untitled-30.jpg'
import award31 from '../../assets/certificates/Untitled-31.jpg'
import award32 from '../../assets/certificates/Untitled-32.jpg'
import award33 from '../../assets/certificates/Untitled-33.jpg'
import award34 from '../../assets/certificates/Untitled-34.jpg'
import award35 from '../../assets/certificates/Untitled-35.jpg'
import award36 from '../../assets/certificates/Untitled-36.jpg'
import award37 from '../../assets/certificates/Untitled-37.jpg'
import award38 from '../../assets/certificates/Untitled-38.jpg'
import award39 from '../../assets/certificates/Untitled-39.jpg'
import award40 from '../../assets/certificates/Untitled-40.jpg'
import award41 from '../../assets/certificates/Untitled-41.jpg'
import award42 from '../../assets/certificates/Untitled-42.jpg'
import award43 from '../../assets/certificates/Untitled-43.jpg'
import award44 from '../../assets/certificates/Untitled-44.jpg'
import award45 from '../../assets/certificates/Untitled-45.jpg'
import award46 from '../../assets/certificates/Untitled-46.jpg'
import award47 from '../../assets/certificates/Untitled-47.jpg'
import award48 from '../../assets/certificates/Untitled-48.jpg'
import award49 from '../../assets/certificates/Untitled-49.jpg'
import award50 from '../../assets/certificates/Untitled-50.jpg'
import award51 from '../../assets/certificates/Untitled-51.jpg'
import award52 from '../../assets/certificates/Untitled-52.jpg'
import award53 from '../../assets/certificates/Untitled-53.jpg'
import award54 from '../../assets/certificates/Untitled-54.jpg'
import award55 from '../../assets/certificates/Untitled-55.jpg'


// Awards with individual background color for title section
const awards = [
  { id: 1, title: '3MT Thesis Competition – 1st Runners-Up', year: 2025, image: award55, description: 'Secured 1st runners-up position in 3MT Thesis segment of SciBlitz 1.0 organized by IEEE CUET Student Branch.', bgColor: 'bg-[#E9F8F9]' },
  { id: 2, title: 'Creative Talent Exploration Competition 2019 – Math & Computer section', year: 2019, image: award25, description: 'Secured 1st place at the Upazila level in Mathematics and Computer category.', bgColor: 'bg-[#FFF3E2]' },
  { id: 3, title: 'Creative Talent Exploration Competition 2019 – Science section', year: 2019, image: award27, description: 'Secured 1st place at the Upazila level in Science category.', bgColor: 'bg-[#FDE2F3]' },
  { id: 4, title: 'National Education Week – 1st Place in Rabindra Sangeet', year: 2019, image: award28, description: 'Secured 1st place in Rabindra Sangeet at the Upazila level during National Education Week.', bgColor: 'bg-[#E4F1FF]' },
  { id: 5, title: 'National Education Week – 1st Place in Essay Competition', year: 2019, image: award29, description: 'Secured 1st place in the essay competition at the Upazila level during National Education Week.', bgColor: 'bg-gray-200' },
  { id: 6, title: 'Poetry Recitation Competition – 1st Place', year: 2019, image: award30, description: 'Awarded 1st place in the Poetry Recitation competition at the Upazila level.', bgColor: 'bg-[#E9F8F9]' },
  { id: 7, title: 'Physics Olympiad– Divisional Round Participation', year: 2017, image: award19, description: 'Awarded for participation in the Divisional Round of Physics Olympiad 2017.', bgColor: 'bg-[#FFF3E2]' },
  { id: 8, title: '38th National Science & Technology Week – 1st Place in Oratory ', year: 2017, image: award20, description: 'Secured 1st place in the oratory competition at the Upazila level during the 38th National Science & Technology Week', bgColor: 'bg-[#E4F1FF]' },
  { id: 9, title: '1st Place in Oratory (District Level)', year: 2017, image: award21, description: 'Secured 1st place in the oratory competition at the District level during the 38th National Science & Technology Week.', bgColor: 'bg-[#E9F8F9]' },
  { id: 10, title: 'Bangladesh Science Olympiad 2017 – Participation', year: 2017, image: award23, description: 'Awarded for participation in the Bangladesh Science Olympiad 2017.', bgColor: 'bg-[#FFF3E2]' },
  { id: 11, title: '3rd Place in Science Olympiad', year: 2017, image: award24, description: 'Secured 3rd place in the Science Olympiad during the 38th National Science & Technology Week.', bgColor: 'bg-[#FDE2F3]' },
  { id: 12, title: ' 1st Place in Bangla Essay Writing', year: 2017, image: award26, description: 'Secured 1st place in Bangla essay writing at the Upazila level during National Education Week.', bgColor: 'bg-[#E4F1FF]' },
  { id: 13, title: 'Creative Talent Exploration Competition 2017 – Math & Computer section', year: 2017, image: award31, description: 'Secured 1st place at the Upazila level in Mathematics and Computer category.', bgColor: 'bg-gray-200' },
  { id: 14, title: 'Shailupa Upazila Debate Workshop – 1st Place (Group)', year: 2017, image: award32, description: 'ecured 1st place in the group category at the Shailupa Upazila Debate Workshop.', bgColor: 'bg-[#E9F8F9]' },
  { id: 15, title: 'Debate Workshop', year: 2017, image: award34, description: 'Participated in the Debate Workshop organized by the 17 District Administration, Jhinaidah.', bgColor: 'bg-[#FFF3E2]' },
  { id: 16, title: 'National Mourning Day Essay Competition – 1st Place', year: 2017, image: award35, description: 'Secured 1st place in the essay competition organized on the occasion of National Mourning Day.', bgColor: 'bg-[#E9F8F9]' },
  { id: 17, title: '1st place in the poetry recitation competition', year: 2017, image: award36, description: 'Secured 1st place in the poetry recitation competition organized on the occasion of National Mourning Day.', bgColor: 'bg-[#FFF3E2]' },
  { id: 18, title: 'Math Olympiad 2016 – Participation', year: 2016, image: award37, description: 'Awarded for participation in the Math Olympiad 2016.', bgColor: 'bg-[#FDE2F3]' },
  { id: 19, title: '37th National Science & Technology Week – Oratory Participation (District Level)', year: 2016, image: award38, description: 'Participated in the oratory competition at the District level during the 37th National Science & Technology Week.', bgColor: 'bg-[#E4F1FF]' },
  { id: 20, title: 'Science Project Exhibition – Participation', year: 2016, image: award39, description: 'Participated in the Science Project Exhibition showcasing innovative scientific projects.', bgColor: 'bg-gray-200' },
  { id: 21, title: 'National Mourning Day 2015 – 1st Place in Poetry Recitation', year: 2015, image: award40, description: 'Secured 1st place in the poetry recitation competition organized on the occasion of National Mourning Day 2015.', bgColor: 'bg-[#E9F8F9]' },
  { id: 22, title: 'National Children’s Award Competition 2015 – 1st Place in Recitation ', year: 2015, image: award41, description: 'Secured 1st place in the recitation category at the Upazila level during the National Children’s Award Competition 2015.', bgColor: 'bg-[#FFF3E2]' },
  { id: 23, title: 'Creative Talent Exploration Competition– 1st Place in Science section', year: 2015, image: award42, description: 'Secured 1st place in the Daily Science category at the District level during the Creative Talent Exploration Competition 2015.', bgColor: 'bg-[#E9F8F9]' },
  { id: 24, title: 'National Children’s Award – District Level Recitation Champion', year: 2015, image: award43, description: 'Awarded 1st place in the recitation category at the District level of the National Children’s Award Competition.', bgColor: 'bg-[#FFF3E2]' },
  { id: 25, title: 'Science Project Exhibition Participation', year: 2015, image: award44, description: 'Participated in the Science Project Exhibition during the 36th National Science & Technology Week, showcasing innovative scientific ideas.', bgColor: 'bg-[#E9F8F9]' },
  { id: 26, title: '2nd Place in Oratory (District Level)', year: 2015, image: award53, description: 'Achieved 2nd place in the oratory category at the District level of the National Children’s Award Competition.', bgColor: 'bg-[#FFF3E2]' },
  { id: 27, title: '2nd Place in Science Project Innovation', year: 2015, image: award54, description: 'Secured 2nd place in the Science Project Innovation category at the Upazila level during the National Children’s Award Competition 2015.', bgColor: 'bg-[#FDE2F3]' },
  { id: 28, title: 'Creative Talent Exploration Competition – 1st Place in Science Section', year: 2015, image: award1, description: 'Recognized as the top talent at the Upazila level during the Creative Talent Exploration Competition.', bgColor: 'bg-[#E4F1FF]' },
  { id: 29, title: 'National Children’s Award – 1st Place in Oratory', year: 2015, image: award2, description: 'Awarded 1st place in the oratory category at the Upazila level during the National Children’s Award Competition 2015.', bgColor: 'bg-gray-200' },
  { id: 30, title: 'National Mourning Day Essay Competition – 1st Place', year: 2014, image: award3, description: 'Secured 1st place in the essay competition across the entire Jhenidah district organized on the occasion of National Mourning Day.', bgColor: 'bg-[#E9F8F9]' },
  { id: 31, title: 'National Children & Youth Competition 2014 – 2nd Place in Oratory  ', year: 2014, image: award5, description: 'Achieved 2nd place in the oratory category at the Upazila level in Jhenidah during the National Children & Youth Competition 2014 organized by Islamic Foundation Bangladesh.', bgColor: 'bg-[#FFF3E2]' },
  { id: 32, title: 'Children’s Seasonal Competition – 1st Place in Oratory', year: 2014, image: award6, description: 'Secured 1st place in the oratory category at the Upazila level during the Children’s Seasonal Competition.', bgColor: 'bg-[#E4F1FF]' },
  { id: 33, title: 'Children’s Seasonal Competition – 1st Place in Quiz ', year: 2014, image: award7, description: 'Secured 1st place in the quiz category at the Upazila level during the Children’s Seasonal Competition.', bgColor: 'bg-gray-200' },
  { id: 33, title: 'Creative Talent Exploration Competition – 1st Place ', year: 2014, image: award8, description: 'Recognized as the top talent at the Upazila level during the Creative Talent Exploration Competition.', bgColor: 'bg-[#E9F8F9]' },
  { id: 34, title: 'Children’s Seasonal Competition – 1st Place in Oratory', year: 2013, image: award9, description: 'Secured 1st place in the oratory category at the Upazila level during the Children’s Seasonal Competition.', bgColor: 'bg-[#FFF3E2]' },
  { id: 35, title: 'Children’s Seasonal Competition – 1st Place in Quiz', year: 2013, image: award10, description: 'Secured 1st place in the Quiz category at the Upazila level during the Children’s Seasonal Competition.', bgColor: 'bg-[#E9F8F9]' },
  { id: 36, title: 'Children’s Seasonal Competition – 3rd Place (Team, District Level)', year: 2013, image: award11, description: 'Achieved 3rd place as part of a team at the District level during the Children’s Seasonal Competition.', bgColor: 'bg-[#FFF3E2]' },
  { id: 37, title: 'Children’s Seasonal Debate Competition – 3rd Place (District Level)', year: 2013, image: award12, description: 'Achieved 3rd place as part of a team at the District level during the Children’s Seasonal Competition.', bgColor: 'bg-[#E9F8F9]' },
  { id: 38, title: 'Bangladesh Math Olympiad – Participation', year: 2013, image: award13, description: 'Awarded for participation in the Bangladesh Math Olympiad 2013.', bgColor: 'bg-[#FFF3E2]' },
  { id: 39, title: 'Inter-Primary School Sports & Cultural Competition – 2nd Place in Memory Test ', year: 2012, image: award14, description: 'Achieved 2nd place in the Memory Test category at the District level during the 2012 Inter-Primary School Sports & Cultural Competition.', bgColor: 'bg-[#FDE2F3]' },
  { id: 40, title: 'Inter-Primary School Sports & Cultural Competition 2012 – 3rd Place in Oratory', year: 2012, image: award15, description: 'Secured 3rd place in the oratory category at the Upazila level during the 2012 Inter-Primary School Sports & Cultural Competition.', bgColor: 'bg-[#E4F1FF]' },
  { id: 41, title: 'Inter-Primary School Sports & Cultural Competition – 1st Place in Memory Test', year: 2012, image: award16, description: 'Achieved 2nd place in the Memory Test category at the Upazilla level during the 2012 Inter-Primary School Sports & Cultural Competition.', bgColor: 'bg-gray-200' },
  { id: 42, title: 'National Poet Nazrul Study Center – Poetry Recitation Participation (Divisional Level)', year: 2017, image: award17, description: 'Participated in the poetry recitation competition at the Divisional level organized by the National Poet Nazrul Study Center.', bgColor: 'bg-[#E9F8F9]' },
  { id: 43, title: 'Shailkupa Thana Kindergarten & Pre-Cadet School Association – Scholarship ', year: 2009, image: award45, description: 'Awarded a scholarship for outstanding academic performance in 3rd grade (First Grade) in 2009 by Shailkupa Thana Kindergarten & Pre-Cadet School Association.', bgColor: 'bg-[#E4F1FF]' },
  { id: 44, title: 'Talentpool Scholarship – Class 1', year: 2007, image: award46, description: 'Awarded the Talentpool Scholarship in 2007 for outstanding academic performance in Class 1.', bgColor: 'bg-gray-200' },
  { id: 45, title: 'Dr. Uyaliuzzaman Foundation – Talentpool Scholarship (Class 3)', year: 2009, image: award47, description: 'Awarded the Talentpool Scholarship in Class 3 by the Dr. Uyaliuzzaman Foundation for outstanding academic performance.', bgColor: 'bg-[#E9F8F9]' },
  { id: 46, title: 'Central Playground Festival – District Level Drawing Competition ', year: 2011, image: award48, description: 'Participated in the District level drawing competition organized by the Central Playground Festival.', bgColor: 'bg-[#FFF3E2]' },
  { id: 47, title: 'Shailkupa Thana Kindergarten & Pre-Cadet School Association – Scholarship ', year: 2008, image: award50, description: 'Awarded a scholarship for outstanding academic performance in class 2 (2nd Grade) in 2008 by Shailkupa Thana Kindergarten & Pre-Cadet School Association.', bgColor: 'bg-[#E4F1FF]' },
  { id: 48, title: 'General Scholarship – Class 4', year: 2010, image: award49, description: 'Awarded a general scholarship for outstanding academic performance in Class 4 by the Babor Ali & Rookeya Begum Sriti Foundation.', bgColor: 'bg-gray-200' },
  { id: 49, title: 'Certificate of Appreciation – Poetry Recitation ', year: 2012, image: award51, description: 'Received a Certificate of Appreciation for participating in the Poetry Recitation event “Kobitar Michil” organized by the Surjabandhan Khelaghar Foundation.', bgColor: 'bg-[#E9F8F9]' },
  { id: 50, title: 'Shailkupa Thana Kindergarten & Pre-Cadet School Association – Talentpool Scholarship (Class 4)', year: 2013, image: award52, description: 'Awarded the Talentpool Scholarship in Class 4 by the Shailkupa Thana Kindergarten & Pre-Cadet School Association for outstanding academic performance.', bgColor: 'bg-[#FFF3E2]' },
  { id: 51, title: 'National Education Week – 1st Place in Poetry Recitation ', year: 2017, image: award18, description: 'Secured 1st place in the poetry recitation category at the Upazila level during National Education Week.', bgColor: 'bg-[#E9F8F9]' },
  { id: 52, title: 'National Children & Youth Competition 2014 – 1st Place in Poetry Recitation ', year: 2014, image: award4, description: 'Achieved 1st place in the Poetry Recitation  category at the Upazila level in Jhenidah during the National Children & Youth Competition 2014 organized by Islamic Foundation Bangladesh.', bgColor: 'bg-[#FFF3E2]' },

]

const Award = () => {
  const [selectedAward, setSelectedAward] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const awardsPerPage = 7

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
      <div className="flex justify-center items-center gap-4 mt-20">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#8245ec] text-white hover:bg-blue-600'
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
              : 'bg-[#8245ec] text-white hover:bg-blue-600'
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
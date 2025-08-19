// src/data/awardsData.js

// Dynamically import all images from certificates folder
const awardImages = import.meta.glob("../assets/certificates/*.{png,jpg,jpeg}", { eager: true })

// Convert into an array of actual image URLs
const awardArray = Object.values(awardImages).map((m) => m.default)

export const awards = awardArray.map((img, index) => {
  // Instead of placeholders, define custom awards manually for certain IDs
  const customAwards = {
    1: {
      title: "Poetry Recitation Champion",
      year: 2016,
      description: "Secured 1st place in District Level Poetry Recitation Competition.",
      bgColor: "bg-[#E9F8F9]",
    },
    2: {
      title: "Debate Competition – Runner Up",
      year: 2017,
      description: "Achieved 2nd position in Inter-school Debate Championship.",
      bgColor: "bg-[#FFF3E2]",
    },
    3: {
      title: "Essay Writing Contest",
      year: 2018,
      description: "Winner of National Essay Writing Competition on Environment Awareness.",
      bgColor: "bg-[#FDE2F3]",
    },
  }

  // If there's a custom award defined, use it; otherwise fallback to placeholders
  return {
    id: index + 1,
    title: customAwards[index + 1]?.title || `Award ${index + 1}`,
    year: customAwards[index + 1]?.year || 2015 + (index % 10),
    image: img,
    description: customAwards[index + 1]?.description || `Description for Award ${index + 1}`,
    bgColor:
      customAwards[index + 1]?.bgColor ||
      ["bg-[#E9F8F9]", "bg-[#FFF3E2]", "bg-[#FDE2F3]", "bg-[#E4F1FF]", "bg-gray-200"][index % 5],
  }
})

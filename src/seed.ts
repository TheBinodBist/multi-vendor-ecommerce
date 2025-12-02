import { getPayload } from 'payload';
import Config from '@/payload.config';

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Business & Money",
    color: "#FF8547",
    slug: "business-money",
    subcategories: [
      { name: "Accounting", slug: "accounting" },
      { name: "Entrepreneurship", slug: "entrepreneurship" },
      { name: "Gigs & Side Projects", slug: "gigs-side-projects" },
      { name: "Investing", slug: "investing" },
      { name: "Management & Leadership", slug: "management-leadership" },
      { name: "Marketing & Sales", slug: "marketing-sales" },
      { name: "Networking, Careers & Jobs", slug: "networking-careers-jobs" },
      { name: "Personal Finance", slug: "personal-finance" },
      { name: "Real Estate", slug: "real-estate" },
    ],
  },
  {
    name: "Software Development",
    color: "#07CEBE",
    slug: "software-development",
    subcategories: [
      { name: "Frontend", slug: "frontend" },
      { name: "Backend", slug: "backend" },
      { name: "Mobile Development", slug: "mobile-development" },
      { name: "DevOps", slug: "devops" },
    ],
  },
  {
    name: "Creative Arts",
    color: "#9932CC",
    slug: "creative-arts",
    subcategories: [
      { name: "Graphic Design", slug: "graphic-design" },
      { name: "Photography", slug: "photography" },
      { name: "Music Production", slug: "music-production" },
      { name: "Filmmaking", slug: "filmmaking" },
    ],
  },
  {
    name: "Health & Wellness",
    color: "#228B22",
    slug: "health-wellness",
    subcategories: [
      { name: "Fitness & Exercise", slug: "fitness-exercise" },
      { name: "Nutrition & Diet", slug: "nutrition-diet" },
      { name: "Mental Health", slug: "mental-health" },
      { name: "Yoga & Meditation", slug: "yoga-meditation" },
    ],
  },
  {
    name: "Education & Learning",
    color: "#4682B4",
    slug: "education-learning",
    subcategories: [
      { name: "Academic Subjects", slug: "academic-subjects" },
      { name: "Language Learning", slug: "language-learning" },
      { name: "Test Prep", slug: "test-prep" },
      { name: "Skill-Based Training", slug: "skill-based-training" },
    ],
  },
  {
    name: "Science & Technology",
    color: "#DC143C",
    slug: "science-technology",
    subcategories: [
      { name: "Data Science", slug: "data-science" },
      { name: "AI & Machine Learning", slug: "ai-machine-learning" },
      { name: "Physics & Astronomy", slug: "physics-astronomy" },
      { name: "Biotechnology", slug: "biotechnology" },
    ],
  },
  {
    name: "Home & Lifestyle",
    color: "#DAA520",
    slug: "home-lifestyle",
    subcategories: [
      { name: "Cooking & Baking", slug: "cooking-baking" },
      { name: "Interior Design", slug: "interior-design" },
      { name: "Gardening", slug: "gardening" },
      { name: "DIY & Crafts", slug: "diy-crafts" },
    ],
  },
  {
    name: "Travel & Outdoors",
    color: "#1E90FF",
    slug: "travel-outdoors",
    subcategories: [
      { name: "Adventure Sports", slug: "adventure-sports" },
      { name: "Destination Guides", slug: "destination-guides" },
      { name: "Hiking & Camping", slug: "hiking-camping" },
      { name: "Budget Travel", slug: "budget-travel" },
    ],
  },
  {
    name: "Gaming & Esports",
    color: "#FF4500",
    slug: "gaming-esports",
    subcategories: [
      { name: "Game Reviews", slug: "game-reviews" },
      { name: "Streaming & Content Creation", slug: "streaming-content-creation" },
      { name: "Competitive Play", slug: "competitive-play" },
      { name: "Indie Games", slug: "indie-games" },
    ],
  },
  {
    name: "Sports & Recreation",
    color: "#32CD32",
    slug: "sports-recreation",
    subcategories: [
      { name: "Team Sports", slug: "team-sports" },
      { name: "Individual Sports", slug: "individual-sports" },
      { name: "Sports Training", slug: "sports-training" },
      { name: "Outdoor Activities", slug: "outdoor-activities" },
    ],
  },
  {
    name: "Entertainment & Pop Culture",
    color: "#FF1493",
    slug: "entertainment-pop-culture",
    subcategories: [
      { name: "Movies & TV", slug: "movies-tv" },
      { name: "Celebrities", slug: "celebrities" },
      { name: "Books & Literature", slug: "books-literature" },
      { name: "Music & Performances", slug: "music-performances" },
    ],
  },
  {
    name: "Food & Culinary Arts",
    color: "#CD5C5C",
    slug: "food-culinary-arts",
    subcategories: [
      { name: "World Cuisine", slug: "world-cuisine" },
      { name: "Baking & Pastry", slug: "baking-pastry" },
      { name: "Cooking Techniques", slug: "cooking-techniques" },
      { name: "Beverages & Mixology", slug: "beverages-mixology" },
    ],
  },
  {
    name: "Personal Development",
    color: "#8A2BE2",
    slug: "personal-development",
    subcategories: [
      { name: "Productivity", slug: "productivity" },
      { name: "Self-Improvement", slug: "self-improvement" },
      { name: "Communication Skills", slug: "communication-skills" },
      { name: "Mindset & Motivation", slug: "mindset-motivation" },
    ],
  },
  {
    name: "History & Culture",
    color: "#708090",
    slug: "history-culture",
    subcategories: [
      { name: "World History", slug: "world-history" },
      { name: "Anthropology", slug: "anthropology" },
      { name: "Archaeology", slug: "archaeology" },
      { name: "Cultural Studies", slug: "cultural-studies" },
    ],
  }
];

const seed = async () => {
  const payload = await getPayload({ config: Config });

  for (const category of categories) {
    const createdParent = await payload.create({
      collection: "categories",
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color || null,
        parent: null,
      },
    });

    
    if (category.subcategories && category.subcategories.length > 0) {
      for (const sub of category.subcategories) {
        await payload.create({
          collection: "categories",
          data: {
            name: sub.name,
            slug: sub.slug,
            parent: createdParent.id,
          },
        });
      }
    }
  }

 
};

await seed();

process.exit(0)

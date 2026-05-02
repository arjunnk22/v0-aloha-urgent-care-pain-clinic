export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  featured: boolean
  image: string
}

export const categories = [
  'All',
  'Urgent Care',
  'Pain Management',
  'IV Therapy',
  'Weight Loss',
  'Preventive Health',
  'Travel Health',
]

export const articles: Article[] = [
  {
    slug: 'when-to-go-urgent-care-vs-er',
    title: 'When to Go to Urgent Care vs. the Emergency Room',
    excerpt:
      'Knowing where to go when you are sick or injured can save you time, money, and stress. We break down the key differences so you can make the right call.',
    category: 'Urgent Care',
    readTime: '5 min read',
    date: 'April 10, 2026',
    author: 'Aloha Medical Team',
    featured: true,
    image: 'https://placehold.co/1200x700/030f22/fff8ed?text=Urgent+Care+vs+ER',
  },
  {
    slug: 'iv-therapy-benefits-waikiki',
    title: 'IV Therapy in Waikiki: What It Is and Who It Helps',
    excerpt:
      'From jet lag recovery to post-event hydration, IV therapy is one of the fastest ways to feel your best. Here is everything you need to know.',
    category: 'IV Therapy',
    readTime: '4 min read',
    date: 'April 5, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/030f22/fff8ed?text=IV+Therapy',
  },
  {
    slug: 'pain-management-without-opioids',
    title: 'Managing Chronic Pain Without Opioids',
    excerpt:
      'Modern pain management has evolved. Discover the physician-led, multi-modal approaches we use to help patients find lasting relief.',
    category: 'Pain Management',
    readTime: '6 min read',
    date: 'March 28, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/d52128/fff8ed?text=Pain+Management',
  },
  {
    slug: 'glp1-weight-loss-programs',
    title: 'GLP-1 Weight Loss Programs: Are They Right for You?',
    excerpt:
      'GLP-1 medications have transformed medically supervised weight loss. Our physicians explain candidacy, expectations, and how to get started safely.',
    category: 'Weight Loss',
    readTime: '7 min read',
    date: 'March 20, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/030f22/fff8ed?text=GLP-1+Weight+Loss',
  },
  {
    slug: 'travel-health-tips-hawaii-tourists',
    title: 'Essential Health Tips for Tourists Visiting Hawaii',
    excerpt:
      'Sun exposure, ocean hazards, and unfamiliar foods can catch travelers off guard. Here is how to stay healthy and what to do if something goes wrong.',
    category: 'Travel Health',
    readTime: '5 min read',
    date: 'March 14, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/d52128/fff8ed?text=Travel+Health+Hawaii',
  },
  {
    slug: 'preventive-screenings-adults',
    title: 'The Preventive Screenings Every Adult Should Know About',
    excerpt:
      'Early detection is the most powerful health tool you have. We outline the essential screenings by age and why skipping them is a risk not worth taking.',
    category: 'Preventive Health',
    readTime: '5 min read',
    date: 'March 7, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/030f22/fff8ed?text=Preventive+Screenings',
  },
  {
    slug: 'wound-care-at-home-vs-clinic',
    title: 'When a Cut Needs More Than a Bandage',
    excerpt:
      'Not every wound can be treated at home. Learn the signs that indicate a cut, laceration, or puncture wound requires professional wound care.',
    category: 'Urgent Care',
    readTime: '4 min read',
    date: 'February 28, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/030f22/fff8ed?text=Wound+Care',
  },
  {
    slug: 'hydration-and-performance',
    title: 'Hydration, Performance, and Why IV Fluids Beat Drinking Water',
    excerpt:
      'Athletes and active travelers are discovering the performance benefits of medical-grade hydration. Here is the science behind it.',
    category: 'IV Therapy',
    readTime: '4 min read',
    date: 'February 20, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/d52128/fff8ed?text=Hydration+%26+Performance',
  },
  {
    slug: 'respiratory-illness-treatment-options',
    title: 'Respiratory Illness: From Diagnosis to Treatment in One Visit',
    excerpt:
      'Cough, wheezing, shortness of breath — respiratory symptoms deserve more than a guess. We handle diagnosis, nebulizer treatment, and prescriptions on the spot.',
    category: 'Urgent Care',
    readTime: '5 min read',
    date: 'February 12, 2026',
    author: 'Aloha Medical Team',
    featured: false,
    image: 'https://placehold.co/800x500/030f22/fff8ed?text=Respiratory+Treatment',
  },
]

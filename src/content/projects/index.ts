export interface Project {
  id: number;
  name: string;
  type: string;
  year: string;
  focus: string;
  images: string[];
  description: string;
  highlights: string[];
  tickerSymbol?: string;
  url?: string;
  mediaLinks?: {
    title: string;
    url: string;
    type: 'video' | 'article';
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Punktured Art',
    type: 'Branding / Web Design',
    year: '2025',
    focus: 'Tattoo Studio Identity & Booking Experience',
    images: [
      '/images/punktured-art/PATS-Logo.jpg',
      '/images/punktured-art/PA-HERO.jpg',
      '/images/punktured-art/PA-AS.jpg',
      '/images/punktured-art/PA-AU.jpg',
      '/images/punktured-art/PA-PS.jpg',
    ],
    description:
      'A custom portfolio and booking-forward digital experience for a tattoo and art brand, designed to feel immersive, editorial, and conversion-aware.',
    highlights: [
      'Built a distinct digital identity for a tattoo and art studio brand.',
      'Focused on visual storytelling, navigation clarity, and appointment intent.',
      'Designed to showcase artwork while supporting client trust and inquiry flow.',
    ],
    url: 'https://punkturedart.com',
  },
  {
    id: 2,
    name: 'New Tierra Immigration',
    type: 'Web Design / Brand Presence',
    year: '2024',
    focus: 'Professional Services Website',
    images: [
      '/images/new-tierra-immigration/logo.jpeg',
      '/images/new-tierra-immigration/NT-HERO.jpg',
      '/images/new-tierra-immigration/NT-CTA.jpeg',
      '/images/new-tierra-immigration/NT-INFO.png',
      '/images/new-tierra-immigration/NT-REVIEWS.jpeg',
    ],
    description:
      'A professional web presence for an immigration-focused business, built to communicate trust, clarity, and an approachable service experience.',
    highlights: [
      'Created a clean, informative layout for a service-based business.',
      'Balanced professionalism with accessibility for prospective clients.',
      'Structured pages to support credibility and conversion.',
    ],
    url: 'https://newtierraimmigration.ca/',
  },
  {
    id: 3,
    name: 'CISM Latin America',
    type: 'UI / UX',
    year: '2023 | 24',
    focus: 'SEO Strategy, Content Marketing & Digital Growth',
    images: [
      '/images/cism-latin-america/CISM-LOGO.jpeg',
      '/images/cism-latin-america/cism-hero.jpeg',
      '/images/cism-latin-america/cism-mockup.jpeg',
    ],
    description:
      "Led a digital growth initiative for CISM Latin America, Canada's International Student Magazine, focused on expanding reach across Latin American student audiences through SEO, content strategy, and targeted marketing campaigns.",
    highlights: [
      'Produced 10+ optimised content pages resulting in measurable improvements in organic traffic and lead engagement.',
      'Developed and executed an SEO strategy targeting Latin American student demographics across Canada.',
      'Built out marketing campaign assets and social content to drive brand awareness.',
      'Collaborated cross-functionally to align content output with editorial and business goals.',
    ],
    url: 'https://mycism.com',
  },
  {
    id: 4,
    name: 'HighKey Agency',
    type: 'Marketing / Brand Strategy',
    year: '2022',
    focus: 'Content, PR & Campaign Support',
    images: [
      '/images/highkey-agency/IMG_3285.PNG',
      '/images/highkey-agency/IMG_3286.PNG',
      '/images/highkey-agency/IMG_3284.jpg',
      '/images/highkey-agency/IMG_3280.jpg',
    ],
    description:
      'Worked across social content, press releases, and brand strategy for multiple client accounts in a fast-moving agency environment.',
    highlights: [
      'Supported approximately 10 client accounts across campaigns and content.',
      'Contributed to brand strategy and digital content execution.',
      'Helped drive measurable traffic growth across client work.',
    ],
    url: 'https://highkeyagency.com',
  },
  {
    id: 5,
    name: 'Particle Collection',
    type: 'Graphic Design / Video Editing',
    year: '2021 - 2022',
    focus: 'Launch Campaign Creative',
    images: [
      '/images/particle-collection/PC-fulllogo.jpeg',
      '/images/particle-collection/pC_logo.jpg',
      '/images/particle-collection/PC-GALLERYIMG02.jpg',
      '/images/particle-collection/PC-GALLERYIMG.jpg',
    ],
    description:
      'Contributed graphic design and video editing work for Particle Collection, supporting social promotion around the Banksy NFT launch. Developed visual content that helped establish a cohesive campaign look across posts, reels, and branded social assets.',
    highlights: [
      'Created campaign visuals for a high-profile NFT and digital art promotion.',
      'Produced edited reel and motion content tailored for social media engagement.',
      'Maintained brand consistency across launch-focused creative assets and post themes.',
    ],
    url: 'https://www.particlecollection.com/',
  },
];

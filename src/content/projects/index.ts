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
      'public/images/punktured-art/PATS-Logo.jpg',
      'public/images/punktured-art/PA-HERO.jpg',
      'public/images/punktured-art/PA-AS.jpg',
      'public/images/punktured-art/PA-AU.jpg',
      'public/images/punktured-art/PA-PS.jpg',
    ],
    description:
      'A custom portfolio and booking-forward digital experience for a tattoo and art brand, designed to feel immersive, editorial, and conversion-aware.',
    highlights: [
      'Built a distinct digital identity for a tattoo and art studio brand.',
      'Focused on visual storytelling, navigation clarity, and appointment intent.',
      'Designed to showcase artwork while supporting client trust and inquiry flow.',
    ],
  },
  {
    id: 2,
    name: 'New Tierra Immigration',
    type: 'Web Design / Brand Presence',
    year: '2024',
    focus: 'Professional Services Website',
    images: [
      '/images/new-tierra-immigration/new-tierra-home.jpeg',
      '/images/new-tierra-immigration/new-tierra-services.jpeg',
    ],
    description:
      'A professional web presence for an immigration-focused business, built to communicate trust, clarity, and an approachable service experience.',
    highlights: [
      'Created a clean, informative layout for a service-based business.',
      'Balanced professionalism with accessibility for prospective clients.',
      'Structured pages to support credibility and conversion.',
    ],
  },
  {
    id: 3,
    name: 'CISM Latin America',
    type: 'UI / UX',
    year: '2023 | 24',
    focus: 'SEO Strategy, Content Marketing & Digital Growth',
    images: [
      '/images/cism-latin-america/cism-logo.jpeg',
      '/images/cism-latin-america/cism-home.jpeg',
      '/images/cism-latin-america/cism-hero.jpeg',
      '/images/cism-latin-america/cism-footer.png',
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
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Worked across social content, press releases, and brand strategy for multiple client accounts in a fast-moving agency environment.',
    highlights: [
      'Supported approximately 10 client accounts across campaigns and content.',
      'Contributed to brand strategy and digital content execution.',
      'Helped drive measurable traffic growth across client work.',
    ],
  },
];

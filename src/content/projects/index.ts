export interface Project {
  id: number;
  name: string;
  type: string;
  year: string;
  focus: string;
  image1: string;
  image2: string;
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
    name: 'Punktured Art Tattoo Studio',
    type: 'Web Design',
    year: '2025 | 26',
    focus: 'Branding, Web Design & Development, Booking Integration',
    image1: '/images/punktured-art/hero-homepage.png',
    image2: '/images/punktured-art/services-gallery.png',
    description: 'Designed and developed a full digital presence for Punktured Art Tattoo Studio, a West Kelowna-based tattoo studio known for realism, fine line, and custom ink.',
    highlights: [
      'Custom brand identity and visual language built around the studio\'s tattoo style.',
      'Fully responsive website with online booking integration.',
      'Gallery-forward layout to showcase artist portfolios and drive client inquiries.',
      'Google Business and local SEO setup to improve discoverability in the Kelowna area.',
    ],
    url: 'https://www.punkturedart.com'
  },
  {
    id: 2,
    name: 'New Tierra Immigration',
    type: 'Web Design',
    year: '2021 | 24',
    focus: 'Branding, Web Development, Google Integration',
    image1: '/images/new-tierra-immigration/NT-HERO.jpg',
    image2: '/images/new-tierra-immigration/NT-CTA.jpeg',
    description: 'Developed a comprehensive brand identity and web presence for New Tierra Immigration, a Canadian immigration consultancy serving Spanish-speaking clients.',
    highlights: [
      'Full brand identity system including logo, colour palette, and typography.',
      'Custom website built for trust, clarity, and conversion.',
      'SEO strategy targeting bilingual and immigration-specific search terms.',
      'Bilingual-ready content structure to serve both English and Spanish audiences.',
    ],
    url: 'https://newtierraimmigration.ca'
  },
  {
    id: 3,
    name: 'CISM Latin America',
    type: 'UI / UX',
    year: '2023 | 24',
    focus: 'SEO Strategy, Content Marketing & Digital Growth',
    image1: '/images/cism-latin-america/cism-mockup.jpeg',
    image2: '/images/cism-latin-america/cism-hero.jpeg',
    description: 'Led a digital growth initiative for CISM Latin America, Canada\'s International Student Magazine, focused on expanding reach across Latin American student audiences through SEO, content strategy, and targeted marketing campaigns.',
    highlights: [
      'Produced 10+ optimised content pages resulting in measurable improvements in organic traffic and lead engagement.',
      'Developed and executed an SEO strategy targeting Latin American student demographics across Canada.',
      'Built out marketing campaign assets and social content to drive brand awareness.',
      'Collaborated cross-functionally to align content output with editorial and business goals.',
    ],
    url: 'https://mycism.com'
  },
  {
    id: 4,
    name: 'HighKey Agency',
    type: 'PR / Branding',
    year: '2019 | 23',
    focus: 'Brand Strategy, PR & NASDAQ Campaign',
    image1: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?auto=format&fit=crop&w=800&q=80',
    image2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Directed the public relations and brand strategy for HighKey Agency, a social media and PR firm with a roster of ~10 clients across tech, entertainment, and lifestyle sectors.',
    highlights: [
      'Secured features in top-tier tech and business media outlets.',
      'Developed a strong investor-focused narrative for a NASDAQ-listed client.',
      'Managed crisis communications and proactive media outreach.',
      'Oversaw content production achieving a reported 64% increase in site traffic.',
    ],
    url: 'https://highkeyagency.com'
  }
];

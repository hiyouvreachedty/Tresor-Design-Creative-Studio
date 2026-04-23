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
    description: 'Designed and developed a full digital presence for Punktured Art Tattoo Studio, a West Kelowna-based tattoo studio known for realism, fine line, and custom ink work. The goal was to reflect the studio\'s bold aesthetic and artistic identity while creating a seamless client experience — from first impression to booking.',
    highlights: [
      'Custom brand identity and visual language built around the studio\'s tattoo style.',
      'Fully responsive website with online booking integration via Fresha.',
      'Gallery-forward layout to showcase artist portfolios and drive client inquiries.',
      'Google Business and local SEO setup to improve discoverability in the Kelowna area.',
    ],
    url: 'https://www.punkturedart.com',
  },
  {
    id: 2,
    name: 'New Tierra Immigration',
    type: 'Web Design',
    year: '2021 | 24',
    focus: 'Branding, Web Development, Google Integration',
            image1: '/images/new-tierra-immigration/NT-HERO.jpg',
            image2: '/images/new-tierra-immigration/NT-CTA.jpeg',
    description: 'Developed a comprehensive brand identity and digital presence for a Vancouver-based RCIC-regulated immigration consultancy. The goal was to establish a trustworthy, professional platform that simplifies the Canadian immigration process and converts visitors into booked consultations.',
    highlights: [
      'Full brand identity system from logo to typography, aligned with RCIC standards.',
      'Custom website with a client-friendly CMS and fully remote consultation booking.',
      'SEO strategy and Google Suite integration for lead generation and client communication.',
      'Bilingual-ready content structure to serve a global client base.',
    ],
    url: 'https://newtierraimmigration.ca',
  },
  {
    id: 3,
    name: 'CISM Latin America',
    type: 'UI/UX',
    year: '2023 | 24',
    focus: 'Cultural UX Research & Localization Design',
    image1: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=75',
    image2: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=75',
    description: 'Led a UI/UX research initiative to adapt a global platform for the Latin American market. This project involved extensive user research, cultural analysis, and iterative design to ensure the product resonated with local user behaviors and expectations.',
    highlights: [
      'Conducted 50+ user interviews across 3 countries to surface regional UX gaps.',
      'Developed culturally-specific user personas and journey maps.',
      'Designed and prototyped localized UI patterns, improving engagement by 30%.',
      'Delivered a comprehensive design system and handoff documentation for dev teams.',
    ],
    url: 'https://cismlatinamerica.ca/',
  },
  {
    id: 4,
    name: 'HighKey Agency',
    type: 'PR / Branding',
    year: '2019 | 23',
    focus: 'Brand Strategy, PR & NASDAQ Campaign',
    image1: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?auto=format&fit=crop&w=800&q=75',
    image2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=75',
    description: 'Directed the public relations and brand strategy for a high-growth tech company, steering public perception from unknown startup to NASDAQ-listed corporation. Managed media relationships, investor communications, and campaign execution across multiple verticals.',
    highlights: [
      'Secured features in top-tier tech and financial publications including Forbes and Bloomberg.',
      'Developed a strong investor-focused brand narrative that supported a successful NASDAQ listing.',
      'Managed crisis communications and media strategy during high-volatility market periods.',
      'Oversaw content production, campaign planning, and cross-platform brand consistency.',
    ],
    url: 'https://highkeyagency.com',
  },
];

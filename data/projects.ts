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
    name: 'New Tierra Immigration', 
    type: 'Web Design', 
    year: '2021 | 24', 
    focus: 'Branding, development, Google integration', 
    image1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=75',
    description: 'Developed a comprehensive brand identity and digital presence for a modern immigration consultancy. The goal was to create a trustworthy, accessible, and professional platform to guide clients through complex immigration processes.',
    highlights: ['Full brand identity system from logo to typography.', 'Custom website build with a client-friendly CMS.', 'SEO strategy and Google Suite integration for lead generation.'],
    url: 'https://newtierraimmigration.ca'
  },
  { 
    id: 2, 
    name: 'CISM Latin America', 
    type: 'UI/UX', 
    year: '2023 | 24', 
    focus: 'Cultural design research', 
    image1: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=75',
    description: 'Led a UI/UX research initiative to adapt a global platform for the Latin American market. This project involved extensive user research, cultural analysis, and iterative design to ensure the product resonated with local user behaviors and expectations.',
    highlights: ['Conducted 50+ user interviews across 3 countries.', 'Developed culturally-specific user personas and journey maps.', 'Designed and prototyped localized UI patterns, increasing engagement by 30%.'],
    url: 'https://cismlatinamerica.ca/'
  },
  { 
    id: 3, 
    name: 'RTB Brands (Surfaces)', 
    type: 'Web Dev', 
    year: '2024 | 25', 
    focus: 'Massive-scale build (2,000+ pages)', 
    image1: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=75',
    description: 'Architected and developed a large-scale enterprise website for a major surfaces manufacturer. The project required a robust, scalable architecture to manage over 2,000 product pages, technical documents, and regional content variations.',
    highlights: ['Built on a headless architecture for maximum flexibility and performance.', 'Implemented a powerful search and filtering system for a vast product catalog.', 'Automated content migration from legacy systems, saving hundreds of man-hours.'],
    url: 'https://surfacesbyrtb.com'
  },
  { 
    id: 4, 
    name: 'HighKey Agency', 
    type: 'PR / Branding', 
    year: '2019 | 23', 
    focus: 'Nano Nuclear → NASDAQ listing', 
    image1: 'https://images.unsplash.com/photo-1665686306574-1ace09918530?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=75',
    description: 'Directed the public relations and branding strategy for a high-growth tech company, successfully guiding its public perception from an unknown startup (Nano Nuclear) to a successful NASDAQ-listed corporation.',
    highlights: ['Secured features in top-tier tech and financial publications.', 'Developed a strong investor-focused brand narrative.', 'Managed crisis communications during market volatility.'],
    tickerSymbol: 'NASDAQ:NNE',
    url: 'https://highkeyagency.com',
    mediaLinks: [
      { 
        title: 'Nano Nuclear Energy CEO weighs impact of Trump\'s executive orders', 
        url: 'https://www.foxbusiness.com/video/6373400900112', 
        type: 'video',
        description: 'Jay Yu, Founder of Nano Nuclear Energy, discusses how President Trump\'s executive orders affect American energy production and the company’s prospects. (Fox Business, May 23, 2025)'
      },
      { 
        title: 'Trump\'s nuclear reactors are GREAT: Nano Nuclear Energy CEO', 
        url: 'https://www.youtube.com/watch?v=wDZ33sD7iPk', 
        type: 'video',
        description: 'Alternate video clip published on YouTube and featuring Jay Yu discussing the executive orders and their effect on Nano Nuclear’s growth.'
      },
      { 
        title: 'Nano Nuclear Energy founder talks expected Trump exec. orders', 
        url: 'https://finance.yahoo.com/video/nano-nuclear-energy-founder-talks-144500785.html', 
        type: 'video',
        description: 'This article describes how the executive orders of Trump are expected to fast-track advanced nuclear technology and specifically mentions Nano Nuclear’s opportunity to scale up reactor deployments in the U.S.'
      }
    ]
  },
  { 
    id: 5, 
    name: 'Particle Collection', 
    type: 'Video / Design', 
    year: '2021  22', 
    focus: 'Crypto x Art', 
    image1: 'https://images.unsplash.com/photo-1639754502599-565b934032a3?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1642104792689-49b1a755d81b?auto=format&fit=crop&w=800&q=75',
    description: 'Produced a series of promotional videos and design assets for a pioneering project at the intersection of cryptocurrency and fine art. The campaign aimed to demystify NFTs and attract a new wave of collectors to the digital art space.',
    highlights: ['Created a viral video campaign that garnered over 1 million views.', 'Designed a cohesive visual identity across social media and web platforms.', 'Collaborated with renowned digital artists to showcase the platform\'s potential.'],
    url: 'https://particlecollection.com'
  },
  { 
    id: 6, 
    name: 'InkFlow App', 
    type: 'SaaS', 
    year: '2025', 
    focus: 'Tattoo CRM & content system', 
    image1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1603899122634-f086ca5f0ddd?auto=format&fit=crop&w=800&q=75',
    description: 'Designed and prototyped a SaaS application specifically for tattoo artists. InkFlow is a CRM and content management system that streamlines booking, client management, and portfolio showcasing, allowing artists to focus on their craft.',
    highlights: ['User-centric design based on interviews with 20+ tattoo artists.', 'AI-powered caption generation for social media posts.', 'Integrated scheduling and deposit system to reduce no-shows.'],
    url: 'https://ink-flow-3ab2297c.base44.app'
  },
  { 
    id: 7, 
    name: 'Client Mastery Suite', 
    type: 'SaaS', 
    year: '2024', 
    focus: 'CRM, Performance Journal, Negotiation Coach', 
    image1: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=75',
    description: "Client Mastery Suite is a personal operating system for freelancers, tattoo artists, and trainers who treat their craft like a business. It's a discipline engine disguised as a CRM, built on the philosophy that solo operators need to track their own energy, understand their value, and follow up consistently to succeed. The app is designed for professionals who see themselves as craftsmen, with a dark mode, matte black, and gold accented UI that feels like a high-end notebook meets a performance dashboard.",
    highlights: [
      'Smart CRM: Track every client from lead to close with confidence meters, budget tracking, and category filtering.',
      'Negotiation Coach: Built-in "10 Commandments of Client Mastery" with real-world examples for various professions.',
      'Performance Journal: A 90-day "Striker System" for tracking daily focus, gratitude, KPIs, and quarterly reflection.',
      'Designed to fix the three main failure points for freelancers: lack of follow-up, undercharging, and burnout.'
    ],
    url: 'https://client-mastery-suite-0562991d.base44.app'
  },
  { 
    id: 8, 
    name: 'AI-Powered Drive', 
    type: 'Full-Stack', 
    year: '2024', 
    focus: 'React, Gemini API, Drive API', 
    image1: 'https://images.unsplash.com/photo-1585933646706-7b42967a4da2?auto=format&fit=crop&w=800&q=75', 
    image2: 'https://images.unsplash.com/photo-1611095965923-893a73a39e3c?auto=format&fit=crop&w=800&q=75',
    description: 'A full-stack Google Drive clone supercharged with AI capabilities. This application allows users to manage their files and folders, with the added power of Gemini to perform smart actions like summarizing documents, generating content, and answering questions about their files.',
    highlights: [
      'Secure file upload, storage, and organization.',
      'Integration with Google Drive API for seamless file management.',
      'AI-powered features using the Gemini API for content analysis and generation.',
      'Modern, responsive interface built with React and Tailwind CSS.'
    ],
    url: 'https://ai.studio/apps/drive/1gIZ5GkEjwOPh1rebSFeSrgAaFX-_NyWP'
  }
];
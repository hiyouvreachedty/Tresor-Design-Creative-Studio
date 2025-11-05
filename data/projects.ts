export interface Project {
  id: number;
  name: string;
  category: string;
  image1: string;
  image2: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'IRYS',
    category: 'WEB3',
    image1: 'https://picsum.photos/seed/irys1/400/400',
    image2: 'https://picsum.photos/seed/irys2/400/400',
  },
  {
    id: 2,
    name: 'BREX',
    category: 'FINANCE',
    image1: 'https://picsum.photos/seed/brex1/400/400',
    image2: 'https://picsum.photos/seed/brex2/400/400',
  },
  {
    id: 3,
    name: 'PERPLEXITY',
    category: 'AI',
    image1: 'https://picsum.photos/seed/perplexity1/400/400',
    image2: 'https://picsum.photos/seed/perplexity2/400/400',
  },
  {
    id: 4,
    name: 'LA MARZOCCO',
    category: 'COMMERCE',
    image1: 'https://picsum.photos/seed/lamarzocco1/400/400',
    image2: 'https://picsum.photos/seed/lamarzocco2/400/400',
  },
  {
    id: 5,
    name: 'RRE VENTURES',
    category: 'VENTURE',
    image1: 'https://picsum.photos/seed/rre1/400/400',
    image2: 'https://picsum.photos/seed/rre2/400/400',
  },
  {
    id: 6,
    name: 'BREX AI',
    category: 'FINANCE',
    image1: 'https://picsum.photos/seed/brexai1/400/400',
    image2: 'https://picsum.photos/seed/brexai2/400/400',
  },
];

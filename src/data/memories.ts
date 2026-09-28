

export interface MemoryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  caption: string;
  date?: string;
  chapter?: string;
  tag?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
}

export const MEMORIES_DATA: MemoryItem[] = [
  {
    id: 1,
    type: 'video',
    src: '/memories/01.mp4' ,
    caption: '',
    date: 'Memory 01',
    chapter: 'The Main Character',
    tag: 'AURA',
    aspectRatio: 'portrait',
    featured: true,
  },
  {
    id: 2,
    type: 'video',
    src: '/memories/02.mp4',
    caption: '',
    date: 'Memory 02',
    chapter: 'Her Universe',
    tag: 'MOMENTS',
    aspectRatio: 'portrait',
  },
  {
    id: 3,
    type: 'video',
    src: '/memories/03.mp4',
    caption: '',
    date: 'Memory 03',
    chapter: 'Motion',
    tag: 'ENERGY',
    aspectRatio: 'portrait',
  },
  {
    id: 4,
    type: 'video',
    src: '/memories/04.mp4',
    caption: '',
    date: 'Memory 04',
    chapter: 'Chronicles',
    tag: 'FOCUS',
    aspectRatio: 'portrait',
  },
  {
    id: 5,
    type: 'video',
    src: '/memories/05.mp4',
    caption: '',
    date: 'Memory 05',
    chapter: 'Vibes',
    tag: 'COSMIC',
    aspectRatio: 'portrait',
  },
  {
    id: 6,
    type: 'video',
    src: '/memories/06.mp4',
    caption: '',
    date: 'Memory 06',
    chapter: 'Cinematic',
    tag: 'EPISODE 23',
    aspectRatio: 'portrait',
  },
  {
    id: 7,
    type: 'video',
    src: '/memories/07.mp4',
    caption: '',
    date: 'Memory 07',
    chapter: 'Golden Moments',
    tag: 'RADIANT',
    aspectRatio: 'portrait',
  },
  {
    id: 8,
    type: 'image',
    src: '/memories/08.jpeg',
    caption: '',
    date: 'Memory 08',
    chapter: 'Frames',
    tag: 'PORTRAIT',
    aspectRatio: 'portrait',
  },
  {
    id: 9,
    type: 'image',
    src: '/memories/09.jpeg',
    caption: '',
    date: 'Memory 09',
    chapter: 'Stills',
    tag: 'ELEGANCE',
    aspectRatio: 'portrait',
  },
  {
    id: 10,
    type: 'video',
    src: '/memories/10.mp4',
    caption: '',
    date: 'Memory 10',
    chapter: 'Adventures',
    tag: 'LIVELY',
    aspectRatio: 'portrait',
  },
  {
    id: 11,
    type: 'image',
    src: '/memories/11.jpeg',
    caption: '',
    date: 'Memory 11',
    chapter: 'Connections',
    tag: 'MEMORIES',
    aspectRatio: 'portrait',
  },
  {
    id: 12,
    type: 'video',
    src: '/memories/12.mp4',
    caption: '',
    date: 'Memory 12',
    chapter: 'Chapter 23',
    tag: 'LEVEL 23',
    aspectRatio: 'portrait',
    featured: true,
  },
];

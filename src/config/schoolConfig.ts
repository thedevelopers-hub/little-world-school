/**
 * Little World School - Centralized School Configuration
 * Preserves official school name, verified Ambivli postal address,
 * Google Maps destination, and curated high-quality preschool photography.
 */

export interface SchoolClassItem {
  id: 'pg' | 'nursery' | 'jkg' | 'skg' | 'grade1_12';
  ageRange: string;
  badgeColor: string;
  image: string;
}

export const SCHOOL_CLASSES: SchoolClassItem[] = [
  {
    id: 'pg',
    ageRange: '1.8 - 2.5 Years',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    image:
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80', // toddler playing with colorful wooden shapes
  },
  {
    id: 'nursery',
    ageRange: '2.5 - 3.5 Years',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80', // smiling child learning phonics
  },
  {
    id: 'jkg',
    ageRange: '3.5 - 4.5 Years',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80', // kids painting with bright watercolors
  },
  {
    id: 'skg',
    ageRange: '4.5 - 5.5 Years',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80', // young child exploring storybooks
  },
  {
    id: 'grade1_12',
    ageRange: '6 - 18 Years',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', // happy students in modern classroom
  },
];

export const SCHOOL_IMAGES = {
  // Hero Main Visual - Joyful children playing and building together in warm daylight
  heroMain:
    'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
  // Hero Secondary / Circle time
  heroSecondary:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  // About section classroom interaction
  aboutStory:
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
  aboutTeacher:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',

  // Facilities photography
  facilities: [
    {
      id: 'smart-class',
      image:
        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'play-zone',
      image:
        'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'library',
      image:
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'art-studio',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cctv-safety',
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'hygiene-water',
      image:
        'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'transport',
      image:
        'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'first-aid',
      image:
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
  ],

  // Gallery authentic photographs
  gallery: [
    {
      id: 'g1',
      category: 'activities',
      image:
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g2',
      category: 'campus',
      image:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g3',
      category: 'celebrations',
      image:
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g4',
      category: 'sports',
      image:
        'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g5',
      category: 'activities',
      image:
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'g6',
      category: 'campus',
      image:
        'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export const SCHOOL_CONFIG = {
  // Official School Name - Keep unchanged across all languages
  officialName: 'Little World School',

  // Official Verified Postal Address
  officialAddress:
    'Neptune Swarajya, Swarajya Road, Village Ambivli (West), Taluka Kalyan, District Thane, Maharashtra – 421102, India.',

  // Landmark
  landmark: 'Near Ambivli Railway Station.',

  // Verified Google Maps URL - Unchanged across languages
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Neptune%20Swarajya%2C%20Ambivli%2C%20Thane%2C%20Maharashtra%20421102',

  // Phone & Communication
  phoneDisplay: '+91 8652681370',
  phoneCall: '+918652681370',
  alternatePhone: '+91 8652681370',
  email: 'admissions@littleworldschool.edu.in',

  // WhatsApp click-to-chat raw number (without + or spaces)
  whatsappNumber: '918652681370',

  // Operating Hours
  officeHours: 'Mon - Sat: 8:30 AM – 4:30 PM',
  prePrimaryTimings: '9:00 AM – 12:30 PM',
  primaryTimings: '8:00 AM – 2:00 PM',
  secondaryTimings: '7:30 AM – 1:30 PM',

  // Affiliation and Establishment
  establishedYear: '2016',
  mediumOfInstruction: 'English Medium with Multilingual Marathi & Hindi Pastoral Care',
  boardFocus: 'Holistic Early Childhood & Progressive State/CBSE Foundation',

  // Coordinates for Schema.org / maps preview
  geo: {
    latitude: 19.2785,
    longitude: 73.1818,
  },
};

/**
 * Developer Contact Configuration
 * Strictly separated from the school's official admissions enquiry number.
 * Exclusively for developer credit in footer. Phone number is not visibly displayed.
 */
export const DEVELOPER_CONFIG = {
  name: 'VICKY',
  brand: 'VICTORIX',
  role: 'Website Designer & Developer',
  whatsappUrl:
    'https://wa.me/916387661594?text=Hello%20Vicky%2C%20I%20am%20interested%20in%20getting%20a%20professional%20website%20developed.',
};

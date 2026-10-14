

export const creditLists = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Pokemon" },
  { id: 3, name: "Jennifer Lopez" },
  { id: 4, name: "Dr. Martens" },
  { id: 5, name: "Billboard Magazine" },
  { id: 6, name: "Elle Magazine" },
  { id: 7, name: "The Hollywood Reporter" },
  { id: 8, name: "Teen Vogue" },
  { id: 9, name: "Fear of God" },
  { id: 10, name: "Buzzfeed" },
  { id: 11, name: "Puma" },
  { id: 12, name: "Daily Harvest" },
  { id: 13, name: "Reebok" },
  { id: 14, name: "City of Los Angeles" },
  { id: 15, name: "300 Entertainment" },
  { id: 16, name: "Interscope Records" },
  { id: 17, name: "Universal Music Group" },
  { id: 18, name: "True Religion" },
  { id: 19, name: "Coach" },
  { id: 20, name: "GOAT" },
  { id: 21, name: "Harpers Bazaar" },
  { id: 22, name: "Alexander Wang" },
  { id: 23, name: "Casio" },
  { id: 24, name: "Megan Thee Stallion" },
  { id: 25, name: "TDE" },
  { id: 26, name: "Karla Otto" },
  { id: 27, name: "Doubleday & Cartwright" },
  { id: 28, name: "Team Epiphany" },
];

type Project = {
  id: number;
  title: string;
  homePhotos?: string[];
  projectPhotos?: string[];
  videos?: string[];
  youtubeUrl?: string;
  vimeoUrl?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Jennifer Lopez",
    homePhotos: ["/images/jlo/image1.png", "/images/jlo/image2.jpg", "/images/jlo/image3.jpg"],
    // videos: ["/images/jlo/video1.mp4", "/images/jlo/video2.mp4"],
    projectPhotos: [],
    youtubeUrl: "https://www.youtube.com/watch?v=MXIe0Nu9w_4",
  },
  {
    id: 2,
    title: "Pokemon",
    homePhotos: ["/images/pokemon/image1.jpg", "/images/pokemon/image2.jpg", "/images/pokemon/image3.png"],
    projectPhotos: [],
    youtubeUrl: "https://www.youtube.com/watch?v=67bHL8Qn8Pk"
  },
  {
    id: 4,
    title: "True Religion",
    homePhotos: ["/images/truereligion/image1.png", "/images/truereligion/image2.png", "/images/truereligion/image3.png"],
    projectPhotos: [
      "/images/truereligion/image4.jpg",
      "/images/truereligion/image5.jpg",
      "/images/truereligion/image6.jpg",
      "/images/truereligion/image7.jpg",
      "/images/truereligion/image8.jpg",
      "/images/truereligion/image9.jpg",
      "/images/truereligion/image10.jpg",
      "/images/truereligion/image11.jpg",
      "/images/truereligion/image12.jpg",
      "/images/truereligion/image13.jpg",
      "/images/truereligion/image14.jpg",
      "/images/truereligion/image15.jpg",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=r-OvJ9bcIgI"
  },
  {
    id: 3,
    title: `Jordan x Union: "AJ1: I'm Back"`,
    homePhotos: ["/images/jordanunion/image1.png", "/images/jordanunion/image2.png", "/images/jordanunion/image3.png"],
    projectPhotos: [
      "/images/jordanunion/image4.jpg",
      "/images/jordanunion/image5.jpg",
      "/images/jordanunion/image6.jpg",
      "/images/jordanunion/image7.jpg",
      "/images/jordanunion/image8.jpg",
      "/images/jordanunion/image9.jpg",
    ],
    vimeoUrl: ["https://vimeo.com/1233903541", "https://vimeo.com/1233903540", "https://vimeo.com/1233903538", "https://vimeo.com/1233903539"]
    // videos: ["/images/jordanunion/video1.mp4", "/images/jordanunion/video2.mp4", "/images/jordanunion/video3.mp4", "/images/jordanunion/video4.mp4", "/images/jordanunion/video5.mp4", "/images/jordanunion/video6.mp4",],
  },
  {
    id: 5,
    title: "Dr. Martens",
    homePhotos: ["/images/docmartens/image1.png", "/images/docmartens/image2.jpg", "/images/docmartens/image3.png"],
    projectPhotos: [
      "/images/docmartens/image4.webp",
      "/images/docmartens/image5.webp",
      "/images/docmartens/image6.webp",
      "/images/docmartens/image7.webp",
      "/images/docmartens/image8.webp",
      "/images/docmartens/image9.webp",
      "/images/docmartens/image10.webp",
      "/images/docmartens/image11.webp",
      "/images/docmartens/image12.webp",
      "/images/docmartens/image13.webp",
    ],
  },
  {
    id: 6,
    title: `Nike x Union: "Field General"`,
    homePhotos: ["/images/nikeunion/image1.png", "/images/nikeunion/image2.png", "/images/nikeunion/image3.png"],
    projectPhotos: ["/images/nikeunion/image4.jpg", "/images/nikeunion/image5.png"],
    vimeoUrl: ["https://vimeo.com/957485508/c3dbd92ee9"]
  },
];

export const nav = [
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];
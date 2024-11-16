interface NavbarItem {
  id: number;
  label: string;
  path: string;
  submenu?: NavbarItem[];
}

export const navbarList: NavbarItem[] = [
  {
    id: 1,
    label: "HOME",
    path: "/",
  },
  {
    id: 2,
    label: "THE CELESTIALS",
    path: "/the-celestials",
  },
  {
    id: 3,
    label: "ROADMAP",
    path: "#",
  },
  {
    id: 4,
    label: "SOUNDTRACKS",
    path: "/sound-tracks",
  },
  {
    id: 5,
    label: "ABOUT",
    path: "#",
    submenu: [
      {
        id: 5.1,
        label: "BOREDPUMA X SPLASH",
        path: "/about/boredpuma-x-splash",
      },
      { id: 5.2, label: "THE TEAM", path: "/about/the-team" },
    ],
  },
  {
    id: 6,
    label: "BUY",
    path: "#",
    submenu: [
      {
        id: 6.1,
        label: "THE CELESTIALS NFT",
        path: "#",
      },
    ],
  },
];

interface TeamItem {
  title: string;
  subtitle: string;
  image: string;
}

export const TeamData: TeamItem[] = [
  {
    title: "ALY RAZA BEIG",
    subtitle: "Founder",
    image: "/image/NOIR-3.png",
  },
  {
    title: "JONGSAC",
    subtitle: "Artist and Designer",
    image: "/image/ROUGE-3.png",
  },
  {
    title: "ROBIN GRGIC",
    subtitle: "Game Developer",
    image: "/image/BLANC-2.png",
  },
  {
    title: "KLARA BRODAHL",
    subtitle: "Content Creator",
    image: "/image/MIZU-2.png",
  },
];

interface Tracks {
  name: string;
  author: string;
  duration: string;
  imageUrl: string;
}

export const Tracks: Tracks[] = [
  {
    name: "Rouge (feat. TAC)",
    author: "Robu, TAC",
    duration: "0:00",
    imageUrl: "/image/Rouge-1.png",
  },
  {
    name: "Blanc",
    author: "Robu",
    duration: "0:00",
    imageUrl: "/image/Blanc-1.png",
  },
  {
    name: "Noir",
    author: "Robu, Slapvibe",
    duration: "0:00",
    imageUrl: "/image/Noir-1.png",
  },
  {
    name: "Mizu",
    author: "Slapvibe",
    duration: "0:00",
    imageUrl: "/image/Mizu-1.png",
  },
  {
    name: "Rouge (feat. TAC)",
    author: "Robu, TAC",
    duration: "0:00",
    imageUrl: "/image/Rouge-1.png",
  },
  {
    name: "Blanc",
    author: "Robu",
    duration: "0:00",
    imageUrl: "/image/Blanc-1.png",
  },
  {
    name: "Noir",
    author: "Robu, Slapvibe",
    duration: "0:00",
    imageUrl: "/image/Noir-1.png",
  },
  {
    name: "Mizu",
    author: "Slapvibe",
    duration: "0:00",
    imageUrl: "/image/Mizu-1.png",
  },
];

export interface CelestialsTypes {
  src?: string;
  modalSrc?: string;
  mobileSrc?: string;
  color?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export const CelestialsData: CelestialsTypes[] = [
  {
    src: "/image/MIZU-3.png",
    modalSrc: "/image/MIZU-full.png",
    mobileSrc: "/image/MIZU-2.png",
    color: "#2d4eb9",
    alt: "Mizu-3",
    title: "MIZU",
    subtitle: "THE WATER CELESTIAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius blandit felis mattis proin massa leo. Nunc odio magna mattis aliquet lorem posuere fringilla ac. Proin nec montes, laoreet lacus, varius. Pharetra, dui morbi tristique at risus sagittis, pellentesque. Et lacus ac eu sed. Amet eget eleifend elit magna volutpat, at tristique. Tincidunt ut odio erat gravida fames. Id est faucibus porttitor laoreet ornare platea eget magna hendrerit. Elementum tellus amet aenean fusce enim velit nisi aliquam tempus. Morbi ac eget ipsum egestas nulla. Vestibulum, mattis dui quis accumsan. Rutrum in blandit leo amet, tincidunt gravida mi, felis. Mauris semper est nunc ultricies bibendum consequat ut pulvinar.",
  },
  {
    src: "/image/ROUGE-2.png",
    modalSrc: "/image/ROUGE-full.png",
    mobileSrc: "/image/ROUGE-3.png",
    color: "#c52a34",
    alt: "ROUGE-2",
    title: "ROUGE",
    subtitle: "THE FIRE CELESTIAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius blandit felis mattis proin massa leo. Nunc odio magna mattis aliquet lorem posuere fringilla ac. Proin nec montes, laoreet lacus, varius. Pharetra, dui morbi tristique at risus sagittis, pellentesque. Et lacus ac eu sed. Amet eget eleifend elit magna volutpat, at tristique. Tincidunt ut odio erat gravida fames. Id est faucibus porttitor laoreet ornare platea eget magna hendrerit. Elementum tellus amet aenean fusce enim velit nisi aliquam tempus. Morbi ac eget ipsum egestas nulla. Vestibulum, mattis dui quis accumsan. Rutrum in blandit leo amet, tincidunt gravida mi, felis. Mauris semper est nunc ultricies bibendum consequat ut pulvinar.",
  },
  {
    src: "/image/BLANC-3.png",
    modalSrc: "/image/BLANC-full.png",
    mobileSrc: "/image/BLANC-2.png",
    color: "#94d5f9",
    alt: "BLANC-3",
    title: "BLANC",
    subtitle: "THE ICE CELESTIAL",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius blandit felis mattis proin massa leo. Nunc odio magna mattis aliquet lorem posuere fringilla ac. Proin nec montes, laoreet lacus, varius. Pharetra, dui morbi tristique at risus sagittis, pellentesque. Et lacus ac eu sed. Amet eget eleifend elit magna volutpat, at tristique. Tincidunt ut odio erat gravida fames. Id est faucibus porttitor laoreet ornare platea eget magna hendrerit. Elementum tellus amet aenean fusce enim velit nisi aliquam tempus. Morbi ac eget ipsum egestas nulla. Vestibulum, mattis dui quis accumsan. Rutrum in blandit leo amet, tincidunt gravida mi, felis. Mauris semper est nunc ultricies bibendum consequat ut pulvinar.",
  },
  {
    src: "/image/NOIR-2.png",
    modalSrc: "/image/NOIR-full.png",
    mobileSrc: "/image/NOIR-3.png",
    color: "#189d8a",
    alt: "NOIR-2",
    title: "NOIR",
    subtitle: "THE DARK CELESTIAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius blandit felis mattis proin massa leo. Nunc odio magna mattis aliquet lorem posuere fringilla ac. Proin nec montes, laoreet lacus, varius. Pharetra, dui morbi tristique at risus sagittis, pellentesque. Et lacus ac eu sed. Amet eget eleifend elit magna volutpat, at tristique. Tincidunt ut odio erat gravida fames. Id est faucibus porttitor laoreet ornare platea eget magna hendrerit. Elementum tellus amet aenean fusce enim velit nisi aliquam tempus. Morbi ac eget ipsum egestas nulla. Vestibulum, mattis dui quis accumsan. Rutrum in blandit leo amet, tincidunt gravida mi, felis. Mauris semper est nunc ultricies bibendum consequat ut pulvinar.",
  },
];

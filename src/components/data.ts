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

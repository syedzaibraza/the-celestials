interface NavbarItem {
  id: number;
  label: string;
  path: string;
  submenu?: NavbarItem[];
}

const navbarList: NavbarItem[] = [
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

export default navbarList;

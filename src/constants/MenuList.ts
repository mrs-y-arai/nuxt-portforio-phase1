export interface MenuListType {
  id: number;
  to: string;
  name: string;
}

export const MenuList: MenuListType[] = [
  {
    id: 1,
    to: "/",
    name: "home",
  },
  {
    id: 2,
    to: "/about",
    name: "about",
  },
  {
    id: 3,
    to: "/works",
    name: "works",
  },
  {
    id: 3,
    to: "/skills",
    name: "skills",
  },
];

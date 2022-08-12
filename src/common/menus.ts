export interface IMenuItem {
  key: string;
  label: string;
  path: string;
  paths?: IMenuItem[];
}

export const MENUS = [
  {
    key: 'home',
    path: '/home',
    label: 'Home'
  },
  {
    key: 'products',
    path: '/products',
    label: 'Products'
  },
]
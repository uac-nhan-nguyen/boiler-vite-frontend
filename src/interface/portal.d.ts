export interface IConfig {
  menus: IMenu[],
}

interface IMenu {
  key: string
  label: string
  items?: IMenu[]
}

export interface IPage {
  title?: string;
}


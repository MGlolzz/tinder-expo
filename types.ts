export type CardItemT = {
  description?: string;
  age?: string;
  info1?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  firstDate?: string;
  description?: string;
  location?: string;
  matches: string;
  name: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  firstDate?:string;
  message: string;
  image: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
};

export type AccountT = {
  id: number;
  name: string;
  description: string;
  image: any;
  firstDate?:string;
  age?: string;
  interest?: string;
  background?: string;
  hobby?: string;
  location?: string;
};

export type ChatT = {

  id:number,
  date:string, 
  type:string, 
  message: string,
};

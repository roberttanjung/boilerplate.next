interface KeyType {
  [key: string]: string;
}

interface ListMenuType {
  id: string;
  path: string;
  label: KeyType;
  icon?: string;
  highlights?: string[];
  children?: ListMenuType[];
}

export default ListMenuType;

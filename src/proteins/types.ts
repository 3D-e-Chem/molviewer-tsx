export interface IRestProtein {
  id: string;
  label: string;
  data: string;
  format: string;
}

export interface IProtein extends IRestProtein {
  visible: boolean;
  hetVisible: boolean;
  pocketVisible: boolean;
}

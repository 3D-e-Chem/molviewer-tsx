export interface IRestProtein {
  readonly id: string;
  readonly label: string;
  readonly data: string;
  readonly format: string;
}

export interface IProtein extends IRestProtein {
  visible: boolean;
  hetVisible: boolean;
  pocketVisible: boolean;
}

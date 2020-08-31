export interface IDataColors {
  id: number;
  colorName: string;
  hexcode: string;
  saturation: number;
  category: string;
}

export interface IProps {
  data: IDataColors[];
}

export interface IDataColor {
  colorName: string;
  hexcode: string;
}
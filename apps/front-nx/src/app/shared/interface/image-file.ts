import { IEntity } from "./entity";

export interface IImageFile extends IEntity{
  fid: number,
  filemime?: string,
  filesize?: number,
  styles: IImageStyles
}

interface IImageStyles {
  [key: string]: string;
}

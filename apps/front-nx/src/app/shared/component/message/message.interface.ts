import { IEntity } from "../../interface/entity";
import { IImageFile } from "../../interface/image-file";

export interface IMessage extends IEntity {
  nid: number,
  title: string,
  body: string,
  images: IImageFile[]
}

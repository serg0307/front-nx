import { IEntity } from "../shared/interface/entity";
import { IImageFile } from "../shared/interface/image-file";

export interface IUser extends IEntity{
  uid: number;
  title: string;
  avatar: IImageFile;
}

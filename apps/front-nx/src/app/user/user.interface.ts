import { IAchievement } from "../shared/UI/achievement/achievement.interface";
import { IEntity } from "../shared/interface/entity";
import { IImageFile } from "../shared/interface/image-file";

export interface IUser extends IEntity{
  uid: number;
  name: string;
  avatar: IImageFile;
  coverImage: IImageFile;
  description: string;
  coverText: string;
  achievements: IAchievement[];
}

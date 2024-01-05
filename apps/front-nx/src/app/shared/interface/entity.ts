import { IUser } from "../../user/user.interface";

export interface IEntity {
  uuid: string,
  type: string,
  created: Date,
  author: IUser,
}

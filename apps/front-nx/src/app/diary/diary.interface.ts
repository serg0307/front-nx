import { IMessage } from "../shared/component/message/message.interface";

export interface DiaryItem {
  uuid: string;
  type: 'post' | 'repost';
  entity: IMessage;
}

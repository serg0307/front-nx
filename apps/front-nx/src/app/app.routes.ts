import { Route } from '@angular/router';
import { MessageComponent } from './shared/component/message/message.component';
import { DiaryComponent } from './diary/diary.component';
import { WelcomeComponent } from './shared/component/welcome/welcome.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Route[] = [
  {path: '', component: WelcomeComponent},
  {path: 'diary', component: DiaryComponent},
  {path: 'diary/:id', component: MessageComponent},
  {path: 'user', component: UserComponent},
];

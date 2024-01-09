import { Route } from '@angular/router';
import { MessageComponent } from './shared/component/message/message.component';
import { DiaryComponent } from './diary/diary.component';
import { WelcomeComponent } from './shared/component/welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './shared/component/user-login/user-login.component';
import { UserRegisterComponent } from './shared/component/user-register/user-register.component';
import { NotificationsPanelComponent } from './shared/UI/notifications-panel/notifications-panel.component';

export const appRoutes: Route[] = [
  {path: '', component: WelcomeComponent},
  {path: 'diary', component: DiaryComponent},
  {path: 'diary/:id', component: MessageComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'notifications-panel', component: NotificationsPanelComponent},
];

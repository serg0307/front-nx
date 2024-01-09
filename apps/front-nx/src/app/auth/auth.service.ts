import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL_SIGNAL_SERVICE } from '../services/global-signal.service';
import { LocalStorageService } from '../services/local-storage.service';
import { IUser } from '../user/user.interface';
import { v1 as uuidv1 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  localStorageService = inject(LocalStorageService);
  private state = signal<AuthState>({
    user: <IUser>{},
    access_token: '',
    status: false,
    uuid: ''
  });
  uuid = computed(() => this.state().uuid);
  user = computed(() => this.state().user);
  token = computed(() => this.state().access_token);
  status = computed(() => this.state().status);
  uid = -1;
  constructor(private client: HttpClient) { }

  login(credentials: Cred): void {
    console.log('logging in');
    this.client.post('/api/auth/login', credentials).subscribe((data) => {
      const d = <LoginResponse>data;
      let user = d.user;
      let access_token = d.access_token;
      const status = d.status;
      const uuid = uuidv1();
      this.globalSignalService.setSignal('currentUser', d.user);
      if (d.status) {
        this.state.update((state) => ({
          ...state,
          user,
          access_token,
          status,
          uuid
        }));
        this.localStorageService.setItem('sparkl_cu', JSON.stringify(user));
        this.localStorageService.setItem('sparkl_at', access_token);
      } else {
        user = <IUser>{};
        access_token = '';
        this.state.update((state) => ({
          ...state,
          user,
          access_token,
          status,
          uuid
        }));
        this.localStorageService.clear();
      }
    });
  }
  isTokenValid(): void {
    if (!this.token()) {
      console.log('NO token passed');
      const token = this.localStorageService.getItem("sparkl_at");
      if (token) {
        this.token = computed(() => token);
      }
    }
    if (this.token()) {
      console.log('token passed');
      this.client.get('/api/auth/jwt-check').subscribe((data: any) => {
        const status = data.status;
        this.state.update((state) => ({
          ...state,
          status,
        }));
      })
    }
  }
  updateUserSignal(user: IUser): void {
    this.state.update((state) => ({
      ...state,
      user,
    }));
  }
  logout(): void {
    this.localStorageService.clear();
    this.token = computed(() => '');

    if (this.status()) {
      this.client.get('/api/auth/logout').subscribe(data => {
        console.log('logged out', data);
      });
      const status = false;
      const user = <IUser>{};
      this.state.update((state) => ({
        ...state,
        status,
        user
      }));
    }
  }
  refreshToken() {
    this.client.get('/api/auth/jwt').subscribe(data => {
      console.log(data);
    });
  }
  getUserUuidFromLocalStorage(): string {
    const string = this.localStorageService.getItem("sparkl_cu");
    if (string) {
      const user = JSON.parse(string);
      return user.uuid;
    }
    return '';
  }
}
type LoginResponse = {
  user: IUser;
  access_token: string;
  status: boolean;
  expires: Date;
}
export type Cred = {
  username: string;
  password: string;
}
type AuthState = {
  user: IUser;
  access_token: string;
  status: boolean;
  uuid: string;
}

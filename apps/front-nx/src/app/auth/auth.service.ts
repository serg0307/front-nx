import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL_SIGNAL_SERVICE } from '../services/global-signal.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  localStorageService = inject(LocalStorageService);
  private state = signal<AuthState>({
    user: undefined,
    access_token: '',
    expires: new Date(0)
  });
  user = computed(() => this.state().user);
  token = computed(() => this.state().access_token);
  exp = computed(() => this.state().expires);
  constructor(private client: HttpClient) { }

  login(credentials: Cred): void {
    console.log('logging in');
    this.client.post('/api/auth/login', credentials).subscribe((data) => {
      const d = <LoginResponse>data;
      const user = d.current_user;
      const access_token = d.access_token;
      const expires = d.expires;
      this.globalSignalService.setSignal('currentUser', d.current_user);
      if (d.status) {
        this.state.update((state) => ({
          ...state,
          user,
          access_token,
          expires
        }));
        this.localStorageService.setItem('sparkl_at',access_token);
        this.localStorageService.setItem('sparkl_exp',d.expires.toString());
      }
    });
  }
  isTokenValid(): void {
    console.log(this.token());
    if (!this.token()) {
      const token = this.localStorageService.getItem("sparkl_at");
      if (token) {
        this.token = computed(()=> token);
      }
    } else {
      this.client.get('/api/auth/jwt-check').subscribe(data => {
        console.log(data);
      })
    }
  }
  logout(): void {
    this.client.get('/api/auth/logout').subscribe(data=> {
      console.log('logged out', data);
      this.localStorageService.clear();
      this.token = computed(() => '');
      this.exp = computed(() => new Date(0));
    });
  }
  /*refreshToken() {
    this.client.get('/api/auth/jwt-check').subscribe(data => {
      console.log(data);
    });
  }/** */
}
type LoginResponse = {
  current_user: AuthUser;
  access_token: string;
  status: boolean;
  expires: Date;
}
type Cred = {
  username: string;
  password: string;
}
type AuthUser = UserInfo | null | undefined;
type UserInfo = {
  uid: number;
  name: string;
}
type AuthState = {
  user: AuthUser;
  access_token: string;
  expires: Date;
}

import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

class Token {
  authService = inject(AuthService);
  public get() {
    return this.authService.token();
  }
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = new Token;
  const access_token = token.get();
  if (!access_token) return next(req);
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${access_token}`
    }
  });
  return next(req);
}

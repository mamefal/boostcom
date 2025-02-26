import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('authToken'); // Récupère le token

    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
        withCredentials: true // 🔴 Important si backend gère des sessions
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}

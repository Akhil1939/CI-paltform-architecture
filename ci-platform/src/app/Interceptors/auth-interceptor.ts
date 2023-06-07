import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}
    token = this.cookieService.get('token');

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
    return next.handle(request);
  }
}
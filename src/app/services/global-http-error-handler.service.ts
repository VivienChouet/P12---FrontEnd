import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalHttpErrorHandlerService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry({
        count: 3,
        delay: (_, retryCount) => timer(retryCount * 1000),
      }),
      catchError((err) => {
        console.warn('Error handled by HTTP Interceptor');
        return throwError(() => err);
      })
    );
  }
}

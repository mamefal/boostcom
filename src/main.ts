import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent,  {
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideRouter(routes) 
  ], 
  ...appConfig
}).catch(err => console.error(err));

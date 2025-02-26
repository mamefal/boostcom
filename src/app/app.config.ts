import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';  // Utilisez withHashLocation ici
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(FormsModule, ReactiveFormsModule, HttpClientModule),
    provideRouter(routes, withHashLocation()),  
    provideClientHydration(withEventReplay()),
    provideHttpClient()
    
  ]
};

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NosServicesComponent } from './nos-services/nos-services.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nos-services', component: NosServicesComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

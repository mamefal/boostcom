import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component'; 
import { ContactRoutingModule } from './contact-routing.module';


const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,
    ContactComponent, 
    ContactRoutingModule,
  ]
})
export class ContactModule { }

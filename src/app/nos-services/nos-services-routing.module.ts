import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosServicesComponent } from './nos-services.component'; // ✅ Import correct

const routes: Routes = [
  { path: '', component: NosServicesComponent } // ✅ Chemin correct pour une route feature
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // ✅ "forChild" est correct ici
  exports: [RouterModule]
})
export class NosServicesRoutingModule { }

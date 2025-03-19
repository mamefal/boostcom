import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import nécessaire pour *ngFor

@Component({
  selector: 'app-nos-services',
  standalone: true,
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css'],
  imports: [CommonModule] 
})
export class NosServicesComponent { 
  services = [
    { title: 'Recrutement de Commerciaux', description: 'Nous trouvons les meilleurs commerciaux pour votre entreprise.' },
    { title: 'Gestion de Commerciaux', description: 'Nous optimisons la performance de votre équipe commerciale.' },
    { title: 'Nettoyage & Conciergerie', description: 'Des services de propreté et gestion pour vos locaux.' },
    { title: 'Gestion Immobilière', description: 'Administration et valorisation de vos biens immobiliers.' }
  ];
}

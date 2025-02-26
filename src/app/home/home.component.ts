import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data;
        this.loading = false;
      },
      error: (error: Error) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    });
  }
}
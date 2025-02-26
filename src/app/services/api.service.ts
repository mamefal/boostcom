import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL correcte

  constructor(private http: HttpClient) { }

  // ✅ Authentification
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials, {
      withCredentials: true // 🔴 Si le backend utilise des sessions
    });
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, userData);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/logout`, {});
  }

  // ✅ Gestion des utilisateurs
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`);
  }

  // ✅ Gestion des produits
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${id}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/products/${id}`);
  }

  // ✅ Recherche & Filtres
  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products/search?query=${query}`);
  }

  getProductsByCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products/category/${categoryId}`);
  }
}

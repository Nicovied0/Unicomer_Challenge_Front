import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:8080/api/cards/';

  constructor(private http: HttpClient) { }
  async getCardData(cardId: string): Promise<any> {
    try {
      const cardData = await this.http.get(`${this.apiUrl}${cardId}`).toPromise();
      return cardData;
    } catch (error) {
      console.error('Error al obtener los datos de la tarjeta:', error);
      throw error;
    }
  }




  getCardsData(cardIds: string[]): Observable<any[]> {
    const observables = cardIds.map(cardId => this.getCardData(cardId));
    return forkJoin(observables); // Combina múltiples observables en uno solo
  }

  requestNewCard(newCardData: any, userId: string): Observable<any> {
    // Enviar solicitud POST para solicitar una nueva tarjeta
    const requestData = {
      ...newCardData,
      userId: userId
    };
    return this.http.post<any>(`${this.apiUrl}/${userId}`, requestData);
  }
}

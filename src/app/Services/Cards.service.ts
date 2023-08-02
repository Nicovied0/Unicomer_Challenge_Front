import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  async getCardData(cardId: string): Promise<any> {
    try {
      const cardData = await this.http.get(`http://localhost:8080/api/cards/${cardId}`).toPromise();
      return cardData;
    } catch (error) {
      console.error('Error al obtener los datos de la tarjeta:', error);
      throw error;
    }
  }
}

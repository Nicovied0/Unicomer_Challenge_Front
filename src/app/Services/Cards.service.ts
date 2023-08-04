import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
declare const Swal: any;

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
    return forkJoin(observables);
  }

  requestNewCard(newCardData: any, userId: string, documentNumber: string, password: string): Observable<any> {
    const requestData = {
      ...newCardData,
      userId: userId,
      documentNumber: documentNumber,
      password: password
    };
    return this.http.post<any>(`${this.apiUrl}/${userId}`, requestData);
  }

  getEgresosData(cardIds: string[]): Observable<any[]> {
    const userId = JSON.parse(localStorage.getItem('userUnicomer')!).id;
    const url = "http://localhost:8080/api/transactions/all";

    const data = this.http.get<any[]>(url).pipe(
      map(transactions => transactions.filter(transaction =>
        cardIds.includes(transaction.senderCardId) && transaction.senderCardId !== userId)
      )
    );
    return data
  }

  getIngresosData(cardIds: string[]): Observable<any[]> {
    const userId = JSON.parse(localStorage.getItem('userUnicomer')!).id;
    const url = "http://localhost:8080/api/transactions/all";

    const data = this.http.get<any[]>(url).pipe(
      map(transactions => transactions.filter(transaction =>
        cardIds.includes(transaction.receiverCardId) && transaction.receiverCardId !== userId)
      )
    );
    return data
  }

}

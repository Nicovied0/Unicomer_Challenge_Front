import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError  } from 'rxjs/operators';
declare const Swal: any;

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private apiUrl = 'http://localhost:8080/api/transactions/deposit';

  constructor(private http: HttpClient) { }

  depositToCard(receiverCardId: string, amount: number): Observable<any> {
    if (!receiverCardId || receiverCardId.trim() === '') {
      return throwError('Sender card ID is required.');
    }
    if (amount <= 0) {
      return throwError('Amount must be greater than zero.');
    }
    const data = { receiverCardId, amount };
    return this.http.post<any>(this.apiUrl, data)
      .pipe(
        catchError(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error en realizar un recarga de saldo.',
            confirmButtonText: 'OK'
          });
          return throwError(error);
        }),
        map(response => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Deposito relizado correctamente',
            confirmButtonText: 'OK'
          });
          return response;
        })
      );
  }

  getCardBalance(cardId: string): Observable<number> {
    return this.http.get<{ balance: number }>(`http://localhost:8080/api/cards/${cardId}`)
      .pipe(
        map(response => response.balance)
      );
  }
}

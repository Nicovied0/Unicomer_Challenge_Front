import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
declare const Swal: any;


@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {
  private baseUrl = 'https://unicomer.up.railway.app/api/transactions/withdraw';

  constructor(private http: HttpClient) { }

  withdraw(senderCardId: string, amount: number): Observable<any> {
    if (!senderCardId || senderCardId.trim() === '') {
      return throwError('Sender card ID is required.');
    }
    if (amount <= 0) {
      return throwError('Amount must be greater than zero.');
    }
    const formData = { senderCardId, amount };
    return this.http.post(this.baseUrl, formData)
      .pipe(
        catchError(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error en retirar dinero.',
            confirmButtonText: 'OK'
          });
          return throwError(error);
        }),
        map(response => {
          Swal.fire({
            icon: 'success',
            title: 'Completado',
            text: `Se retiro $${amount} correctamente.`,
            confirmButtonText: 'OK'
          });
          return response;
        })
      );
  }

  getCardBalance(cardId: string): Observable<number> {
    return this.http.get<{ balance: number }>(`https://unicomer.up.railway.app/api/cards/${cardId}`)
      .pipe(
        map(response => response.balance)
      );
  }
}

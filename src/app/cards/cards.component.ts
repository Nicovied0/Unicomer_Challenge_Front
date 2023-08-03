import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardIds: string[] = [];
  cardsData: any[] = [];
  newCardData = { cardHolderName: '', balance: null }; // Nuevo objeto para la nueva tarjeta
  isSubmitting = false;
  isApproved = false;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    const userUnicomer = JSON.parse(localStorage.getItem('userUnicomer')!);
    this.cardIds = userUnicomer.cardIds;

    this.cardService.getCardsData(this.cardIds).subscribe(
      (cardsData: any[]) => {
        this.cardsData = cardsData;
      },
      error => {
        console.error('Error al obtener los datos de las tarjetas', error);
      }
    );
  }

  // Método para solicitar una nueva tarjeta
  submitForm() {
    this.isSubmitting = true;
    this.isApproved = false;

    const userId = JSON.parse(localStorage.getItem('userUnicomer')!).id;

    this.cardService.requestNewCard(this.newCardData, userId).subscribe(
      (response: any) => {
        this.isSubmitting = false;
        this.isApproved = true;
        // Actualizar la lista de tarjetas con la nueva tarjeta recibida en la respuesta
        this.cardsData.push(response);
      },
      error => {
        this.isSubmitting = false;
        console.error('Error al solicitar una nueva tarjeta', error);
      }
    );
  }
}

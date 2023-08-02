import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData: any = {};

  constructor(private cardService: CardService) { }

  async ngOnInit() {
    const userUnicomerStr = localStorage.getItem('userUnicomer');
    if (userUnicomerStr !== null) {
      const userUnicomer = JSON.parse(userUnicomerStr);
      if (userUnicomer.cardIds && userUnicomer.cardIds.length > 0) {
        const cardId = userUnicomer.cardIds[0];

        try {
          this.cardData = await this.cardService.getCardData(cardId);

        } catch (error) {
          console.error('Error al obtener los datos de la tarjeta:', error);
        }
      }
    }
    console.log(this.cardData)
  }

  showMonto = false;
  showNumber = false;

  toggleMontoVisibility() {
    this.showMonto = !this.showMonto;
  }

  toggleNumberVisibility() {
    this.showNumber = !this.showNumber;
  }

  get formattedCardNumber() {
    if (this.cardData.cardNumber && this.showNumber) {
      const parts = this.cardData.cardNumber.match(/.{1,4}/g);
      return parts ? parts.join(' ') : '';
    } else {
      return '**** **** **** ****';
    }
  }
}

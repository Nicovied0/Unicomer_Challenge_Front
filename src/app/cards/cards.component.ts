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

  constructor(private cardService: CardService) { }

  ngOnInit() {
    const userUnicomer = JSON.parse(localStorage.getItem('userUnicomer')!);
    this.cardIds = userUnicomer.cardIds;

    this.cardService.getCardsData(this.cardIds).subscribe(
      (cardsData: any[]) => {
        this.cardsData = cardsData;
        console.log(this.cardsData)
      },
      error => {
        console.error('Error al obtener los datos de las tarjetas', error);
      }
    );
  }



}

import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  ultimoEgreso: any | null = null;

  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
    const cardId = JSON.parse(localStorage.getItem('userUnicomer')!).cardIds[0];

    this.cardService.getEgresosData([cardId]).subscribe(
      (data: any[]) => {
        this.ultimoEgreso = data.length > 0 ? data[data.length - 1] : null;
      },
      (error: any) => {
        console.error('Error al cargar el último egreso', error);
      }
    );
  }
}

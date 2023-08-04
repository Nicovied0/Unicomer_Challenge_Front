import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ultimoIngreso: any | null = null;

  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
    const cardId = JSON.parse(localStorage.getItem('userUnicomer')!).cardIds[0];

    this.cardService.getIngresosData([cardId]).subscribe(
      (data: any[]) => {
        this.ultimoIngreso = data.length > 0 ? data[data.length - 1] : null;
      },
      (error: any) => {
        console.error('Error al cargar el último ingreso', error);
      }
    );
  }
}

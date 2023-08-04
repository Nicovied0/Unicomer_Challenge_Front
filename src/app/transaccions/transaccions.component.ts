import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';

@Component({
  selector: 'app-transaccions',
  templateUrl: './transaccions.component.html',
  styleUrls: ['./transaccions.component.css']
})
export class TransaccionsComponent implements OnInit {
  ultimosIngresos: any[] = [];
  ultimosEgresos: any[] = [];
  totalTransacciones: number = 0;
  totalPaginas: number = 0;
  paginaActual: number = 1;
  elementosPorPagina: number = 2;
  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
    const cardId = JSON.parse(localStorage.getItem('userUnicomer')!).cardIds[0];

    this.cardService.getIngresosData([cardId]).subscribe(
      (data: any[]) => {
        this.ultimosIngresos = data;
        this.totalTransacciones = data.length;
        this.totalPaginas = Math.ceil(this.totalTransacciones / this.elementosPorPagina);
        console.log(  this.ultimosIngresos )
      },
      (error: any) => {
        console.error('Error al cargar los últimos ingresos', error);
      }
    );

    this.cardService.getEgresosData([cardId]).subscribe(
      (data: any[]) => {
        this.ultimosEgresos = data;
        this.totalTransacciones = data.length;
        this.totalPaginas = Math.ceil(this.totalTransacciones / this.elementosPorPagina);
      },
      (error: any) => {
        console.error('Error al cargar los últimos egresos', error);
      }
    );
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }
}

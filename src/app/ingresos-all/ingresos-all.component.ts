import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';

@Component({
  selector: 'app-ingresos-all',
  templateUrl: './ingresos-all.component.html',
  styleUrls: ['./ingresos-all.component.css']
})
export class IngresosAllComponent implements OnInit {
  ingresos: any[] = [];
  show = false
  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    console.log(this.ingresos)
    const userUnicomer = JSON.parse(localStorage.getItem('userUnicomer')!);
    this.cardService.getIngresosData(userUnicomer.cardIds).subscribe(
      (egresosData: any[]) => {
        this.ingresos = egresosData;
        console.log(this.ingresos)
      },
      error => {
        console.error('Error al obtener los datos de egresos', error);
      }
    );
  }
  toggleShow() {
    this.show = !this.show
  }
}

import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';
@Component({
  selector: 'app-egresos-all',
  templateUrl: './egresos-all.component.html',
  styleUrls: ['./egresos-all.component.css']
})
export class EgresosAllComponent implements OnInit {
  egresos: any[] = [];
  show = false
  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    console.log(this.egresos)
    const userUnicomer = JSON.parse(localStorage.getItem('userUnicomer')!);
    this.cardService.getEgresosData(userUnicomer.cardIds).subscribe(
      (egresosData: any[]) => {
        this.egresos = egresosData;
        console.log(this.egresos)
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

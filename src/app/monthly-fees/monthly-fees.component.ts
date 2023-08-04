import { Component } from '@angular/core';
import { CuotesOption } from 'src/models/cuotesOption.model';

@Component({
  selector: 'app-monthly-fees',
  templateUrl: './monthly-fees.component.html',
  styleUrls: ['./monthly-fees.component.css']
})
export class MonthlyFeesComponent {
  cuotesOptions: CuotesOption[] = [
    { montoTotal: '800000', Cuotas: '10-24', Fecha: "Marzo 2023", Mensual: "800", Interes: "10%" },
    { montoTotal: '600000', Cuotas: '18-24', Fecha: "Enero 2022", Mensual: "700", Interes: "12%" },
    { montoTotal: '750000', Cuotas: '24-24', Fecha: "Enero 2020", Mensual: "750", Interes: "10%" },
  ];
}

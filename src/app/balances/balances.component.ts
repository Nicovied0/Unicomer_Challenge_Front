import { Component } from '@angular/core';
import { DayOption } from 'src/models/daysOption.model';
import { MontOption } from 'src/models/montOption.model';
import { YearOption } from 'src/models/yearOption.model';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent {
  selectedOption: string = 'semana';

  dayOptions: DayOption[] = [
    { label: 'Mon', value: "50" },
    { label: 'Tue', value: "82" },
    { label: 'Wed', value: "23" },
    { label: 'Thu', value: "54" },
    { label: 'Fri', value: "90" },
    { label: 'Sat', value: "75" },
    { label: 'Sun', value: "10" },
  ];
  monthOptions: MontOption[] = [
    { label: 'Jun', value: "48" },
    { label: 'Fab', value: "50" },
    { label: 'Mar', value: "20" },
    { label: 'Abr', value: "30" },
    { label: 'May', value: "50" },
    { label: 'Jun', value: "80" },
    { label: 'Jul', value: "75" },
    { label: 'Ago', value: "60" },
    { label: 'Sep', value: "55" },
    { label: 'Oct', value: "88" },
    { label: 'Nov', value: "80" },
    { label: 'Dic', value: "90" },

  ];
  yearOptions: YearOption[] = [
    { label: '2019', value: "50" },
    { label: '2020', value: "50" },
    { label: '2021', value: "82" },
    { label: '2022', value: "23" },
    { label: '2023', value: "54" }
  ];


  get selectedOptions() {
    switch (this.selectedOption) {
      case 'año':
        return this.yearOptions;
      case 'mes':
        return this.monthOptions;
      case 'semana':
        return this.dayOptions;
      default:
        return [];
    }
  }
}

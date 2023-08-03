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
    { label: 'Mon', value: "80", valueLast: "80" },
    { label: 'Tue', value: "82", valueLast: "90" },
    { label: 'Wed', value: "23", valueLast: "80" },
    { label: 'Thu', value: "54", valueLast: "70" },
    { label: 'Fri', value: "90", valueLast: "30" },
    { label: 'Sat', value: "75", valueLast: "80" },
    { label: 'Sun', value: "10", valueLast: "40" },
  ];
  monthOptions: MontOption[] = [
    { label: 'Jun', value: "48", valueLast: "50" },
    { label: 'Fab', value: "50", valueLast: "60" },
    { label: 'Mar', value: "20", valueLast: "50" },
    { label: 'Abr', value: "30", valueLast: "20" },
    { label: 'May', value: "50", valueLast: "45" },
    { label: 'Jun', value: "80", valueLast: "50" },
    { label: 'Jul', value: "75", valueLast: "80" },

  ];
  yearOptions: YearOption[] = [
    { label: '2019', value: "100", valueLast: "110" },
    { label: '2020', value: "154", valueLast: "130" },
    { label: '2021', value: "180", valueLast: "70" },
    { label: '2022', value: "120", valueLast: "180" },
    { label: '2023', value: "196", valueLast: "150" }
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

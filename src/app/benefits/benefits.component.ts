import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  currentRouteName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
  }
}

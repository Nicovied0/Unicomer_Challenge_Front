import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  currentRouteName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
  }}


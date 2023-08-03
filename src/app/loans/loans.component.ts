import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  currentRouteName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
  }}


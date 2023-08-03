import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  currentRouteName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
  }}


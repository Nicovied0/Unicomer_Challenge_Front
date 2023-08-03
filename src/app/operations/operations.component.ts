import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  currentRouteName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
  }
}



import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})
export class HelpsComponent implements OnInit {
  currentRouteName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
  }}

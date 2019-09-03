import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSwipeLeft(evt) {
    console.log('Swiped left');
  }

  onSwipeRight(evt) {
    console.log('Swiped right');
  }

}

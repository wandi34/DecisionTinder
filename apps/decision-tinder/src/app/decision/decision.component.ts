import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Decision } from '../../../../../libs/models/decision';
import { DecisionService } from './decision.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dt-decision-card',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent implements OnInit {
  @ViewChild('currentDecision', {static: false}) elementView: ElementRef;
  headerHeight: number;

  decisionList: Decision[] = [
    {
      text: 'Decision 1',
      visible: true
    },
    {
      text: 'Decision 2',
      visible: true
    }

  ]

  // SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private decisionService: DecisionService, private elementRef: ElementRef, private cdRef:ChangeDetectorRef) {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.headerHeight = this.elementView.nativeElement.offsetHeight * -1;
    this.cdRef.detectChanges();
  }

  onSwipeLeft(evt) {
    console.log("Swiped left")
    this.decisionList[0].visible = false;
    this.decisionList[0].hot = true;
    this.decisionService.voteForDecision(this.decisionList[0])
    setTimeout(() => {
      this.decisionList.shift()
    }, 500);
    console.log(this.decisionList)
  }

  onSwipeRight(evt) {
    console.log("Swiped right")
    this.decisionList[0].visible = false;
    this.decisionList[0].hot = false;
    this.decisionService.voteForDecision(this.decisionList[0])
    setTimeout(() => {
      this.decisionList.shift()
    }, 500);
  }

  // swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
  //   // out of range
  //   if (currentIndex < 0) return;

  //   const nextIndex = 0;

  //   // toggle avatar visibility
  //   this.decisionList[0].visible = false;
  // }
}

import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Decision } from '../../../../../libs/models/decision';
import { DecisionService } from './decision.service';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Topic } from 'libs/models/topic';

@Component({
  selector: 'dt-decision-card',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent implements OnInit, AfterViewInit{
  @ViewChild('currentDecision', {static: false}) elementView: ElementRef;
  headerHeight: number;
  decisionList: Decision[];

  constructor(private decisionService: DecisionService, private cdRef:ChangeDetectorRef) {}

  ngOnInit() {
    this.decisionList = this.decisionService.loadDecisionsForTopic(new Topic("Tribe Name"));
  }

  ngAfterViewInit() {
    this.headerHeight = this.elementView.nativeElement.offsetHeight * -1;
    this.cdRef.detectChanges();
  }

  onSwipeLeft(evt) {
    console.log("Swiped left")
    this.decisionList[0].hot = true;
    this.decisionService.voteForDecision(this.decisionList[0])
    setTimeout(() => {
      this.decisionList.shift()
    }, 500);
  }

  onSwipeRight(evt) {
    console.log("Swiped right")
    this.decisionList[0].hot = false;
    this.decisionService.voteForDecision(this.decisionList[0])
    setTimeout(() => {
      this.decisionList.shift()
    }, 500);
  }
}

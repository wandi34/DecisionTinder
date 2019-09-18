import { Injectable } from '@angular/core';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Decision } from 'libs/models/decision';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Topic } from 'libs/models/topic';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {
  constructor() {}

  voteForDecision(decision: Decision) {
    //TODO: Implement voting
  }

  loadDecisionsForTopic(topic: Topic): Decision[] {
    return [
      {
        text: 'TribeClub',
        topic: 'Tribe Name'
      },
      {
        text: 'AnTriber',
        topic: 'Tribe Name'
      },
      {
        text: 'ComputerTriber',
        topic: 'Tribe Name'
      },
      {
        text: 'Space Ship',
        topic: 'Tribe Name'
      }
    ];
  }
}

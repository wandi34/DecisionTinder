import { Injectable } from '@angular/core';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { Decision } from 'libs/models/decision';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  constructor() { }

  voteForDecision(decision: Decision) {
    //TODO: Implement voting
  }

}

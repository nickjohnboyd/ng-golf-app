import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildOptionsService {
  teeType: string;
  playersNum: number;

  constructor() { }

  setOptions(teeType: string, playersNum: number) {
    this.teeType = teeType;
    this.playersNum = playersNum;
  }

  getTeeType() {
    return this.teeType;
  }

  getPlayersNum() {
    return this.playersNum;
  }
  
 
}

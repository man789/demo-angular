import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.scss']
})
export class Ex01Component implements OnInit {
  sec : number = 0;
  chronoStart : any;
  constructor() {
    
   }

  ngOnInit(): void {
  }
  startChrono(): void{
    this.chronoStart = setInterval(() => {this.sec++}, 1000);
  }
  pauseChrono(): void{
    clearInterval(this.chronoStart);
  }
  resetChrono(): void{
    clearInterval(this.chronoStart);
    // this.pauseChrono();
    this.sec = 0;
  }
}

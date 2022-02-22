import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02a',
  templateUrl: './ex02a.component.html',
  styleUrls: ['./ex02a.component.scss']
})
export class Ex02aComponent implements OnInit {
  @Input() listAchat : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  // ajoutList(item : string){
  //   this.listAchat.push(item) = document.getElementsByClassName("objetAchete").value;
  // }
}

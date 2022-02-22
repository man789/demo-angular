import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ex02a',
  templateUrl: './ex02a.component.html',
  styleUrls: ['./ex02a.component.scss']
})
export class Ex02aComponent implements OnInit {
  @Input() listAchat : string[] = [];
  @Output() delete : EventEmitter<number>;
  item : string = "";
  constructor() {
    this.delete = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  envoiId(i:number){
    this.delete.emit(i);
  }
  
}

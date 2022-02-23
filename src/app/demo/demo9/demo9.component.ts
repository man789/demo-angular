import { Component, OnInit } from '@angular/core';
import { FakeLoginServService } from 'src/app/services/fake-login-serv.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  connected : boolean = false;
  compte : string = "";
  password : string = "";

  constructor(private _floginService : FakeLoginServService) { }

  ngOnInit(): void {
  }
  login(){
    this.connected = this._floginService.connect(this.compte, this.password);
  }
  logout(){
    this.connected = this._floginService.disconnect();
  }
}

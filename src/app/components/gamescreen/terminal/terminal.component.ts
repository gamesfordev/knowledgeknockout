import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  currentInput:string;

  constructor() { }


  sendInput(e:any) {
    console.log(this.currentInput);
    this.currentInput = '';
  }

  ngOnInit() {
  }

}

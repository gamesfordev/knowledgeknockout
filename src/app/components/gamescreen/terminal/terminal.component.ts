import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  currentInput:string;
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  sendInput(e:any) {
    console.log(this.currentInput);
    this.notify.emit(this.currentInput);
    this.currentInput = '';
  }

  ngOnInit() {
  }

}

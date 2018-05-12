import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ErrorMessage } from '../../../classes/errormessage';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  currentInput:string;
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();
  @Input() messages : ErrorMessage[];

  constructor() { }


  sendInput(e:any) {
    console.log(this.currentInput);
    this.notify.emit(this.currentInput);
    this.currentInput = '';
  }

  ngOnInit() {
  }

}

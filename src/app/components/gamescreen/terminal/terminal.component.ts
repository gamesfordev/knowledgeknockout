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
  @Output() notify2 : EventEmitter<void> = new EventEmitter<void>();
  @Input() messages : ErrorMessage[];

  constructor() { }


  sendInput(e:any) {
    if(this.currentInput == 'cls' || this.currentInput == 'clear') {
      this.notify2.emit();
    }
    else {
      this.notify.emit(this.currentInput);
    }
    this.currentInput = '';
  }

  ngOnInit() {
  }

}

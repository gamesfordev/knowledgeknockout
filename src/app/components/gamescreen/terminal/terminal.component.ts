import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ErrorMessage } from '../../../classes/errormessage';
import { TerminalhistoryService } from '../../../services/terminalhistory/terminalhistory.service';

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

  constructor(private terminalhistory: TerminalhistoryService) { }


  sendInput() {
    this.terminalhistory.addToHistory(this.currentInput);
    if(this.currentInput == 'cls' || this.currentInput == 'clear') {
      this.notify2.emit();
    }
    else {
      this.notify.emit(this.currentInput);
    }
    this.currentInput = '';
  }

  getFromHistory(event: any) {
    if(event.key == 'ArrowUp') {
      this.currentInput = this.terminalhistory.getItem(1);
    }
    else {
      this.currentInput = this.terminalhistory.getItem(0);
    }
  }

  ngOnInit() {
  }

}

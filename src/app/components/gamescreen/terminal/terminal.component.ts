import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
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
  @Input() messages : ErrorMessage[];
  @ViewChild('terminaltext') terminalinput : ElementRef;
  @ViewChild('terminalbody') terminalbody : ElementRef;

  constructor(private terminalhistory: TerminalhistoryService) { }


  sendInput() {
    this.terminalhistory.addToHistory(this.currentInput);
    this.notify.emit(this.currentInput);
    this.currentInput = '';
    setTimeout(() => {
      this.terminalbody.nativeElement.scrollTop = this.terminalbody.nativeElement.scrollHeight;
    }, 300);
  }

  getFromHistory(event: any) {
    if(event.key == 'ArrowUp') {
      this.currentInput = this.terminalhistory.getItem(1);
    }
    else {
      this.currentInput = this.terminalhistory.getItem(0);
    }
  }

  terminalClick(): void {
    this.terminalinput.nativeElement.focus();
  }

  ngOnInit() {

  }


}

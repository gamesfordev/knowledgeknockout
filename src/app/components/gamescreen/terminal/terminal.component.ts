import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ErrorMessage } from '../../../classes/errormessage';
import { TerminalhistoryService } from '../../../services/terminalhistory/terminalhistory.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements OnInit {
  @Output() notify2: EventEmitter<void> = new EventEmitter<void>();

  currentInput: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() messages: ErrorMessage[];

  constructor(private terminalhistory: TerminalhistoryService) {}

  sendInput() {
    this.terminalhistory.addToHistory(this.currentInput);
    this.notify.emit(this.currentInput);
    this.currentInput = '';
  }

  getFromHistory(event: any) {
    if (event.key == 'ArrowUp') {
      this.currentInput = this.terminalhistory.getItem(1);
    } else {
      this.currentInput = this.terminalhistory.getItem(0);
    }
  }

  ngOnInit() {}
}

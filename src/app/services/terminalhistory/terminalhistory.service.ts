import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerminalhistoryService {

  commands: string[] = new Array();
  cursor: number = 0;

  addToHistory(item: string): void {
    this.commands.push(item);
  }

  getItem(dir: number): string {
    console.log(this.cursor);
    if(this.commands.length == 0) {
      return '';
    }
    this.cursor = dir == 1 ? (this.cursor - 1) : (this.cursor + 1);
    if(this.cursor == -1 ) {
      this.cursor = this.commands.length - 1;
    }
    else if(this.cursor == this.commands.length) {
      this.cursor = 0;
    }
    
    return this.commands[this.cursor];
  }

  constructor() { }
}

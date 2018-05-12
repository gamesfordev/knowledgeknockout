import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessage } from '../../../../classes/errormessage';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: ErrorMessage[];

  constructor() { }

  ngOnInit() {
  }

}

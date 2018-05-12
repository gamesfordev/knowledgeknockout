import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introtext',
  templateUrl: './introtext.component.html',
  styleUrls: ['./introtext.component.css']
})
export class IntrotextComponent implements OnInit {
  @Input() text:string ;

  constructor() { }

  ngOnInit() {
  }

}

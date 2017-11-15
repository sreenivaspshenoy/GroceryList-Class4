import { Component, OnInit, EventEmitter, Output,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

@ViewChild('inputElement') inputElement: ElementRef;
 @Output() itemAdded : EventEmitter<string> = new EventEmitter<string>();
 itemName: string = '';
  constructor() { }
  ngOnInit() {
  }

  addGrocery() {
    console.log(this.inputElement);
    this.itemAdded.emit(this.itemName);
  }

}

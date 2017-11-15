import { Component, OnInit, Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {

 @Input() itemName: string;

 ngOnChanges(changes: SimpleChanges) {
   console.log(changes);
   console.log('ngOnChanges');
 }
  constructor() { 

    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';


  groceryItems : string[] = ['Apple', 'Oranges'];

  onItemAdded(value) {
    this.groceryItems.push(value);
  }

  changeFirst() {
    this.groceryItems = new Array();
    this.groceryItems[0] = 'Mangoes';
    this.groceryItems[1] = 'Oranges';
   }
}

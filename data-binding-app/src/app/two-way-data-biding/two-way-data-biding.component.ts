import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-biding',
  templateUrl: './two-way-data-biding.component.html',
  styleUrls: ['./two-way-data-biding.component.css']
})
export class TwoWayDataBidingComponent {
  name1?: string;
  name2?: string;
  client = {
    name: "",
    age: null,
  };
}
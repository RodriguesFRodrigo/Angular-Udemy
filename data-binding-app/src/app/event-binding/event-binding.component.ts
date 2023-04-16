import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  buttonName = "My Button";
  i = 0;
  btnEnable = true;
  selectDisabled = false;
  inputName = "";

  spinnerModeInDet: ProgressSpinnerMode = 'indeterminate';
  spinnerModeDet: ProgressSpinnerMode = 'determinate';

  save() {
    console.log("click");
  }

  inc() {
    this.i++;
    this.buttonName = `My Button ${this.i}`;
  }

  disabled() {
    this.btnEnable = false;
    console.log(this.btnEnable);
  }

  // Event Binding with params:
  cbChange(event: any) {
    console.log("checked: ", event.checked);
    console.log("source: ", event.source);
    this.selectDisabled = event.checked;
  }

  selectionChange(event: any) {
    console.log(event);
    console.log(event.value);
  }

  // Event Binding with property binding:
  inputEvent(event: any) {
    console.log(event.target.value);
    console.log(this.inputName);
    this.inputName = event.target.value;
  }
}

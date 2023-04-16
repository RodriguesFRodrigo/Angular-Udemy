import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  firstName = "SC Internacional";
  person = {
    firstName: "Pedro Henrique",
    lastName: "Konzen",
    age: 32, // Transforma para String no navegador.
    club: "SC Internacional"
  }
}

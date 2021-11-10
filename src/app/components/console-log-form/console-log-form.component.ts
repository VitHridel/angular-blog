import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-log-form',
  templateUrl: './console-log-form.component.html',
  styleUrls: ['./console-log-form.component.css']
})
export class ConsoleLogFormComponent implements OnInit {
  firstInput:string = ""
  secondInput:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(`${this.firstInput} ${this.secondInput}`);
    this.firstInput = ""
    this.secondInput = ""
  }

}

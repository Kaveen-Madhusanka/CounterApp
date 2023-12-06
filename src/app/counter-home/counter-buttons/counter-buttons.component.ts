import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onIncrement(){

  }

  onDecrement(){

  }

  onReset(){
    
  }
}

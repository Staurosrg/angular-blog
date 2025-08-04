import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit { 
  // @Input()
  // photoCover: string = '';
  // @Input()
  // contentTitle: string = '';
  // @Input()
  // contentDescription: string = '';


  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}

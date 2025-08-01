import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard implements OnInit {

  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}

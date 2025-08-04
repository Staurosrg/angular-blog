import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard implements OnInit {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  Id: string = "0";
  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {
  @Input()
  photoCover: string = "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/robert-pattinson-como-batman.png?w=1024";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

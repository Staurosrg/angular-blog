import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {
  @Input()
  photoCover: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";
  private id: string |null  = "0";
  constructor(
    private route: ActivatedRoute
  ) {}
    ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get('Id')
    );
    this.setValuesToComponent(this.id);
  }
  
  setValuesToComponent(id: string | null){
    const result = dataFake.find(article => article.id === Number(id));
    if(result){
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }
}

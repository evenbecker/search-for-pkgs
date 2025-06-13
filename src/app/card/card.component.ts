import { Component, Input } from '@angular/core';
import { Card } from '../_models/card';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css',
    '/src/styles.css'
  ],
})

export class CardComponent {
  @Input() card = {} as Card;
  

  
}

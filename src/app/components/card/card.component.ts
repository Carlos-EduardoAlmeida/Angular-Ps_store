import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() gameCover: string = 'assets/bt-5.jpg'

  @Input() gameLabel: string = 'exclusive'

  @Input() gameType: string = 'Digital PS4'
  @Input() gamePrice: string = 'R$ 329,99'
  @Input() id: string = '0'
}

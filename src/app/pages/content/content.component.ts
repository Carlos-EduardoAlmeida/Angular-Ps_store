import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';
import { GameInterface } from 'src/app/GameInterface'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  dataJogos: GameInterface[] = []
  id: string | null = "0"
  constructor(
    private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe(value=> this.id = value.get("id"))
    data.forEach(jogo => jogo.id == this.id ? this.dataJogos.push(jogo) : this.dataJogos)
  }
}

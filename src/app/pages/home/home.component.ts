import { Component } from '@angular/core';
import {data} from '../../data/data'
import { GameInterface } from 'src/app/GameInterface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataJogos: GameInterface[] = []
  
  constructor(){
    data.forEach(jogo => this.dataJogos.push(jogo))
  }
}

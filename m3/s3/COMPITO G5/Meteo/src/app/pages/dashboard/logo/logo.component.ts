import { Component, Input } from '@angular/core';
import { IList } from '../../../module/i-nome-citta';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Input() weather!: IList;

  selectPicture(weather: string) {
    let output!: string;
    switch (weather) {
      case `Clear`:
        output = '../../../../asset/img/sole.jpg';
        break;
      case `Rain`:
        output = '../../../../asset/img/pioggia.jpg';
        break;
      case `Clouds`:
        output = '../../../../asset/img/nuvoloso.jpg';
        break;
      case `Snow`:
        output = '../../../../asset/img/22.jpg';
        break;
      default:
        output = '';
        break;
    }
    return output;
  }
}

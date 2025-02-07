import { Component, Input } from '@angular/core';
import { ICvData } from 'src/app/models/interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @Input() info: ICvData = {} as ICvData;
}

import { Component, Input } from '@angular/core';
import { ICvData } from 'src/app/models/interfaces';

@Component({
  selector: 'app-personal-works',
  templateUrl: './personal-works.component.html',
  styleUrls: ['./personal-works.component.scss'],
})
export class PersonalWorksComponent {
  @Input() info: ICvData = {} as ICvData;
}

import { Component, Input } from '@angular/core';
import { ICvData } from 'src/app/models/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() info: ICvData = {} as ICvData;
}

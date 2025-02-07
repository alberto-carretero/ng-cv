import { Component, Input } from '@angular/core';
import { IExperienceInfo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-company-experience-info',
  templateUrl: './company-experience-info.component.html',
  styleUrls: ['./company-experience-info.component.scss'],
})
export class CompanyExperienceInfoComponent {
  @Input() companyExperienceInfo: IExperienceInfo = {} as IExperienceInfo;
  @Input() isLastIndex: boolean = false;
}

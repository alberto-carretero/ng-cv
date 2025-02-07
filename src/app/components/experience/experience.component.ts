import { Component, Input, OnInit } from '@angular/core';
import { CompanyEnum } from 'src/app/models/enums';
import { ICvData, IExperienceInfo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  @Input() info: ICvData = {} as ICvData;

  public companyExperienceInfo: IExperienceInfo = {} as IExperienceInfo;
  public companyEnum = CompanyEnum;
  public isLastIndex: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showCompanyInfo(CompanyEnum.IC, false);
  }

  public showCompanyInfo(id: string, isLastIndex: boolean) {
    this.companyExperienceInfo = this.info.experiences.find(
      (experience: IExperienceInfo) => experience.id === id,
    )!;
    this.isLastIndex = isLastIndex;
  }
}

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
  public isFirstndex: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.showCompanyInfo(CompanyEnum.VINTEGRIS, true);
  }

  public showCompanyInfo(id: string, isFirstndex: boolean) {
    this.companyExperienceInfo = this.info.experiences.find(
      (experience: IExperienceInfo) => experience.id === id,
    )!;
    this.isFirstndex = isFirstndex;
  }
}

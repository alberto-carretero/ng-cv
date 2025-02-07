import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICvData, ISection } from 'src/app/models/interfaces';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent {
  @Input() data: BehaviorSubject<ICvData> = new BehaviorSubject({} as ICvData);

  public sections: ISection[] = [
    {
      name: 'about-me',
      icon: 'bi-person',
      active: true,
    },
    {
      name: 'experience',
      icon: 'bi-bar-chart-steps',
      active: false,
    },
    {
      name: 'skills',
      icon: 'bi-bar-chart',
      active: false,
    },
    {
      name: 'personal-works',
      icon: 'bi-person-workspace',
      active: false,
    },
  ];

  public showSection(section: ISection) {
    if (!section.active) {
      this.updateSectionStates(section.name);
      this.data.next({ ...this.data.getValue(), activeSection: section.name });
    }
  }

  private updateSectionStates(name: string) {
    this.sections.forEach((section: ISection) => {
      section.active = section.name === name;
    });
  }
}

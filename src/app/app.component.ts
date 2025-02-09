import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesEnum } from './models/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public languagesEnum = LanguagesEnum;
  public selectedLanguage: LanguagesEnum = LanguagesEnum.ES;

  constructor(private translate: TranslateService) {
    this.setLanguage(this.selectedLanguage);
  }

  public setLanguage(language: LanguagesEnum) {
    this.selectedLanguage = language;
    this.translate.setDefaultLang(language);
    localStorage.setItem('language', language);
  }
}

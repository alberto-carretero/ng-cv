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

  constructor(private translate: TranslateService) {
    const defaultLanguage = LanguagesEnum.ES;
    this.setLanguage(defaultLanguage);
  }

  public setLanguage(language: LanguagesEnum) {
    console.log('🚀 ~ AppComponent ~ setLanguage ~ language:', language);
    this.translate.setDefaultLang(language);
    localStorage.setItem('language', language);
  }
}

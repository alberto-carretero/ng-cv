import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CompanyExperienceInfoComponent } from './components/company-experience-info/company-experience-info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MeComponent } from './components/me/me.component';
import { PersonalWorksComponent } from './components/personal-works/personal-works.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './pages/home.component';
import { CalculateYearsPipe } from './pipes/calculate-years.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    SectionsComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    PersonalWorksComponent,
    CalculateYearsPipe,
    CompanyExperienceInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

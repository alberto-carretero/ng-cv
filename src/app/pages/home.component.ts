import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SectionsEnum } from '../models/enums';
import { ICvData } from '../models/interfaces';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public data: BehaviorSubject<ICvData> = new BehaviorSubject({} as ICvData);
  public sectionsEnum = SectionsEnum;

  private subscriptions = new Subscription();

  constructor(private cvService: CvServiceService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.cvService.getData().subscribe((data: ICvData) => {
        this.data.next(data);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

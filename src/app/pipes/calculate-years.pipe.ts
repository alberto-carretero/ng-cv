import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateYears',
})
export class CalculateYearsPipe implements PipeTransform {
  transform(value: string): number {
    const dateOfBirthInmiliseconds: number = new Date(value).getTime();
    const currentDay: number = new Date().getTime();

    const diffInSeconds: number =
      (currentDay - dateOfBirthInmiliseconds) / 1000;
    const diffInDays: number = diffInSeconds / (60 * 60 * 24);

    return Math.abs(Math.round(diffInDays / 365));
  }
}

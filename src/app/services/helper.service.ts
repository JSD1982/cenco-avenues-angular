import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public lenguage = new BehaviorSubject<boolean>(false);
  constructor() {}

  public customLenguage = this.lenguage.asObservable();

  changeLenguage(lenguage): void {
    this.lenguage.next(lenguage);
  }
}

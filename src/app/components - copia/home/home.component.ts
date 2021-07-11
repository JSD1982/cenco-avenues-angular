import { Component, OnInit } from '@angular/core';
import { IAvenidas } from '../../interfaces/avenidas';
import { Select, Store } from '@ngxs/store';
import { GetAvenues, SetLanguage } from './../../../state/avenues.actions';
import { AvenuesState } from '../../../state/avenues.state';
import { Observable } from 'rxjs';
import { itemsAvenidas } from '../../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  @Select(AvenuesState.getItemsAvenues) itemsAvenidas$: Observable<any>;
  @Select(AvenuesState.getAvenues) avenues$: Observable<any>;
  @Select(AvenuesState.getLanguage) stateLanguage$: Observable<string>;
  @Select(AvenuesState.getTextsMock) textsMock$: Observable<any>;
  @Select(AvenuesState.getPaths) paths$: Observable<any>;

  avenidas: IAvenidas[] = [];
  itemsAvenidas: any = itemsAvenidas;
  language: string = '';
  textMock: any = {};
  paths: any = {};

  ngOnInit() {
    try {
      this.store.dispatch(new GetAvenues());
      this.stateLanguage$.subscribe((res) => (this.language = res));
      let lang = sessionStorage.getItem('lang');
      if (lang) {
        sessionStorage.setItem('lang', lang);
        this.language = lang;
      } else {
        sessionStorage.setItem('lang', this.language);
      }
      
      this.handleSelectLanguage(this.language);
      this.render(this.language);
    } catch (error) {
      console.error(error);
    }
  }

  render(language: string) {
    this.itemsAvenidas$.subscribe(
      (itemsAvenidas) => (this.itemsAvenidas = itemsAvenidas[language]),
      (error) => {
        throw error;
      }
    );
    this.avenues$.subscribe(
      (avenues) => (this.avenidas = avenues[language]),
      (error) => {
        throw error;
      }
    );
    this.textsMock$.subscribe((res) => (this.textMock = res[language]));
    this.paths$.subscribe((res) => (this.paths = res[language]));
  }

  handleSelectLanguage(language): void {
    sessionStorage.setItem('lang', language);
    this.store.dispatch(new SetLanguage(language));
  }

  selectLanguage(select: string) {
    this.handleSelectLanguage(select);
    this.render(select);
  }
}

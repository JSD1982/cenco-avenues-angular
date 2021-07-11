import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '../../services';
import { Select } from '@ngxs/store';
import { AvenuesState } from '../../../state/avenues.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private helper: HelperService) {}
  @Select(AvenuesState.getLanguage) stateLanguage$: Observable<string>;
  @Select(AvenuesState.getTextsMock) textsMock$: Observable<any>;
  @Select(AvenuesState.getPaths) paths$: Observable<any>;
  @Input() stickyNav: string;
  textMock: any = {};
  language: string = '';
  displayNav: boolean = false;
  top = '#Avenidas';
  paths:any={}

  ngOnInit() {
    this.changueLenguage();
    this.helper.customLenguage.subscribe((res) => {
      if (res) this.changueLenguage();
    });
  }

  changueLenguage() {
    this.stateLanguage$.subscribe((res) => (this.language = res));
    this.textsMock$.subscribe((res) => (this.textMock = res[this.language]));
    this.paths$.subscribe((res) => (this.paths = res[this.language]));
    this.displayNav = true;
  }
}

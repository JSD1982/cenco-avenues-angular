import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const lang = navigator.languages.filter(
      (lang) => lang === 'es' || lang === 'pt'
    );
    this.document.documentElement.lang = lang.length > 0 ? lang[0] : 'en';
  }
}

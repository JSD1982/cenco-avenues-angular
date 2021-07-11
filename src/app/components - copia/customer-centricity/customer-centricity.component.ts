import { Component, OnInit, Input } from '@angular/core';
import { IAvenidas } from '../../interfaces/avenidas';
import { Router } from '@angular/router';
import { SetIniciatives } from '../../../state/avenues.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-customer-centricity',
  templateUrl: './customer-centricity.component.html',
  styleUrls: ['./customer-centricity.component.css'],
})
export class CustomerCentricityComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}
  @Input() avenida: IAvenidas;
  @Input() textMock: any;

  ngOnInit(): void {}

  handleGotoSubIniciative(iniciative, avenida) {
    avenida = { ...avenida, title: this.textMock.title };
    let subInicitive: any = {
      iniciative,
      avenida: avenida,
      path: `${avenida.path}/${iniciative.path}`,
    };
    this.store.dispatch(new SetIniciatives(subInicitive));
    this.router.navigate([`${avenida.path}/${iniciative.path}`]);
  }
}

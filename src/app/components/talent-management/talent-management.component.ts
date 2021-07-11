import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';
import { Router } from '@angular/router';
import { SetIniciatives } from '../../../state/avenues.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-talent-management',
  templateUrl: './talent-management.component.html',
  styleUrls: ['./talent-management.component.css'],
})
export class TalentManagementComponent implements OnInit {
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

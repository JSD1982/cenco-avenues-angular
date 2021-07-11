import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  SubInitiativesComponent,
  SubInitiativesDetailComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':avenue/:iniciative',

    component: SubInitiativesComponent,
  },
  {
    path: ':avenue/:iniciative/:subinitiative',
    component: SubInitiativesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { AvenuesState } from '../../../state/avenues.state';
import { HelperService } from '../../services';
import {
  GetAvenues,
  SetIniciatives,
  SetSubIniciatives,
  SetLanguage,
} from '../../../state/avenues.actions';
import { Observable } from 'rxjs';
import { apiPath } from '../../../environments/configApiPath';

@Component({
  selector: 'app-sub-initiatives-detail',
  templateUrl: './sub-initiatives-detail.component.html',
  styleUrls: ['./sub-initiatives-detail.component.css'],
})
export class SubInitiativesDetailComponent implements OnInit {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private helper: HelperService
  ) {}
  @Select(AvenuesState.selectedSubIniciatives)
  subIniciativesDetail$: Observable<any>;
  @Select(AvenuesState.getItemsAvenues) itemsAvenidas$: Observable<any>;
  @Select(AvenuesState.selectedIniciatives) subIniciatives$: Observable<any[]>;
  @Select(AvenuesState.getAvenues) avenues$: Observable<any>;
  @Select(AvenuesState.getLanguage) stateLanguage$: Observable<string>;
  @Select(AvenuesState.getTextsMock) textsMock$: Observable<any>;

  detail: any = {};
  avenuePath: string = '';
  volverPath: any = '';
  params: any = {};
  language: string = '';
  textMock: any = {};
  textDetail: any = {};
  //hiddenButton: boolean = false;
  apiPath: string = apiPath;

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      let params = {};
      for (const [key, value] of Object.entries(res.params)) {
        params = { ...params, [key]: value };
      }
      this.params = params;
    });
    this.render();
  }

  toLink(url: string) {
    return url;
  }

  link(url) {
    window.open(url, '_blank');
  }

  render() {
    this.stateLanguage$.subscribe((res) => (this.language = res));
    this.textsMock$.subscribe((res) => {
      this.textMock = res[this.language];
      this.textDetail = this.textMock.detailTextSubIniciatives;
    });
    this.subIniciativesDetail$.subscribe((res) => {
      if (!res) {
        this.reload();
      } else {
        let files = [];
        if (res.detail.files.length > 0) {
          for (let sub of res.detail.files) {
            let model = {
              ...sub,
              src: `assets/image/file-${sub.extension}.png`,
            };
            files.push(model);
          }
        }

        //this.hiddenButton = !this.detail.url ? false : true;
        this.detail = { ...res.detail, files };
        this.avenuePath = `${res.avenuePath}`;
        this.volverPath = [`/${res.path}`];
      }
    });
  }
  reload() {
    this.store.dispatch(new GetAvenues());
    this.avenues$.subscribe((res) => {
      let language = null;
      res['es'].map((es) => {
        if (es.path === this.params.avenue)
          es.iniciativas.map((i) => {
            if (i.path === this.params.iniciative) language = 'es';
          });
      });
      if (!language) {
        res['pt'].map((pt) => {
          if (pt.path === this.params.avenue)
            pt.iniciativas.map((p) => {
              if (p.path === this.params.iniciative) language = 'pt';
            });
        });
      }
      if (language) {
        this.store.dispatch(new SetLanguage(language));
        this.helper.changeLenguage(true);
        this.itemsAvenidas$.subscribe(
          (avenues) => {
            Object.values(avenues[language]).map((value: any) => {
              if (value.path === this.params.avenue) {
                let iniciative;
                for (const i of value.iniciativas) {
                  if (i.path === this.params.iniciative) {
                    iniciative = i;
                  }
                }
                let subInicitive: any = {
                  iniciative,
                  avenida: { path: value.path, title: value.title },
                  path: `${value.path}/${iniciative.path}`,
                };
                this.store.dispatch(new SetIniciatives(subInicitive));
                this.subIniciatives$.subscribe((res: any) => {
                  let subIniciativas = [];
                  if (res.iniciative.subIniciativas.length > 0) {
                    for (let sub of res.iniciative.subIniciativas) {
                      let model = {
                        ...sub,
                        src: sub.image,
                      };
                      subIniciativas.push(model);
                    }
                  }
                  let detail;
                  for (const sub of subIniciativas) {
                    if (sub.path === this.params.subinitiative) {
                      detail = sub;
                    }
                  }
                  let subIniciativeDetail = {
                    detail,
                    avenuePath: `${res.avenida.title} / ${res.iniciative.title} `,
                    path: res.path,
                  };
                  this.store.dispatch(
                    new SetSubIniciatives(subIniciativeDetail)
                  );
                  this.render();
                });
              }
            });
          },
          (error) => {
            throw error;
          }
        );
      }
    });
  }
}

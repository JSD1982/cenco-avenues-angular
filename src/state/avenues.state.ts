import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { formatDate } from '../app/utils';
import {
  SetSubIniciatives,
  GetAvenues,
  SetIniciatives,
  SetLanguage,
} from './avenues.actions';

import { navHref, itemsAvenidas, validateImagenFile } from '../app/utils/';
import { AvenuesService, MockAvenidasService } from '../app/services';

const lang = navigator.languages.filter(
  (lang) => lang === 'es' || lang === 'pt'
);

export class AvenuesStateModel {
  public selectedIniciatives: any[];
  public selectedSubIniciatives: any;
  public itemsAvenues: any;
  public avenues: any;
  public language: string;
  public textsMock: any;
  public paths: any;
}

@State<AvenuesStateModel>({
  name: 'avenues',
  defaults: {
    selectedIniciatives: null,
    selectedSubIniciatives: null,
    itemsAvenues: { es: {}, pt: {} },
    avenues: { es: [], pt: [] },
    language: lang.length > 0 ? lang[0] : 'pt',
    paths: {
      es: {
        newITModel: { href: '#Nuevo-Modelo-TI', id: 'Nuevo-Modelo-TI' },
        cybersecurity: {
          href: '#Cyberseguridad-y-Compliance',
          id: 'Cyberseguridad-y-Compliance',
        },
        technologyStrategy: {
          href: '#Estrategia-Tecnologica',
          id: 'Estrategia-Tecnologica',
        },
        talentManagement: {
          href: '#Gestion-de-Talento',
          id: 'Gestion-de-Talento',
        },
        digitalStrategy: {
          href: '#Estrategia-Digital',
          id: 'Estrategia-Digital',
        },
        centricityConsumer: {
          href: '#Customer-Centricity',
          id: 'Customer-Centricity',
        },
      },
      pt: {
        newITModel: { href: '#Novo-Modelo-TI', id: 'Novo-Modelo-TI' },
        cybersecurity: {
          href: '#Ciberseguranca-e-conformidade',
          id: 'Ciberseguranca-e-conformidade',
        },
        technologyStrategy: {
          href: '#Estrategia-Tecnologia',
          id: 'Estrategia-Tecnologia',
        },
        talentManagement: {
          href: '#Gestao-de-Talentos',
          id: 'Gestao-de-Talentos',
        },
        digitalStrategy: {
          href: '#Estrategia-Digital',
          id: 'Estrategia-Digital',
        },
        centricityConsumer: {
          href: '#Centricidade-do-cliente',
          id: 'Centricidade-do-cliente',
        },
      },
    },
    textsMock: {
      es: {
        textInitHero: 'Descubre las...',
        titleHero: 'Avenidas Estrat??gicas de Sistemas',
        descriptionHero:
          'En este portal podr??s encontrar toda la informaci??n correspondiente a las iniciativas que se desprenden de los objetivos que tiene la Gerencia Corporativa de Sistemas.',
        textButtonHero: 'Quiero conocer las Avenidas',
        linkEs: 'Portugu??s',
        linkPt: 'Espa??ol',
        titleSectionAvenues: 'Nuestras Avenidas',
        infoSectionAvenues: '',
        buttonBack: 'Volver',
        newITModel: {
          title: 'Nuevo Modelo TI',
          description:
            'Convertir a la Gerencia de Sistemas en un ??rea estrat??gica para Cencosud, teniendo una permanente Obsesi??n por nuestro cliente interno; y ser reconocidos como un referente que conoce e impulsa la innovaci??n, permitiendo el crecimiento de los negocios a trav??s de la combinaci??n de personas, procesos y tecnolog??as, logrando de esta manera entregar un servicio de excelencia a nuestros clientes.',
        },
        cybersecurity: {
          title: 'Cyberseguridad y Compliance',
          description:
            'En un contexto donde la transformaci??n digital se ha acelerado, junto a un entorno de Ciberamenazas creciente, hemos definido un Programa de Ciberseguridad con distintas iniciativas para aumentar nuestras capas de seguridad, y anticipar posibles ataques, desarrollar capacidades para responder a un incidente y cumplir con nuestras responsabilidades con clientes y organismos reguladores para reducir exposici??n a riesgos, sanciones legales, p??rdidas operativas y/o da??os a la reputaci??n.',
        },
        technologyStrategy: {
          title: 'Estrategia Tecnol??gica',
          description:
            'Son las pol??ticas, hojas de ruta, planes y acciones relacionadas con la toma de decisiones para la creaci??n, difusi??n y uso de la tecnolog??a, orientados a la eficiencia, competitividad y productividad de la compa????a, con una visi??n de innovaci??n y adaptaci??n de la compa????a a los futuros desaf??os y nuevos negocios.',
        },
        talentManagement: {
          title: 'Gesti??n de Talento',
          description:
            'Desarrollar la Gesti??n del Talentos, contando con una serie de procesos y estrategias que permitan Identificar y Atraer las personas claves para la gerencia de Sistemas, adem??s de  Desarrollar, Reconocer y Retener a nuestras personas, desafiando de manera permanente el Status Quo; permitiendo que nuestros talentos desarrollen su ingenio y creatividad de manera libre y espontanea; y permiti??ndoles conocer y trazar su desarrollo al interior de Cencosud. ',
        },
        digitalStrategy: {
          title: 'Estrategia Digital',
          description:
            'Son las acciones y decisiones necesarias para transformar la compa????a a trav??s la construcci??n y adopci??n de plataformas digitales con el objetivo de acelerar y eficientizar los procesos de la Cencosud siguiendo las tendencias y referentes del mercado. ',
        },
        centricityConsumer: {
          title: 'Customer Centricity',
          description:
            'Definir, modelar y entregar Soluciones Tecnol??gicas de forma ??gil y sustentable en las cuales se basen los procesos de negocio relacionados con el Cliente Final. Vemos al cliente en el coraz??n de todos los procesos de negocio y lo colocamos en el centro de todas nuestras decisiones y acciones. Buscamos conocer a nuestro cliente y entregarle experiencias diferenciales y personalizadas.',
        },
        detailTextSubIniciatives: {
          titleFile: 'Archivos disponibles',
          buttonText: 'Conozca la Iniciativa',
          responsable: 'Responsable sub iniciativa',
          state: 'Estado',
          impact: 'Impacto',
          scope: 'Alcance',
          implementationEndDate: 'Fin de implementaci??n',
          country: 'Pa??s',
          businessUnit: 'Unidad de negocio',
          flag: 'Bandera',
        },
      },
      pt: {
        textInitHero: 'Descobri-las???',
        titleHero: 'Avenidas Estrat??gicas de Sistemas',
        descriptionHero:
          'Neste portal encontrar?? toda a informa????o correspondente ??s iniciativas que decorrem dos objetivos da Gest??o de Sistemas Corporativos.',
        textButtonHero: 'Quero conhecer as avenidas',
        linkEs: 'Portugu??s',
        linkPt: 'Espanhol',
        titleSectionAvenues: 'Nossas avenidas',
        infoSectionAvenues: '',
        buttonBack: 'Voltar',
        newITModel: {
          title: 'Novo Modelo de TI',
          description:
            'Converter a Gest??o de Sistemas em uma ??rea estrat??gica para a Cencosud, tendo uma Obsess??o permanente para o nosso cliente interno; e ser reconhecida como uma refer??ncia que conhece e impulsiona a inova????o, permitindo o crescimento dos neg??cios atrav??s da combina????o de pessoas, processos e tecnologias, conseguindo assim prestar um servi??o de excel??ncia aos nossos clientes.',
        },

        cybersecurity: {
          title: 'Ciberseguran??a  e  conformidade',
          description:
            'Em um contexto onde a transforma????o digital se acelerou, do mesmo jeito as ciberamea??as.  definimos um Programa de Seguran??a Cibern??tica com diferentes iniciativas para aumentar nossa cobertura de seguran??a e antecipar poss??veis ataques, desenvolver capacidades para responder a um incidente e cumpri-lo. Nossas outras responsabilidades com clientes e ??rg??os reguladores para reduzir a exposi????o a riscos, penalidades legais, perdas operacionais e / ou danos ?? reputa????o.',
        },
        technologyStrategy: {
          title: 'Estrategia Tecnol??gica',
          description:
            'S??o as pol??ticas, roadmaps, planos e a????es relacionados ?? tomada de decis??o para a cria????o, dissemina????o e uso de tecnologia, visando a efici??ncia, competitividade e produtividade da empresa, com uma vis??o de inova????o e adapta????o da empresa para desafios futuros e novos neg??cios.',
        },
        talentManagement: {
          title: 'Gest??o de Talentos',
          description:
            'Desenvolver a Gest??o de Talentos, contando com um conjunto de processos e Estrategias que permitem Identificar e Atrair pessoas-chave para a gest??o de Sistemas, al??m de Desenvolver, Reconhecer e Reter nossa gente, desafiando permanentemente o Status Quo; permitindo que nossos talentos desenvolvam sua engenhosidade e criatividade livre e espontaneamente; e permitindo que eles conhe??am e rastreiem seu desenvolvimento dentro da Cencosud.',
        },
        digitalStrategy: {
          title: 'Estrategia Digital',
          description:
            'S??o as a????es e decis??es necess??rias para transformar a empresa por meio da constru????o e ado????o de plataformas digitais com o objetivo de acelerar e tornar mais eficientes os processos do Cencosud, seguindo tend??ncias e benchmarks de mercado.',
        },

        centricityConsumer: {
          title: 'Centricidade do cliente',
          description:
            'Definir, modelar e entregar Solu????es Tecnol??gicas de forma ??gil e sustent??vel em que se baseiam os processos de neg??cio relacionados ao Cliente Final. Vemos o cliente no centro de todos os processos de neg??cios e os colocamos no centro de todas as nossas decis??es e a????es. Buscamos conhecer nosso cliente e proporcionar-lhe experi??ncias diferenciadas e personalizadas.',
        },
        detailTextSubIniciatives: {
          titleFile: 'Arquivos dispon??veis',
          buttonText: 'Conhe??a a Iniciativa',
          responsable: 'Chefe da sub-iniciativa',
          state: 'Estado',
          impact: 'Impacto',
          scope: 'Escopo',
          implementationEndDate: 'Fim da implementa????o',
          country: 'Pa??s',
          businessUnit: 'Unidade de neg??cio',
          flag: 'Bandeira',
        },
      },
    },
  },
})
@Injectable()
export class AvenuesState {
  constructor(
    private readonly mockAvenidas: MockAvenidasService,
    private readonly service: AvenuesService
  ) {}

  itemsAvenidas = { es: itemsAvenidas, pt: itemsAvenidas };

  @Selector()
  public static getAvenues({ avenues }: AvenuesStateModel): any {
    return avenues;
  }

  @Selector()
  public static getItemsAvenues({ itemsAvenues }: AvenuesStateModel): any {
    return itemsAvenues;
  }

  @Selector()
  public static getLanguage({ language }: AvenuesStateModel): string {
    return language;
  }

  @Selector()
  public static getTextsMock({ textsMock }: AvenuesStateModel): any {
    return textsMock;
  }

  @Selector()
  public static getPaths({ paths }: AvenuesStateModel): any {
    return paths;
  }

  @Selector()
  public static selectedIniciatives({
    selectedIniciatives,
  }: AvenuesStateModel): any[] {
    return selectedIniciatives;
  }

  @Selector()
  public static selectedSubIniciatives({
    selectedSubIniciatives,
  }: AvenuesStateModel): any {
    return selectedSubIniciatives;
  }
  //mockAvenidas - service
  @Action(GetAvenues)
  getAvenues({ getState, setState }: StateContext<AvenuesStateModel>) {
    try {
      this.service.getAvenidas().subscribe(
        (res) => {
          let avenuesEs = [];
          let avenuesPt = [];
          let totalAvenues = res.result.totalAvenues;
          let totalIniciatives = 0;
          let totalSubIniciatives = 0;

          for (const [index, value] of res.result.avenues.entries()) {
            totalIniciatives += value.totalIniciatives;
            let modelAvenuesEs = {
              title: value.name,
              src: `assets/image/icono-avenidas-${index + 1}.png`,
              class: `circle-icon-${index + 1}`,
              href: navHref['es'].find((e) => e.id === index + 1).href,
              path: value.path,
              iniciativas: value.iniciatives.map((value) => {
                totalSubIniciatives += value.totalSubiniciatives;
                return {
                  title: value.language.es.name,
                  href: navHref['es'].find((e) => e.id === index + 1).href,
                  path: value.language.es.path,
                  description: value.language.es.description,
                  subIniciativas:
                    value.subIniciatives.length > 0
                      ? value.subIniciatives.map((sub) => {
                          const imagen = validateImagenFile(sub.files);
                          return {
                            title: sub.language.es.name,
                            image: sub.imagen
                              ? sub.imagen
                              : imagen
                              ? imagen
                              : 'assets/image/empty_image.jpg',
                            description: sub.language.es.description,
                            responsable: sub.language.es.responsable,
                            state: sub.language.es.state,
                            impact: sub.language.es.impact,
                            scope: sub.language.es.scope,
                            country: sub.language.es.country,
                            businessUnit: sub.language.es.businessUnit,
                            flag: sub.language.es.flag,
                            files: sub.files,
                            implementationEndDate: implementationEndDate
                              ? formatDate(sub.implementationEndDate)
                              : null,
                            path: sub.language.es.path,
                            url: sub.url,
                          };
                        })
                      : [],
                };
              }),
            };

            let modelAvenuesPt = {
              title: value.name,
              src: `assets/image/icono-avenidas-${index + 1}.png`,
              class: `circle-icon-${index + 1}`,
              href: navHref['pt'].find((e) => e.id === index + 1).href,
              path: value.path,
              iniciativas: value.iniciatives.map((value) => {
                return {
                  title: value.language.pt.name,
                  href: navHref['pt'].find((e) => e.id === index + 1).href,
                  path: value.language.pt.path,
                  description: value.language.pt.description,
                  subIniciativas:
                    value.subIniciatives.length > 0
                      ? value.subIniciatives.map((sub) => {
                          const imagen = validateImagenFile(sub.files);
                          return {
                            title: sub.language.pt.name,
                            image: sub.imagen
                              ? sub.imagen
                              : imagen
                              ? imagen
                              : 'assets/image/empty_image.jpg',
                            description: sub.language.pt.description,
                            responsable: sub.language.pt.responsable,
                            state: sub.language.pt.state,
                            impact: sub.language.pt.impact,
                            scope: sub.language.pt.scope,
                            country: sub.language.pt.country,
                            businessUnit: sub.language.pt.businessUnit,
                            flag: sub.language.pt.flag,
                            files: sub.files,
                            implementationEndDate: formatDate(
                              sub.implementationEndDate
                            ),
                            path: sub.language.pt.path,
                            url: sub.url,
                          };
                        })
                      : [],
                };
              }),
            };
            this.itemsAvenidas = {
              ...this.itemsAvenidas,
              es: {
                ...this.itemsAvenidas.es,
                [`item${index + 1}`]: {
                  title: modelAvenuesEs.title,
                  path: modelAvenuesEs.path,
                  iniciativas: modelAvenuesEs.iniciativas,
                },
              },
              pt: {
                ...this.itemsAvenidas.pt,
                [`item${index + 1}`]: {
                  title: modelAvenuesPt.title,
                  path: modelAvenuesPt.path,
                  iniciativas: modelAvenuesPt.iniciativas,
                },
              },
            };
            avenuesEs.push(modelAvenuesEs);
            avenuesPt.push(modelAvenuesPt);
          }
          let infoSectionAvenuesPt = `O portal ?? composto por <b>${totalAvenues}</b> objetivos denominados avenidas, dos quais emergem <b>${totalIniciatives}</b> iniciativas-chave e <b>${totalSubIniciatives}</b> sub-iniciativas.`;
          let infoSectionAvenuesEs = `El portal esta compuesto por <b>${totalAvenues}</b> objetivos llamados avenidas, de las cuales se desprenden <b>${totalIniciatives}</b> iniciativas clave y <b>${totalSubIniciatives}</b> sub-iniciativas.`;

          const state = getState();
          setState({
            ...state,
            avenues: {
              ...state.avenues,
              es: avenuesEs,
              pt: avenuesPt,
            },
            textsMock: {
              ...state.textsMock,
              es: {
                ...state.textsMock.es,
                infoSectionAvenues: infoSectionAvenuesEs,
              },
              pt: {
                ...state.textsMock.pt,
                infoSectionAvenues: infoSectionAvenuesPt,
              },
            },
            itemsAvenues: this.itemsAvenidas,
          });
        },
        (error) => {
          throw error;
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  @Action(SetSubIniciatives)
  setSubIniciative(
    { getState, patchState }: StateContext<AvenuesStateModel>,
    { payload }: SetSubIniciatives
  ) {
    const state = getState();
    patchState({ ...state, selectedSubIniciatives: payload });
  }

  @Action(SetIniciatives)
  setIniciatives(
    { getState, patchState }: StateContext<AvenuesStateModel>,
    { payload }: SetIniciatives
  ) {
    const state = getState();
    patchState({ ...state, selectedIniciatives: payload });
  }

  @Action(SetLanguage)
  setLanguage(
    { getState, patchState }: StateContext<AvenuesStateModel>,
    { payload }: SetLanguage
  ) {
    const state = getState();
    patchState({ ...state, language: payload });
  }
}

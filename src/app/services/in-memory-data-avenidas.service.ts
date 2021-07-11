import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataAvenidasService extends InMemoryDbService {
  createDb() {
    const avenidas = {
      result: {
        totalAvenues: 6,
        avenues: [
          {
            name: 'Customer Centricity',
            path: 'customer-centricity',
            totalIniciatives: 2,
            iniciatives: [
              {
                id: '5f8f1f0310b61032041995d5',
                language: {
                  es: {
                    name: 'Visión 360',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'vision-360',
                  },
                  pt: {
                    name: 'Visão 360',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'visao-360',
                  },
                },
                createdAt: '2020-10-20T16:52:15.466Z',
                updatedAt: null,
                subIniciatives: [
                  {
                    language: {
                      es: {
                        name: 'Comprobación del estado del proceso empresarial',
                        description:
                          'Solicitud de gestión online de información relativa a la salud de al menos 2 procesos productivos de negocio.',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                        path: 'comprobación-del-estado-del-proceso-empresarial',
                      },
                      pt: {
                        name: 'Health Check de processo de negocios',
                        description:
                          'Aplicação para gestão online das informações pertinentes à saúde de ao menos 2 processos de negócio produtivos.',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                        path: 'health-check-de-processo-de-negocios',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: null,
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'http://www.facebook.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                  {
                    language: {
                      es: {
                        name: 'Visión tecnológica 360 de los locales',
                        description:
                          'Visión online de los equipos de comunicación con su ubicaciones físicas y estado. Piloto de algunas cuentas.',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                        path: 'vision-tecnológica-360-de-los-locales',
                      },
                      pt: {
                        name: 'Visão 360 tecnológica das instalações',
                        description:
                          'Visão online dos equipamentos de comunicação com suas localizações físicas e status. Piloto de algumas contas.',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                        path: 'visao-360-tecnológica-das-instalacoes',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'assets/image/empty_image.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'http://www.facebook.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                  {
                    language: {
                      es: {
                        name: 'SAP SOLMAN indicadores de Negocio',
                        description:
                          'Dashboard de Procesos CORE de SAP enfoque Negocio',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                        path: 'sap-solman-indicadores-de-negocio',
                      },
                      pt: {
                        name: 'Indicadores de negócios SAP SOLMAN',
                        description:
                          'SAP CORE Process Dashboard Foco comercial',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                        path: 'indicadores-de-negócios-sap-solman',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'assets/image/empty_image.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'http://www.facebook.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                  {
                    language: {
                      es: {
                        name: 'Visibilidad de Tráfico',
                        description:
                          'Visivilidad de tráfico en tiendas, composición y estadísticas de uso.',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                        path: 'visibilidad-de-trafico',
                      },
                      pt: {
                        name: 'Visibilidade do trânsito',
                        description:
                          'Visibilidade do tráfego da loja, composição e estatísticas de uso.',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                        path: 'visibilidade-do-transito',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'assets/image/empty_image.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'http://www.facebook.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                ],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Customer Centricity',
                  __v: 0,
                },
                totalSubiniciatives: 4,
              },
              {
                id: '5f901e6b878ef3191d792441',
                language: {
                  es: {
                    name: 'Interación Directa y Personalización',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'interación-directa-y-personalización',
                  },
                  pt: {
                    name: 'Interação direta e personalização',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'interacao-direta-e-personalizacao',
                  },
                },
                createdAt: '2020-10-21T11:41:04.389Z',
                updatedAt: null,
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Customer Centricity',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Cyberseguridad y Compliance',
            path: 'cyberseguridad-y-compliance',
            totalIniciatives: 2,
            iniciatives: [
              {
                id: '5f8f1f0310b61032041995d5',
                language: {
                  es: {
                    name: 'Compiliance Regulatorio',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'compiliance-regulatorio',
                  },
                  pt: {
                    name: 'Conformidade regulatória',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'conformidade-regulatória',
                  },
                },
                createdAt: '2020-10-20T16:52:15.466Z',
                updatedAt: null,
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Cyberseguridad y Compliance',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f901e6b878ef3191d792441',
                language: {
                  es: {
                    name: 'Prevencion de Cyberamenazas',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'prevencion-de-cyberamenazas',
                  },
                  pt: {
                    name: 'Prevenção de ameaças cibernéticas',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'prevencao-de-ameacas-ciberneticas',
                  },
                },
                createdAt: '2020-10-21T11:41:04.389Z',
                updatedAt: null,
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Cyberseguridad y Compliance',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Estrategia digital',
            path: 'estrategia-digital',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Ecosistema de Colaboración Digital',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'ecosistema-de-colaboracion-digital',
                  },
                  pt: {
                    name: 'Ecossistema de colaboração digital',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'ecossistema-de-colaboracao-digital',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Automatización de Procesos de Negocio',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'automatizacion-de-procesos-de-negocio',
                  },
                  pt: {
                    name: 'Automação de Processos de Negócios',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'automacao-de-processos-de-negocios',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Digitalización de Experiencia de Cliente',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'digitalizacion-de-experiencia-de-cliente',
                  },
                  pt: {
                    name: 'Digitalização da Experiência do Cliente',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'Digitalizacao-da-experiencia-do-cliente',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Estrategia Tecnológica',
            path: 'estrategia-tecnológica',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Mapa de Obsolescencia',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'mapa-de-obsolescencia',
                  },
                  pt: {
                    name: 'Mapa de Obsolescência',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    ṕath: 'mapa-de-obsolescencia',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Migración de Cloud',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'migración-de-cloud',
                  },
                  pt: {
                    name: 'Migração de Cloud',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'migracao-de-cloud',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Racionalización de Aplicaciones',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'racionalizacion-de-aplicaciones',
                  },
                  pt: {
                    name: 'Racionalizando aplicativos',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'racionalizando-aplicativos',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Gestión de Talento',
            path: 'gestion-de-talento',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Atracción, retención y Desarrollo de Talento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'atraccion-retención-y-desarrollo-de-talento',
                  },
                  pt: {
                    name: 'Atração, retenção e desenvolvimento de talentos',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'atracao-retencao-e-desenvolvimento-de-talentos',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Identificación y Gestión de Talento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'identificacion-y-gestion-de-talento',
                  },
                  pt: {
                    name: 'Identificação e gestão de talentos',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'identificacao-e-gestao-de-talentos',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Plan de Reconocimiento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'plan-de-reconocimiento',
                  },
                  pt: {
                    name: 'Plano de Reconhecimento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'plano-de-reconhecimento',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Nuevo Modelo TI',
            path: 'nuevo-modelo-it',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Gestión de OPEX',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'gestion-de-opex',
                  },
                  pt: {
                    name: 'Gestão OPEX',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'gestao-opex',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Gestión de PROYECTOS CAPEX',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'gestion-de-proyectos-capex',
                  },
                  pt: {
                    name: 'Gestão de CAPEX PROJETO',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'gestao-de-capex-projeto',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Gobierno TI',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'gobierno-ti',
                  },
                  pt: {
                    name: 'Governança de TI',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                    path: 'governanca-de-ti',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
        ],
      },
    };

    return { avenidas };
  }
}

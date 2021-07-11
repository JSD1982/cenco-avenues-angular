interface IProps {
  src: string;
  class: string;
  href:string;
}


export interface IDetails {
  resposable: string;
  estado: string;
  impacto: string;
  alcance: string;
  archivos: any[];
}

export interface ISubIniciativas {
  title: string;
  image: string;
  description: string;
  details: IDetails;
}

export interface IIniciativas {
  title: string;
  subIniciativas: ISubIniciativas[];
}

export interface IAvenidas extends IProps {
  id?: number;
  title: string;
  iniciativas: IIniciativas[];
}

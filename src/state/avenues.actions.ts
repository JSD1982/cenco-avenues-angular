export class SetIniciatives {
  static readonly type = '[Avenues] Set Iniciatives';
  constructor(public payload: any[]) {}
}

export class SetSubIniciatives {
  static readonly type = '[Avenues] Set SubIniciatives';
  constructor(public payload: any) {}
}
export class SetLanguage {
  static readonly type = '[Avenues] Set Language';
  constructor(public payload: any) {}
}

export class GetAvenues {
  static readonly type = '[Avenues] Get';
}

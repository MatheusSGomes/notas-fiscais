export class Maybe {
  
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Maybe(value)
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }

  map(fn) {
    
    // se não tem valor
    if(this.isNothing()) return Maybe.of(null);

    // se tem valor
    return Maybe.of(fn(this._value));
  }

  getOrElse(value) {
    if(this.isNothing()) return value;
    return this._value;
  }
}
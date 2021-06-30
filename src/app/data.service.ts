import { Injectable } from '@angular/core';

export class SearchResultModel {
  constructor(
    public id: string,
    public name: string,
    public age: number,
    public surname: string
  ) {}
}

@Injectable()
export class DataService {
  public people: Array<SearchResultModel>;

  constructor() {
    this.people = new Array<SearchResultModel>();

    this.people.push(new SearchResultModel('#123456789#', 'John', 25, 'Doe'));
    this.people.push(new SearchResultModel('#987654321#', 'Jane', 27, 'Doe'));
  }
}

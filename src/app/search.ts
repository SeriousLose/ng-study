import { Component } from '@angular/core';
import { DataService, SearchResultModel } from './data.service';

@Component({
  template: ` <div class="panel panel-primary">
    <div class="panel-heading">Search Results</div>
    <table class="table table-primary">
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tr *ngFor="let searchResult of searchResults">
        <td>
          <a
            class="btn btn-success"
            [routerLink]="['../person', searchResult.id]"
            >View</a
          >
        </td>
        <td>{{ searchResult.id }}</td>
        <td>{{ searchResult.name }}</td>
        <td>{{ searchResult.surname }}</td>
        <td>{{ searchResult.age }}</td>
      </tr>
    </table>
  </div>`,
})
export class SearchComponent {
  public searchResults: Array<SearchResultModel>;

  constructor(data: DataService) {
    this.searchResults = data.people;
  }
}

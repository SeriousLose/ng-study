import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, SearchResultModel } from './data.service';

@Injectable()
export class PersonService {
  public selectedPerson: SearchResultModel;
}

@Component({
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">Person- {{ person.name }}</div>
      <div class="panel-body">
        <router-outlet></router-outlet>
      </div>
      <div class="panel-footer">
        <a class="btn btn-default" [routerLink]="['../../search']">Back</a>
      </div>
    </div>
  `,
  providers: [PersonService],
})
export class PersonComponent implements OnInit {
  @Input() public person: SearchResultModel;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private personService: PersonService
  ) {}

  ngOnInit() {
    const id = (this.route.params as any).value.id;
    this.personService.selectedPerson = this.data.people.filter(function(
      searchResult
    ) {
      return searchResult.id === id;
    })[0];
    this.person = this.personService.selectedPerson;
  }
}

@Component({
  template: `
    <div class="form-group">
      <label class="control-label">Name</label>:
      <label class="control-label">{{ person.name }}</label>
    </div>
    <div class="form-group">
      <label class="control-label">Surname</label>
      <label class="control-label">{{ person.surname }}</label>
    </div>
    <div class="form-group">
      <label class="control-label">Age</label>
      <label class="control-label">{{ person.age }}</label>
    </div>
    <div>
      <a class="btn btn-success" [routerLink]="['../edit']">Edit</a>
    </div>
    <input/>
  `,
})
export class ViewPersonComponent implements OnInit {
  @Input()
  public person: SearchResultModel;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.person = this.personService.selectedPerson;
  }
}

@Component({
  template: `
    <div class="form-group">
      <label class="control-label">Name</label>
      <input
        type="text"
        class="form-control"
        name="name"
        [ngModel]="person.name"
      />
    </div>
    <div class="form-group">
      <label class="control-label">Surname</label>
      <input
        type="text"
        class="form-control"
        name="name"
        [ngModel]="person.surname"
      />
    </div>
    <div class="form-group">
      <label class="control-label">Age</label>
      <input
        type="number"
        class="form-control"
        name="name"
        [ngModel]="person.age"
      />
    </div>
  `,
})
export class EditPersonComponent implements OnInit {
  @Input()
  public person: SearchResultModel;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.person = this.personService.selectedPerson;
  }
}

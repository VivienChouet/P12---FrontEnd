import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ChateauService } from 'src/app/services/chateau.service';

@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.css']
})
export class SearchAutocompleteComponent implements OnInit {

  constructor(private chateauService : ChateauService) { }

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  this.autocompleteListName;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private autocompleteListName(){
    this.chateauService.getListNameChateaux().subscribe( nameChateau =>
      this.options = nameChateau
    )
  }
}

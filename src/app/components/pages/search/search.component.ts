import { SearchService } from './../../../services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean = false;
  query: string = '';
  foods: any = [];

  constructor(private service: SearchService) {}

  ngOnInit(): void {}

  getSearch(): any {
    this.loading = true;
    this.service
      .search(this.query)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.foods = data.results;
      });
  }

}

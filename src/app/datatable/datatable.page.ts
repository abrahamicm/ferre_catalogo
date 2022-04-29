import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColumnMode } from '@swimlane/ngx-datatable';



export interface Data {
  movies: string;
}




@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.page.html',
  styleUrls: ['./datatable.page.scss'],
})
export class DatatablePage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;
 
  loadingIndicator = true;
  reorderable = true;

  constructor(private http: HttpClient) {
    this.columns = [
      {name: 'Name'},
      {name: 'Company'},
      {name: 'Genre'}
    ];

    this.http.get<Data>('../../assets/movies.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.movies;
      }
      );
  }

  ngOnInit() {
  }
  ColumnMode = ColumnMode;
}

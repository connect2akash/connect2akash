import { Component, OnInit } from '@angular/core';
import { AgGridEvent } from 'ag-grid-community';

import { Student } from './../student';
import { MockServerService } from './../mockServer.service';

@Component({
  selector: 'app-route-5',
  templateUrl: './route-5.component.html',
  styleUrls: ['./route-5.component.css']
})
export class Route5Component implements OnInit {

  public rowData: Student[];
  public columnDefs: any;
  private gridApi: any;
  constructor(private mockServer: MockServerService) { }

  ngOnInit(): void {
    this.columnDefs = [
      { field: "name", sortable: true },
      { field: "class", sortable: true },
      { field: "section", sortable: true },
      { field: "sub1", sortable: true },
      { field: "sub2", sortable: true },
      { field: "sub3", sortable: true }
    ];
    this.mockServer.getUsers().subscribe((data: Student[]) => {
      this.rowData = data;
    });
  }

  public onGridReady(params: AgGridEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }
}

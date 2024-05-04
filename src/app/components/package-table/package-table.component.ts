import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: number;
  position: string;
  weight: string;
  symbol: string;
  address: string;
}
@Component({
  selector: 'app-package-table',
  templateUrl: './package-table.component.html',
  styleUrls: ['./package-table.component.scss']
})
export class PackageTableComponent implements OnInit, AfterViewInit{
  public packages:any;
  public dataSource: any;
  public displayedColumns = ['client_name', 'package_price', 'extraction_date', 'shipping_tier', 'shipping_address', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(){}

  ngOnInit(): void {
    this.packages = [];
    for(let i=1; i<100; i++){
      this.packages.push(
        {
          client_name: Math.random().toString(20),
          package_price: i*240,
          extraction_date: new Date().toISOString(),
          shipping_tier: Math.random().toString(20),
          shipping_address: Math.random().toString(20)
        }
      )
    }
    this.dataSource = new MatTableDataSource(this.packages);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteRecord(row: any): void {
    const index = this.dataSource.data.indexOf(row);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); // Update the table
    }
  }

  filterTable(event: Event){
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

}

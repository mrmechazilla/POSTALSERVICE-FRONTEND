import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogService } from 'src/app/services/dialog.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from '../search/search.component';

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
    styleUrls: ['./package-table.component.scss'],
    standalone: true,
    imports: [SearchComponent, MatTable, MatIconModule, MatPaginatorModule, DatePipe, TranslateModule]
})
export class PackageTableComponent implements OnInit, AfterViewInit{
  public packages:any;
  public dataSource: any;
  public displayedColumns = ['client_name', 'package_price', 'extraction_date', 'shipping_tier', 'shipping_address', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialogService: DialogService){}

  ngOnInit(): void {
    this.packages = [];
    for(let i=1; i<100; i++){
      this.packages.push(
        {
          client_name: Math.random().toString(20),
          package_price: i*240,
          extraction_date: new Date().toString(),
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

  openDetails(){
    this.dialogService.openConfirmDialog('').afterClosed().subscribe((res: boolean) => {
    });
  }

  openConfirmation(){
    this.dialogService.openConfirmDeletion('').afterClosed().subscribe((res: boolean) => {
    });
  }

}

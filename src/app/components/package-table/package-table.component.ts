import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 0.79, symbol: 'PREMIUM'},
  {position: 2, name: 'Helium', weight: 0.55, symbol: 'STANDARD'},
  {position: 3, name: 'Lithium', weight: 0.42, symbol: 'PREMIUM'},
  {position: 4, name: 'Beryllium', weight: 0.97, symbol: 'PREMIUM'},
  {position: 5, name: 'Boron', weight: 0.51, symbol: 'VIP'},
  {position: 6, name: 'Carbon', weight: 0.65, symbol: 'STANDARD'},
  {position: 7, name: 'Nitrogen', weight: 0.25, symbol: 'STANDARD'},
  {position: 8, name: 'Oxygen', weight: 0.84, symbol: 'VIP'},
  {position: 9, name: 'Fluorine', weight: 0.94, symbol: 'VIP'},
  {position: 10, name: 'Neon', weight: 0.12, symbol: 'PREMIUM'},
];

@Component({
  selector: 'app-package-table',
  templateUrl: './package-table.component.html',
  styleUrls: ['./package-table.component.scss']
})
export class PackageTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}

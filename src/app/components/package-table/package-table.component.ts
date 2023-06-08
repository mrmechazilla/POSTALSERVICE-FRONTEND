import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: number;
  position: string;
  weight: string;
  symbol: string;
  address: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Mr. YOUSSEF', name: 50.00, weight: '12-05-2023', symbol: 'PREMIUM', address:'Tangier, Morocco'},
  {position: 'Mr. SAMIH', name: 15.28, weight: '15-05-2023', symbol: 'STANDARD', address:'Mohammedia, Morocco'},
  {position: 'Mr. AHMED', name: 58.02, weight: '29-05-2023', symbol: 'VIP', address:'Settat, Morocco'},
  {position: 'Mr. AYMANE', name: 19.00, weight: '25-05-2023', symbol: 'STANDARD', address:'Ouajda, Morocco'},
  {position: 'Miss. FAIZA', name: 8.00, weight: '20-05-2023', symbol: 'VIP', address:'Casablanca, Morocco'},
  {position: 'Mr. HOUSSAM', name: 10.84, weight: '02-05-2023', symbol: 'VIP', address:'Rabat , Morocco'},
  {position: 'Mr. LOKMANE', name: 24.02, weight: '09-05-2023', symbol: 'PREMIUM', address:'Marrakech, Morocco'},
];

@Component({
  selector: 'app-package-table',
  templateUrl: './package-table.component.html',
  styleUrls: ['./package-table.component.scss']
})
export class PackageTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'address'];
  dataSource = ELEMENT_DATA;

}

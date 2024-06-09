import { Component, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-package-creation',
  templateUrl: './package-creation.component.html',
  styleUrls: ['./package-creation.component.scss']
})
export class PackageCreationComponent {
  @ViewChild('picker')
  picker!: MatDatepicker<Date>;
  shippings: Food[] = [
    {value: 'STANDARD-0', viewValue: 'STANDARD'},
    {value: 'PREMIUM-1', viewValue: 'PREMIUM'},
    {value: 'VIP-2', viewValue: 'VIP'}, 
    {value: 'VIP-2', viewValue: 'LUXIRY'}, 
    {value: 'VIP-2', viewValue: 'ROYAL'}, 
    {value: 'VIP-2', viewValue: 'FREE'}, 
    {value: 'VIP-2', viewValue: 'ULTRA VIP'},
  ];
}

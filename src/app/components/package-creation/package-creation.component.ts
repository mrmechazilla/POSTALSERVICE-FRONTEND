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

  downloadUserGuide() {
    const link = document.createElement('a');
    link.href = 'https://uat.www.orange-business.com/system/files/2023-11/myservicespace_quickstartguide_november2023_0.pdf'; // Remote PDF URL
    link.download = 'UserGuide.pdf'; // Set the desired download name
    link.target = '_blank'; // Open in a new tab (optional for better user experience)
    link.click();
  }
  
  
}

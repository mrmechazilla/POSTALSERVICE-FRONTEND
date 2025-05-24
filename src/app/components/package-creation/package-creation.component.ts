import { Component, ViewChild } from '@angular/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-package-creation',
    templateUrl: './package-creation.component.html',
    styleUrls: ['./package-creation.component.scss'],
    standalone: true,
    imports: [MatStepperModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatSelectModule, MatOptionModule, TranslateModule]
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

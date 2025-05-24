import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageCreationComponent } from './components/package-creation/package-creation.component';
import { PackageTableComponent } from './components/package-table/package-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Title } from '@angular/platform-browser';


const routes: Routes = [
  { path: '', redirectTo: 'laposte/package-creation', pathMatch: 'full'},
  { path: 'laposte/package-creation', component: PackageCreationComponent, title: 'Package Creation' },
  { path: 'laposte/packages-table', component: PackageTableComponent, title: 'Package Table' },
  { path: 'laposte/dashboard', component: DashboardComponent, title: 'Dashboard' },
  // Add additional routes here if needed
  // { path: 'other-path', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private titleService: Title){}
 }

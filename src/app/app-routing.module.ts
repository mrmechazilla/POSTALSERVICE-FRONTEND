import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageCreationComponent } from './components/package-creation/package-creation.component';
import { PackageTableComponent } from './components/package-table/package-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/package-creation', pathMatch: 'full' },
  { path: 'package-creation', component: PackageCreationComponent },
  { path: 'packages-table', component: PackageTableComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Add additional routes here if needed
  // { path: 'other-path', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

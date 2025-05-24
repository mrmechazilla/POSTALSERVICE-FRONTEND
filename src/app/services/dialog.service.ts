import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PackageDetailsComponent } from '../components/dialogs/package-details/package-details.component';
import { ConfirmDeletionComponent } from '../components/dialogs/confirm-deletion/confirm-deletion.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialog: MatDialog = inject(MatDialog);

  openConfirmDialog(msg: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    dialogConfig.height = '350px';
    dialogConfig.panelClass = 'confirm-dialog-container';
    //dialogConfig.disableClose = true;
    dialogConfig.data = {
      message: msg
    };
    return this.dialog.open(PackageDetailsComponent, dialogConfig);
  }

  openConfirmDeletion(msg: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '250px';
    dialogConfig.panelClass = 'confirm-deletion-container';
    //dialogConfig.disableClose = true;
    dialogConfig.data = {
      message: msg  
    };
    return this.dialog.open(ConfirmDeletionComponent, dialogConfig);
  }
}

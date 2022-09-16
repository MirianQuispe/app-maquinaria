import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-mensaje',
  templateUrl: './dialog-mensaje.component.html'
})
export class DialogMensajeComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<DialogMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit() {
  }

}

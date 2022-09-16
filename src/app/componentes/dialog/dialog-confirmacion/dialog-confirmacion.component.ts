import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmacion',
  templateUrl: './dialog-confirmacion.component.html',
  styles: [
  ]
})
export class DialogConfirmacionComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<DialogConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  confirmar(): void {
    this.dialogo.close(true);
  }
  cancelar(): void {
    this.dialogo.close(true);
  }
}

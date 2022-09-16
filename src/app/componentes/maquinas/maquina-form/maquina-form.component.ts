import { Component, OnInit } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Maquina } from 'src/app/clases/maquina';
import { MY_FORMATS_ANIO, MY_FORMATS_DIA_MES_ANIO } from 'src/app/clases/MY_FORMATS_FECHAS';
import { MaquinaService } from 'src/app/servicios/maquina.service';

@Component({
  selector: 'app-maquina-form',
  templateUrl: './maquina-form.component.html',
  styleUrls: ['./maquina-form.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS_ANIO },
  ],
})
export class MaquinaFormComponent implements OnInit {

  maquina : Maquina = new Maquina();
  constructor(private maquinaService: MaquinaService,
    private router: Router,
    public dialogo: MatDialog) { }

  ngOnInit(): void {
  }

  getErrorMessage(mensaje: string) {
    return mensaje;
  }
  public verificarPrimerPaso(formularioValido: boolean) {
    console.log(this.maquina);
    if (formularioValido == false) {
      //this.mostrarDialogo("Hay campos obligatorios sin completar", "error");
    }

  }

}

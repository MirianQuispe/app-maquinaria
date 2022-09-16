import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// COMPONENTES DE ANGULAR
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// PARA EL REGISTRO DEL IDIOMA DE NUESTRA APLICACION
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';
// COMPONENTES DE ANGULAR/MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { MaquinaFormComponent } from './componentes/maquinas/maquina-form/maquina-form.component';
import { MaquinaListComponent } from './componentes/maquinas/maquina-list/maquina-list.component'
import { DialogMensajeComponent } from './componentes/dialog/dialog-mensaje/dialog-mensaje.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { DialogConfirmacionComponent } from './componentes/dialog/dialog-confirmacion/dialog-confirmacion.component';

//Servicios
import { MaquinaService} from './servicios/maquina.service';

registerLocaleData(localeEs); //con esta funcion hacemos el registro del lenguaje en la aplicacion

@NgModule({
  declarations: [
    AppComponent,
    MaquinaFormComponent,
    MaquinaListComponent,
    DialogMensajeComponent,
    LoadingComponent,
    DialogConfirmacionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatButtonModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatRippleModule,MatDialogModule,MatStepperModule,MatIconModule
  ],
  providers: [
    {
      //con esto indicamos que el lenguaje por defecto de nuestra aplicacion sera el español argentina
      provide:LOCALE_ID,
      useValue:'es-AR'
    },
    MaquinaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

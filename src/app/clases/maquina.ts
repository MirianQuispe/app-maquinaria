import { Marca } from './marca';

export class Maquina {
    id: number;
    nombre: string;
    marca: string;
    modelo: string;
    anio: number;
    numeroSerie: string;
    numeroPatente: string;
    kilometrajeInicial: number;
    kilometrajeActual: number;
    horometroInicial: number;
    horometroActual: number;
    vencimientoSeguro: Date;
    vencimientoPermisoCirculacion: Date;
    vencimientoRevisionTecnica: Date;
    observaciones: string;
    numeroChasis: string;
    numeroMotor: string;
    kilometrajeOperativo: number;
    horasOperativas: number;
    estado: boolean;
}
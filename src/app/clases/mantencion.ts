import { Maquina } from './maquina';

export class Mantencion {
    id: number;
    maquina: Maquina;
    createdAt: Date;
    supervisor: string;
    autorizado: string;
    mecanico: string;
}
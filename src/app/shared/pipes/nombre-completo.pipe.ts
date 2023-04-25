import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/pages/formularios/formularios.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    const newValue = `${value.nombre} ${value.apellido}`;
    return newValue;
  }

}

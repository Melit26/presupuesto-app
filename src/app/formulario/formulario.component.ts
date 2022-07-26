import { Egreso } from './../egreso/egreso.model';
import { IngresoService } from './../ingreso/ingreso.service';
import { EgresoService } from './../egreso/egreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo: string = "ingresoOperacion";
  descripcionInput?: String;
  valorInput?: number;

  constructor(private ingresoService: IngresoService,
    private egresoService: EgresoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento: any){
    this.tipo = evento.target.value;
  }


  agregarValor() {
    if (this.tipo === "ingresoOperacion") {
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput!, this.valorInput!));
    }
    else {
      this.egresoService.egresos.push(new Egreso(this.descripcionInput!, this.valorInput!))
    }

  }

}

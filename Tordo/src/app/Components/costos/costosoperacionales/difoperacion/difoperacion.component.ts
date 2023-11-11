import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ScostosService } from '../../../../Services/servcostos/scostos.service';
import { forkJoin } from 'rxjs';

export interface UserData {
  id: string;
  concepto: string;
  monto: number;
  fecha: string;
  tipo: string; // Nuevo campo para tipo de costo
}

@Component({
  selector: 'app-difoperacion',
  templateUrl: './difoperacion.component.html',
  styleUrls: ['./difoperacion.component.css']
})
export class DifoperacionComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'concepto', 'monto', 'fecha','tipo'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private scostosService: ScostosService) {
    this.dataSource = new MatTableDataSource<UserData>([]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    forkJoin({
      costosFijos: this.scostosService.getcostofijo(),
      costosVariables: this.scostosService.getcostovariable()
    }).subscribe(({ costosFijos, costosVariables }) => {
      const datosCombinados = [
        ...costosFijos.map(item => ({ ...item, tipo: 'Fijo', fecha: item.fechacostofijo })), // Agrega el tipo "Fijo" y la fecha
        ...costosVariables.map(item => ({ ...item, tipo: 'Variable', fecha: item.fechacostovariable })) // Agrega el tipo "Variable" y la fecha
      ].map(item => ({
        id: item.id?.toString() || '',
        concepto: item.concepto,
        monto: item.monto,
        fecha: item.fecha, // Usa la fecha ya asignada
        tipo: item.tipo
      }));
      this.dataSource = new MatTableDataSource(datosCombinados);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
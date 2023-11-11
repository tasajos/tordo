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
  tipo: string;
}

@Component({
  selector: 'app-difoperacion',
  templateUrl: './difoperacion.component.html',
  styleUrls: ['./difoperacion.component.css']
})
export class DifoperacionComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'concepto', 'monto', 'fecha', 'tipo'];
  dataSource: MatTableDataSource<UserData>;
  sumatoriaFijos: number = 0;
  sumatoriaVariables: number = 0;
  sumatoriasDataSource?: MatTableDataSource<any>;

  total: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private scostosService: ScostosService) {
    this.dataSource = new MatTableDataSource<UserData>([]);
    this.sumatoriasDataSource = new MatTableDataSource<any>([]); // Inicializa con un arreglo vacío
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
        ...costosFijos.map(item => ({
          id: item.id?.toString() || '',
          concepto: item.concepto,
          monto: item.monto,
          fecha: item.fechacostofijo,
          tipo: 'Fijo'
        })),
        ...costosVariables.map(item => ({
          id: item.id?.toString() || '',
          concepto: item.concepto,
          monto: item.monto,
          fecha: item.fechacostovariable,
          tipo: 'Variable'
        }))
      ];
      this.dataSource = new MatTableDataSource(datosCombinados);

      this.sumatoriaFijos = costosFijos.reduce((sum, item) => sum + item.monto, 0);
      this.sumatoriaVariables = costosVariables.reduce((sum, item) => sum + item.monto, 0);
      this.total = this.sumatoriaFijos + this.sumatoriaVariables;

      this.sumatoriasDataSource = new MatTableDataSource([
        { descripcion: 'Sumatoria Costos Fijos', valor: this.sumatoriaFijos },
        { descripcion: 'Sumatoria Costos Variables', valor: this.sumatoriaVariables },
        { descripcion: 'Total', valor: this.total }
      ]);
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
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo, Pasivo,Estructura,Patrimonio,Finanza } from '../../../Interfaz/cuentas';
import * as XLSX from 'xlsx';




@Component({
  selector: 'app-estadofinanzas',
  templateUrl: './estadofinanzas.component.html',
  styleUrls: ['./estadofinanzas.component.css']
})
export class EstadofinanzasComponent implements OnInit {

  totalActivos: number = 0;
  totalPasivos: number = 0;
  totalPatrimonios: number = 0;
  totalIngresos: number = 0;
  totalEgresos: number = 0;
  totalDiferencia: number = 0;

  displayedColumns: string[] = ['id', 'categoria', 'descripcion', 'monto'];

  dataSource = new MatTableDataSource<Finanza>([]);


  constructor(private miServicio: ServcuentasccService) {}

  ngOnInit() {
      this.loadData();
  }

  loadData() {
    forkJoin({
      activos: this.miServicio.getActivos(),
      pasivos: this.miServicio.getPasivo(),
      patrimonios: this.miServicio.getPatrimonios(),
      ingresos: this.miServicio.getIngresos(),
      egresos: this.miServicio.getEgresos()
    }).subscribe({
      next: (result) => {
        // Calcula los totales
        this.totalActivos = result.activos.reduce((sum, current) => sum + current.monto, 0);
        this.totalPasivos = result.pasivos.reduce((sum, current) => sum + current.monto, 0);
        this.totalPatrimonios = result.patrimonios.reduce((sum, current) => sum + current.monto, 0);
        this.totalIngresos = result.ingresos.reduce((sum, current) => sum + current.monto, 0);
        this.totalEgresos = result.egresos.reduce((sum, current) => sum + current.monto, 0);

         // Calcula la diferencia entre ingresos y egresos
         this.totalDiferencia = this.totalIngresos - this.totalEgresos;

        // Combina los datos aquí
        const datosUnificados = [...result.activos, ...result.pasivos, ...result.patrimonios, ...result.ingresos, ...result.egresos].map(item => ({
          id: item.id,
          categoria: item.categoria,
          descripcion: item.descripcion,
          monto: item.monto
        }));

        // Agrega filas de totales al final
        const filasTotales = [
          { id: null, categoria: 'Total Activos', descripcion: '', monto: this.totalActivos },
          { id: null, categoria: 'Total Pasivos', descripcion: '', monto: this.totalPasivos },
          { id: null, categoria: 'Total Patrimonios', descripcion: '', monto: this.totalPatrimonios },
          { id: null, categoria: 'Total Ingresos', descripcion: '', monto: this.totalIngresos },
          { id: null, categoria: 'Total Egresos', descripcion: '', monto: this.totalEgresos },
        ];

        this.dataSource = new MatTableDataSource([...datosUnificados]);
       // this.dataSource = new MatTableDataSource([...datosUnificados, ...filasTotales]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }
  }

  descargarDatos() {
        // Extraer los datos del dataSource
  const datosParaExportar = this.dataSource.data.map(item => ({
    ID: item.id,
    Categoria: item.categoria,
    Descripcion: item.descripcion,
    Monto: item.monto
    // Añadir más campos si son necesarios
  }));

  // Agregar filas de sumatorias
  const filasSumatorias = [
    { ID: '', Categoria: 'Total Activos', Descripcion: '', Monto: this.totalActivos },
    { ID: '', Categoria: 'Total Pasivos', Descripcion: '', Monto: this.totalPasivos },
    { ID: '', Categoria: 'Total Patrimonios', Descripcion: '', Monto: this.totalPatrimonios },
    { ID: '', Categoria: 'Total Ingresos', Descripcion: '', Monto: this.totalIngresos },
    { ID: '', Categoria: 'Total Egresos', Descripcion: '', Monto: this.totalEgresos },
    { ID: '', Categoria: 'Diferencia Ingresos - Egresos', Descripcion: '', Monto: this.totalIngresos - this.totalEgresos }
  ];

// Combinar los datos con las filas de sumatorias
const datosExportarConSumatorias = [...datosParaExportar, ...filasSumatorias];

  // Crear un nuevo libro y una hoja con los datos
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(datosExportarConSumatorias);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Datos');

  // Especificar el nombre del archivo
  const nombreArchivo = 'EstadoResultado.xlsx';

  // Escribir el archivo y desencadenar la descarga
  XLSX.writeFile(wb, nombreArchivo);
}
  }

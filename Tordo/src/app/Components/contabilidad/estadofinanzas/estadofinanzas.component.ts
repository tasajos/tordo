import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';
import { ServcuentasccService } from '../../../Services/servcuentas/servcuentascc.service';
import { Activo, Pasivo,Estructura,Patrimonio,Finanza } from '../../../Interfaz/cuentas';



@Component({
  selector: 'app-estadofinanzas',
  templateUrl: './estadofinanzas.component.html',
  styleUrls: ['./estadofinanzas.component.css']
})
export class EstadofinanzasComponent implements OnInit {
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
              // Combina los datos aquí
              const datosUnificados = [...result.activos, ...result.pasivos, ...result.patrimonios, ...result.ingresos, ...result.egresos].map(item => {
                  // Transforma cada item a un objeto Finanza
                  return {
                      id: item.id,
                      categoria: item.categoria,
                      descripcion: item.descripcion,
                      monto: item.monto,
                      
                  };
              });
              this.dataSource = new MatTableDataSource(datosUnificados);
          },
          error: (err) => {
              // Manejo de errores
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
      // Implementar lógica para descargar datos
  }
}
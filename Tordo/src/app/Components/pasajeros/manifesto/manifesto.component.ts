import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { VentaPasajeticketInter } from 'src/app/Interfaz/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.css'],
})
export class ManifestoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'ci', 'asiento','tipo', 'origen', 'destino', 'hora', 'precio', 'placa',  'metodopago'];
  dataSource!: MatTableDataSource<VentaPasajeticketInter>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private listadopasajeros: SusuarioService) {
    this.dataSource = new MatTableDataSource<VentaPasajeticketInter>([]);
  }

  ngOnInit() {
    this.listadopasajeros.getpasajerosventa().subscribe(
      data => {
        console.log('Datos recibidos:', data); // <-- Imprime los datos aquí
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

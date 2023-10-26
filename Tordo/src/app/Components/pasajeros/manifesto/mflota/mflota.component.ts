import { Component, ViewChild, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { VentaPasajeticketInter } from 'src/app/Interfaz/usuario';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mflota',
  templateUrl: './mflota.component.html',
  styleUrls: ['./mflota.component.css']
})
export class MflotaComponent implements OnInit {
  resultados: VentaPasajeticketInter[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'ci', 'asiento','tipo', 'origen', 'destino', 'hora', 'precio'];

  dataSource!: MatTableDataSource<VentaPasajeticketInter>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private mflotaservicio: SusuarioService) {
    this.dataSource = new MatTableDataSource<VentaPasajeticketInter>([]);
  }

  ngOnInit() {
    this.mflotaservicio.getpasajerosventa().subscribe(
      data => {
        console.log('Datos recibidos:', data); 
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; // <-- Asegúrate de que esta línea esté aquí
      },
      error => {
        console.log('Error:', error);
      }
    );
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  buscarPorPlaca(placa: string) {
    this.mflotaservicio.getpasajerosflota(placa).subscribe(
      data => {
        this.resultados = data;
      },
      error => {
        console.error('Error obteniendo datos', error);
      }
    );
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { VentaPasajeticketInter } from 'src/app/Interfaz/usuario';

@Component({
  selector: 'app-admanifestofecha',
  templateUrl: './admanifestofecha.component.html',
  styleUrls: ['./admanifestofecha.component.css']
})
export class AdmanifestofechaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'ci', 'asiento', 'tipo', 'origen', 'destino', 'hora', 'precio', 'placa', 'fecha', 'FechaCreacion'];
  dataSource!: MatTableDataSource<VentaPasajeticketInter>;

  startDate: Date | null = null;
  endDate: Date | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private listadopasajeros: SusuarioService) {
    this.dataSource = new MatTableDataSource<VentaPasajeticketInter>([]);
  }

  ngOnInit() {
    this.listadopasajeros.getpasajerosventa().subscribe(
      data => {
        const formattedData = data.map(item => ({
          ...item,
          // Corrected the property name to 'FechaCreacion'
          FechaCreacion: item.FechaCreacion ? new Date(item.FechaCreacion).toLocaleDateString('en-US') : ''
        })) as VentaPasajeticketInter[];
        
        this.dataSource = new MatTableDataSource<VentaPasajeticketInter>(formattedData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error:', error);
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

  onSearch() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
  
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
  
      const filteredData = this.dataSource.data.filter(item => {
        // Corrected the property name to 'FechaCreacion'
        if (!item.FechaCreacion) {
          console.error('FechaCreacion is missing or invalid:', item);
          return false;
        }
        // Corrected the property name to 'FechaCreacion'
        const itemDate = new Date(item.FechaCreacion);
        return itemDate >= start && itemDate <= end;
      });
  
      this.dataSource.data = filteredData;
    } else {
      console.error('startDate and/or endDate is null');
    }
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearSearch() {
    this.startDate = null;
    this.endDate = null;
    this.ngOnInit(); // Puede que quieras reemplazar esto con una llamada a una función que recupere todos los datos nuevamente
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  formatDate(date: Date): string {
    // Esta función no es necesaria si las fechas ya están en el formato correcto
    // Sin embargo, la dejo aquí por si es necesaria en otra parte del código
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }

  parseDate(fechaCreacion: string): Date {
    // Esta función convierte una cadena de fecha en formato DD/MM/YYYY a un objeto Date
    const parts = fechaCreacion.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Los meses en JavaScript son 0-indexados
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  // Esta función podría no ser necesaria si las fechas de los DatePicker ya están en el formato correcto
  parseSearchDate(input: string): Date {
    const [day, month, year] = input.split('/').map(val => parseInt(val, 10));
    return new Date(year, month - 1, day);
  }
}
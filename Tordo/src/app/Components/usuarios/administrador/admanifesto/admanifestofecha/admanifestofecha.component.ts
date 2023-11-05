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
        // Map and format FechaCreacion
        const formattedData = data.map(item => ({
          ...item,
          FechaCreacion: item.FechaCreacion ? this.formatDate(new Date(item.FechaCreacion)) : ''
        })) as VentaPasajeticketInter[];  // Cast back to the expected type
        
        // Create a new MatTableDataSource with the formatted data
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
    console.log('onSearch called', this.startDate, this.endDate);
    if (this.startDate !== null && this.endDate !== null) {
      // Normalize the startDate and endDate to remove time part
      const start = new Date(this.startDate.setHours(0, 0, 0, 0));
      const end = new Date(this.endDate.setHours(23, 59, 59, 999));
  
      const filteredData = this.dataSource.data.filter(item => {
        if (!item.FechaCreacion) {
          console.error('FechaCreacion is missing or invalid:', item);
          return false;
        }
  
        // Normalize the item.FechaCreacion to remove time part
        const itemDate = new Date(item.FechaCreacion);
        itemDate.setHours(0, 0, 0, 0); // Set to start of the day for comparison
  
        // Check if the itemDate falls within the start and end date range
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
    this.ngOnInit(); // Reload the original data
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Go back to the first page of the table
    }
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero and get last two digits
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JS
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`; // Changed to DD/MM/YYYY format
  }
  
}

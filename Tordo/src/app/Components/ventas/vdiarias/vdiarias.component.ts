import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SusuarioService } from 'src/app/Services/susuario.service';
import { VentaPasajeticketInter } from 'src/app/Interfaz/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-vdiarias',
  templateUrl: './vdiarias.component.html',
  styleUrls: ['./vdiarias.component.css']
})
export class VdiariasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'ci', 'asiento', 'tipo', 'origen', 'destino', 'hora', 'precio', 'placa', 'fecha','metodopago'];
  dataSource!: MatTableDataSource<VentaPasajeticketInter>;

  totalPrecioQR: number = 0; // Total de precio con método de pago "QR"
totalPrecioEfectivo: number = 0; // Total de precio con método de pago "Efectivo"
metodoPagoActual: string = ''; // Método de pago actual


  startDate: Date | null = null;
  endDate: Date | null = null;
  totalPrecio: number = 0; // Variable para almacenar el sumarizado de precio

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

  onSearch() {
    console.log('onSearch called', this.startDate, this.endDate);
  
    // Reinicia los totales por método de pago al inicio de la búsqueda
    this.totalPrecioQR = 0;
    this.totalPrecioEfectivo = 0;
  
    if (this.startDate && this.endDate) {
      const filteredData = this.dataSource.data.filter(item => {
  
        // Identificar y convertir la fecha según su formato
        const [day, month, year] = (item.fecha || '').split('/');
        const itemDate = new Date(+year, +month - 1, +day);
  
        // Validación para asegurarnos de que la fecha convertida es válida
        if (isNaN(itemDate.getTime())) {
          console.error('Fecha inválida:', item.fecha, 'Ítem completo:', item);
          return false;
        }
  
        console.log('itemDate', itemDate);
  
        if (this.startDate !== null && this.endDate !== null) {
          const isIncluded = itemDate >= this.startDate && itemDate <= this.endDate;
          console.log('isIncluded', isIncluded);
  
          // Actualiza el total del precio y el método de pago actual al filtrar los datos
          if (isIncluded) {
            this.totalPrecio += item.precio;
  
            // Verifica el método de pago actual y suma al total correspondiente
            if (item.metodopago === 'qr') {
              this.totalPrecioQR += item.precio;
              this.metodoPagoActual = 'qr';
            } else if (item.metodopago === 'efectivo') {
              this.totalPrecioEfectivo += item.precio;
              this.metodoPagoActual = 'efectivo';
            }
          }
  
          return isIncluded;
        }
        return false;
      });
      console.log('filteredData', filteredData);
  
      this.dataSource.data = filteredData;
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearSearch() {
    this.startDate = null;
    this.endDate = null;
    this.totalPrecio = 0; // Restablece el total del precio al limpiar la búsqueda
    this.ngOnInit();  // Vuelve a cargar los datos originales
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();  // Vuelve a la primera página de la tabla
    }
  }

  recargar() {
    this.ngOnInit();
  }

  descargarDatos() {
    // Arreglo para almacenar los datos que se exportarán
    const datosParaExportar: any[] = [];
  
    // Columnas que se exportarán
    const columnasExportar = ['nombre', 'apellidos', 'ci', 'asiento', 'tipo', 'origen', 'destino', 'hora', 'precio', 'placa', 'fecha', 'metodopago'];
  
    // Itera sobre los datos filtrados y construye el arreglo de datos para exportar
    this.dataSource.filteredData.forEach(item => {
      const datoExportar: any = {};
      columnasExportar.forEach(columna => {
        datoExportar[columna] = item[columna];
      });
      datosParaExportar.push(datoExportar);
    });
  
    // Crea un libro de Excel con los datos exportados
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(datosParaExportar);
    XLSX.utils.book_append_sheet(wb, ws, 'DatosFiltrados');
  
    // Exporta el libro de Excel como un archivo .xlsx
    XLSX.writeFile(wb, 'datos_filtrados.xlsx');
  }
}

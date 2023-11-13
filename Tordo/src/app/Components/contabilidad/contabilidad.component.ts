import { Component } from '@angular/core';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent {




  navegarAactivo(): void {

    window.open('/cactivo', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
    }

    navegarApasivo(): void {

      window.open('/cpasivo', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
      }

      navegarApatrimonio(): void {

        window.open('/cpatrimonio', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
        }

        navegarAingreso(): void {

          window.open('/cingresos', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
          }

          navegarAegreso(): void {

            window.open('/cegresos', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
            }

            navegarAmtto(): void {

              window.open('/cmtto', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
              }

              navegarAestadoResultado(): void {

                window.open('/estadofi', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=900,height=700');
                }

              

}

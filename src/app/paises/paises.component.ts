import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( resultado => this.paises = resultado);
  }

  drop(evento: CdkDragDrop<any>) {
    console.log(evento);
    // Este metodo permite modificar la posicion de un elemento del array de una posicion previa a la posicion final
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

}

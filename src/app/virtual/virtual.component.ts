import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  // Este viewChild vincula con el componente cdk-virtual-scroll-viewport del HTML para realizar operaciones sobre el
  @ViewChild( CdkVirtualScrollViewport, {static: false} ) viewport: CdkVirtualScrollViewport;

  // Crea un array de 500 y lo rellena con 0s
  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irMitad(){
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

}

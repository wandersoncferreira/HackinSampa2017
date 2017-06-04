import { Component, OnInit, ElementRef, Input, ViewChild, OnChanges } from '@angular/core';


import * as Highcharts from "Highcharts";
require('highcharts/highcharts-more.js')(Highcharts);

import { SerieGrafico } from '../models/grafico.model';



/**
 * @author Artur Ribeiro
 *
 * Class TvcAcompanhamentoDemandaComponent - Controla componente
 */

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.sass']
})
export class GraficoComponent implements OnInit, OnChanges {

    w: any;
    chart: any;

    @ViewChild('grafico') grafico: ElementRef;

    @Input() opcoes: any;
    @Input() series: SerieGrafico[];

    constructor(private elementRef: ElementRef) {
        this.w = window;
    }

    ngOnInit() {
        // Preparando o grafico
        this.prepararGrafico();
    }

    ngOnChanges(changes: any) {
        this.prepararGrafico();
    }

    /**
      *
      * Metodo responsavel pela preparacao do grafico
      *
    */
    prepararGrafico() {
        this.opcoes['series'] =  this.series;
        this.chart = Highcharts.chart(this.grafico.nativeElement, this.opcoes);
    }
}

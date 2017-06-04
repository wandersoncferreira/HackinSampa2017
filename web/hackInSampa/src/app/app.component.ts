import { Component, EventEmitter, OnInit, OnChanges } from '@angular/core';

import * as Highcharts from "Highcharts";
require('highcharts/highcharts-more.js')(Highcharts);
import {MaterializeAction} from 'angular2-materialize';
import { AngularFire } from "angularfire2";

import { SerieGrafico } from './models/grafico.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  
  selectedOption = '';
  secretariaSelecionada: any;
  modalActions = new EventEmitter<string|MaterializeAction>();
  selectOptions: any; 
  selectOptionsTypeCharts: any;
  selectedOptionTypeCharts: any;
  optionsChart: any;
  series: SerieGrafico[];
  averages: any[];
  ranges: any[];
  dados: any[];
  dadoSelecionado: any;
  aquisicaoFiltro: Boolean;
  servicoFiltro: Boolean;

  constructor(private _angularFire: AngularFire) {
    this.dados = [];
    this.selectOptions = [
      {
        name: "Negócios jurídicos",
        value: "negocios"
      },
      {
        name: "Educação",
        value: "educacao"
      },
      {
        name: "Secretaria do governo",
        value: "governo"
      }
    ];

    this.selectOptionsTypeCharts = [
      {
        name: "ED",
        value: "ed"
      },
      {
        name: "Aquisição",
        value: "aquisicao"
      },
      {
        name: "Serviço",
        value: "servico"
      }
    ]

    this.optionsChart = {
      title: {
        text: ''
      },
       xAxis: {
        type: 'datetime'
      },
      yAxis: {
          title: {
              text: null
          }
      },
      legend: {
      },
    }
    
    this.selectedOptionTypeCharts = 'ed';

    this.aquisicaoFiltro = true;

    this.servicoFiltro = true;
  }

  ngOnInit() {
    this.listarTudo();
  }

  listarTudo() {
    this._angularFire.database.list('negocios')
      .subscribe(dados => {
        for(let i of dados) {
          this.dados.push(i);
        }
    });
    this._angularFire.database.list('governo')
      .subscribe(dados => {
        for(let i of dados) {
          this.dados.push(i);
        }
      });
      this._angularFire.database.list('educacao')
      .subscribe(dados => {
        for(let i of dados) {
          this.dados.push(i);
        }
      });
  }

  selecionarSecretaria(opcaoSelecionada) {
    if(this.selectedOption) {
      this._angularFire.database.list(this.selectedOption)
        .subscribe(dados => {
          this.dados = dados;
        })
    }
  }

  openModal(dadoSelecionado) {
    this.modalActions.emit({action:"modal",params:['open']});
    this.dadoSelecionado = dadoSelecionado
    this.inicializarGrafico();
  }
  
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  inicializarGrafico() {
    
    this.series = [];
    const valor1 = [];
    const valor2 = [];

    for (let i of this.dadoSelecionado.detalhes) {
      valor1.push([new Date(i.data).valueOf(), i.valor]);
      valor2.push([new Date(i.data).valueOf(), i.valor - 20.5, i.valor + 10.8]);
    }
  

    let serie1 = new SerieGrafico('Gasto Hitóricos', valor1);
    serie1.zIndex = 1;
    serie1.marker = {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: Highcharts.getOptions().colors[0]
    }

    let serie2 = new SerieGrafico('Range', valor2);
    serie2.type = 'arearange';
    serie2.lineWidth = 0;
    serie2.linkedTo = ':previous';
    serie2.color = Highcharts.getOptions().colors[0];
    serie2.fillOpacity = 0.3;
    serie2.zIndex = 0;
    serie2.marker = {
        enabled: false
    };

    this.series.push(serie2);
    this.series.push(serie1);

  }

  selecionarTipoGrafico(aqui) {
    this.inicializarGrafico();
  }

  listarDadosFor() {
    return this.dados.filter(item => {
      if (item.tipo === 'SERVICO' && this.servicoFiltro) {
        return true;
      }else if (item.tipo === 'AQUISICAO' && this.aquisicaoFiltro) {
        return true;
      }else {
        return false;
      }
    });
  }

}

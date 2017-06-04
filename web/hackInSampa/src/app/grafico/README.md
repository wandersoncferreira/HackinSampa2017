# Tevec Grafico 

Este é o componente de grafico que utiliza o google graphs.

## Uso

Para ultilizar o Grafico é só utilizar a tag:

`
<app-tvc-grafico *ngIf="linhas.length > 0" (onChange)=(linhas) [linhas]="linhas" [labelsColuna]="colunas" [tipoGrafico]="'Line'"></app-tvc-grafico>
`
## Configurações

| Atributo         | Tipo              | Valor Default   |
| ---------------- | :---------------: | :-------------: |
| linhas           | TvcLinhaGrafico   | undefined       |
| labelsColuna     | TvcColunaGrafico  | undefined       |
| opcoes           | json              | undefined       |
| tipoGrafico      | string            | undefined       |

## Uso

`
<app-tvc-grafico *ngIf="linhas.length > 0" (onChange)=(linhas) [linhas]="linhas" [labelsColuna]="colunas" [tipoGrafico]="'Line'"></app-tvc-grafico>
`
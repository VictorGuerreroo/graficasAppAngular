import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
    //[50, 150, 120],
    //[250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]= [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}

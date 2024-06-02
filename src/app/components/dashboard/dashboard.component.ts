import { Component, HostListener, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  private barChart: Chart | undefined;
  private lineChart: Chart | undefined;

  constructor(){}

  ngOnInit(): void {
    this.renderBarChart();
    this.renderPieChart();
    this.renderLineChart();
  }

  renderBarChart(){
    new Chart("bar-chart", {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'dataset',
          data: [13, 15, 6, 17, 20, 10],
          borderWidth: 1
        }]
      }
    })
  }

  renderPieChart(){}

  renderLineChart(){
    new Chart("line-chart", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.barChart) {
      this.barChart.resize();
    }
    if (this.lineChart) {
      this.lineChart.resize();
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  public classDanger = 'alert-danger';
  public isDanger = {
    danger: true
  }
  public loading = false;
  constructor() { }

  public handlerprocess() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }
  ngOnInit(): void {}

}

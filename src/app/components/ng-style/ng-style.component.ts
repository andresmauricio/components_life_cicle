import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
  public fontSize = 40;
  public otherSize = 75;
  constructor() { }

  ngOnInit(): void {
  }

}

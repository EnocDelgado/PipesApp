import { Component } from '@angular/core';

@Component({
  selector: 'products-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})
export class NumberPageComponent {

  public totalSells: number = 2345667.5567;
  public percent: number = 0.4856
}

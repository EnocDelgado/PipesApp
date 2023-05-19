import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {
  public lowerName: string = 'Enoc'
  public upperName: string = 'Carl'
  public fullName : string = 'Enoc Delgado'

  public customDate: Date = new Date();
}

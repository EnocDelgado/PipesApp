import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18Select Pipe
  public name: string = 'Enoc';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invite you',
    'female': 'invite you'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18Plural Pipe
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'John', 'Charles', 'Natalie'];
  public clientMap = {
    '=0': 'there are no customers waiting',
    '=1': 'there is 1 customer waiting',
    '=2': 'there are 2 customers waiting',
    'other': 'there are # customers waiting'
  }

  deleteClient() {
    this.clients.shift();
  }

  // keyValue Pipe
  public person = {
    name: 'Ethan',
    age: 22,
    address: 'Munich, Germany'
  }

  // Async Pipe
  public myObservableTimer = interval( 2000 ).pipe(
    tap( value => console.log('tap', value ) )
  );

  public promiseValue = new Promise( (resolve, reject ) => {
    setTimeout( () => {
      resolve( 'We have data on the proise')
    }, 3500)
  })
}

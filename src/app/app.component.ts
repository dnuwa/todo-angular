import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Danniel';

  constructor(){
    // console.log('it works!')
    // this.name = 'Nuwagaba'

    this.changeName('Anonimous')
  }

  changeName(name:string):void{
    this.name = name
  }
}

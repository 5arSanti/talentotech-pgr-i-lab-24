import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  Nombre:string = 'Carlos';
  Apellido:string = 'Perez';
  Tecnologia:string = 'Angular';
  Edad:number = 25;
}

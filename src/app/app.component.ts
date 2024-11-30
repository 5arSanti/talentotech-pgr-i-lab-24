import { Component } from '@angular/core';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NuevoComponenteComponent]
})

export class AppComponent {
  Nombre:string = 'Carlos';
  Apellido:string = 'Perez';
  Tecnologia:string = 'Angular';
  Edad:number = 25;
}

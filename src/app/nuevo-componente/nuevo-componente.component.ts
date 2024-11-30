import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.component.html',
  styleUrl: './nuevo-componente.component.css'
})


export class NuevoComponenteComponent {
  miDescripcion:string = "Me gusta aprender nuevas cosas, y Angular es una de ellas.";
}

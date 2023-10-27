import { Component } from '@angular/core';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  mayuscula: boolean = true;
cambiar(){
  
  this.mayuscula=!this.mayuscula;
}
heroes: Heroe[] =[
  { nombre:'Superman', vuela:true, color: Color.azul },
  { nombre:'Batman', vuela:false, color: Color.negro },
  { nombre:'Robin', vuela:false, color: Color.verde },
  { nombre:'Daredevil', vuela:false, color: Color.rojo },
  { nombre:'Linterna Verde', vuela:true, color: Color.verde },
];


}

import { Component } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  nombre: string='Fernando';
  genero: string ='masculino';
  
  invitacionMapa ={
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string []=['Maria', 'Pedro', 'Fernando']
  clientesMapa ={
  '=0':'no tenemos ningún cliente esperando',
  '=1':'tenemos un cliente esperando',
  '=2':'actualmente tenemos dos clientes esperando',
  'other':'tenemos # clientes esperando'
}
cambiarPersona(){
  this.nombre='Ana';
  this.genero='femenino';
}
borrarCliente(){
  this.clientes.pop(); //borro el último
}
  //KeyValuePipe
  persona ={
    nombre: 'Fernando',
    edad: 35,
    direccion:'Ottawa, Canada'
  }
  miobservable = interval(1000);

  //JsonPipe
heroes=[
  {
    nombre: 'Superman',
    vuela:true
  },
  {
    nombre: 'Robin',
    vuela:false
  },
  {
    nombre: 'Aquaman',
    vuela:false
  }
]

}

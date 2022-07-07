import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre:string,
  favoritos:Favoritos[]
}

interface Favoritos{
  id:number,
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent{

  nuevoJuego:string = ""

  persona:Persona={
    nombre:"manuel",
    favoritos:[
      {
        id:1,
        nombre:"metal slug"
      },
      {
        id:2,
        nombre:"Fortnite"
      }
    ]
  }

  guardar(){
    console.log("formulario posteado");

  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
  agregarJuego(){
    const nuevoFavorito: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego = ""
  }
}

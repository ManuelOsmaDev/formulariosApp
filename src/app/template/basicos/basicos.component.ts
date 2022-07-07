import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  @ViewChild("miFormulario") miFormulario!:NgForm
  constructor() { }

  ngOnInit(): void {
  }
  initForm ={
    producto:"RTX 2090ti",
    precio:10,
    existencias:1000
  }

  nombreValido(){
  }
  guardar(){
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      producto:"rtx",
      precio:0,
      existencias:0
    })
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array( [
      ["free fire", Validators.required],
      ["for fai", Validators.required],
    ], Validators.required )
  });

  nuevoFavorito:FormControl = this.fb.control('',Validators.required)

  constructor(private fb: FormBuilder) {}

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
}
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  AgregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  }
  borrar(i:number){
    this.favoritosArr.removeAt(i)
  }
}

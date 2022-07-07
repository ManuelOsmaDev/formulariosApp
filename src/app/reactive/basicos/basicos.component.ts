import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  // miFormulario:FormGroup = new FormGroup({
  //   nombre      : new FormControl("RTX 1080ti"),
  //   precio      : new FormControl(112),
  //   existencias : new FormControl(112121)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'rtx',
      precio:2311,
      existencias:12121
    })
  }

  campoNoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }
}

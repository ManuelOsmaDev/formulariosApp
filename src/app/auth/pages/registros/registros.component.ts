import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import {
  nombreApellidoPattern,
  emailPattern,
  noPuedeSerStrider,
} from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [Validators.required, Validators.pattern(nombreApellidoPattern)],
      ],
      email: ['', [Validators.required, Validators.pattern(emailPattern)],[this.emailService    ]],
      username: ['', [Validators.required, noPuedeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'confirmPassword'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailService: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jose Manuel',
      email: 'JoseManuel@jose.com',
      username: 'ManuelOsma201',
      password: '123456',
      confirmPassword: '123456'
    });
  }
  get emailErrorMsg():string{
    const errors = this.miFormulario.get('email')?.errors
    if(errors?.required){
      return 'email es obligatorio'
    }else if( errors?.pattern ){
      return 'el formato de correo es invalido'
    }else if( errors?.emailTomado ){
      return 'el email ya fue tomado'
    }
    return ''
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }
  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}

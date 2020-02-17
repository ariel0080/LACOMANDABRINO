import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/firebase/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public userOption: string = 'none';
  public loading: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      chkHorario: new FormControl(false, [Validators.required]),
      chkLunes: new FormControl(false, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      captcha: new FormControl('', [Validators.required])
    });
  }

  public onSubmit() {
    this.loading = true;
    const usr = this.loginForm.get('email').value;
    const pass = this.loginForm.get('password').value;
    let restriccion = this.restriccionHoraria(
      this.loginForm.get('chkHorario').value
    );



    this.userService
      .GetUserByEmail(usr)
      .then(usuario => {
        console.log('esta en la base');
        if (!usuario.deleted && usuario.state === 'habilitado') {
          if (usuario.role === 'cliente' && !restriccion) {
            this.toastr.info(
              'El horario de atencion es de Miercoles a Domingo de 18:00 a 2:00'
            );
            setTimeout(() => {
              this.loading = false;
              this.loginForm.get('email').setValue('');
              this.loginForm.get('password').setValue('');
              this.loginForm.get('email').enable();
              this.loginForm.get('password').enable();
            }, 2000);
          } else {
            this.authService
              .LoginWithEmail(usr, pass)
              .then(() => {
                this.toastr.success('¡Bienvenido!');
              })
              .catch(() => {
                console.log('no estaba auth asi que lo creo');
                this.authService.RegisterWithEmailAdmin(usr);
              });
          }
        } else {
          this.toastr.error('Usuario deshabilitado o inexistente');
        }
      })
      .catch(() => this.toastr.error('Usuario y/o contraseña incorrecto.'))
      .finally(() => {

        this.userOption = 'none';
        this.loginForm.get('email').disable();
        this.loginForm.get('password').disable();

      });
  }

  private ue(u: string) {
    this.userOption = u;
    console.log('esta en la base', u);
    this.LoadUser();
  }

  private LoadUser() {
    let isNull = false;
    switch (this.userOption) {
      case 'cliente1':
        this.loginForm.get('email').setValue('cliente1@gmail.com');
        break;
      case 'cliente2':
        this.loginForm.get('email').setValue('cliente2@gmail.com');
        break;
      case 'mozo':
        this.loginForm.get('email').setValue('mozo@gmail.com');
        break;
      case 'bartender':
        this.loginForm.get('email').setValue('bartender@gmail.com');
        break;
      case 'cervecero':
        this.loginForm.get('email').setValue('cervecero@gmail.com');
        break;
      case 'cocinero':
        this.loginForm.get('email').setValue('cocinero@gmail.com');
        break;
      case 'socio':
        this.loginForm.get('email').setValue('socio@gmail.com');
        break;

      default:
        this.loginForm.get('email').setValue('');
        this.loginForm.get('password').setValue('');
        isNull = true;
        break;
    }
    if (!isNull) { this.loginForm.get('password').setValue('password'); }
  }

  private restriccionHoraria(chk: boolean): boolean {
    let retorno = true;
    const date = new Date();
    let day = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();

    if (this.loginForm.get('chkLunes').value) {
      day = 1;
    }

    console.log('dia: ' + day);
    console.log('hora: ' + hour);
    console.log('minuto: ' + min);

    if (!chk || chk == null || this.loginForm.get('chkLunes').value) {
      if (day === 1 || day === 2) {
        retorno = false;
      } else if (hour >= 2 && hour <= 17) {
        retorno = false;
      }
    }
    console.log(this.loginForm.get('chkLunes').value);
    console.log(retorno);

    return retorno;
  }
}

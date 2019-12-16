import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;
	public userOption: string = 'none';
	public loading: boolean = false;

	constructor(private authService: AuthService, private toastr: ToastrService) {  }

	ngOnInit() {
		this.loginForm = new FormGroup({
			'email': new FormControl(null, [Validators.required]),
			'password': new FormControl(null, [Validators.required]),
			'captcha': new FormControl('', [Validators.required])
		});
	}

	public onSubmit() {
		this.loading = true;
		this.authService.LoginWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value)
		.then(() => {
			this.toastr.success('¡Bienvenido!');
		})
		.catch(() => {
			this.toastr.error('Usuario y/o contraseña incorrecto.');
		});
	}

	private  ue(u: string){
		
		this.userOption = u;
		console.log("la concha de tu madre",u);
		this.LoadUser();
	}

	private LoadUser()
	{

		let isNull = false;
		switch(this.userOption)
		{
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
		if(!isNull)
			this.loginForm.get('password').setValue('password');
	}

}
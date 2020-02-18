import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { logging } from 'protractor';
import { LoggingService } from 'src/app/services/firebase/logging.service';
import { TargetMovimiento, TipoMovimiento } from 'src/app/models/logging';

@Component({
  selector: 'app-sidebar-option',
  templateUrl: './sidebar-option.component.html',
  styleUrls: ['./sidebar-option.component.scss']
})
export class SidebarOptionComponent implements OnInit {

  @Input() name: string;
  @Input() link: string;
  @Input() lastOne?: boolean;
  @Input() logOut?: boolean;

  constructor(private authService: AuthService, private router: Router, private lS: LoggingService) { }

  ngOnInit() {
  }
  
  public LogOut(): void
	{
    this.authService.GetCurrentUser().then(user => 
      {const msj = `El usuario ${user.email} finalizo sesion `;
      console.log(msj);
      this.lS.persistirMovimiento(user, TargetMovimiento.usuario, TipoMovimiento.egreso, msj);
    });

		this.authService.LogoutEmail();
		this.router.navigate(['/app/login']);
	}

}

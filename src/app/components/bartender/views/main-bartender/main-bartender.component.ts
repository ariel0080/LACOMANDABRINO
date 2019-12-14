import { Component, OnInit, Output } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-main-bartender',
	templateUrl: './main-bartender.component.html',
	styleUrls: ['./main-bartender.component.scss']
})
export class MainBartenderComponent implements OnInit, Sidebar {

	public open: boolean = false;
	public user: User;

	toggleSidebar()
	{
		this.open = !this.open;
	}

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.authService.GetCurrentUser().then(x => this.user = x);
	}

}
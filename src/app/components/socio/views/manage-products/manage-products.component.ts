import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  
  public role: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.GetCurrentUser().then(user =>{
      this.role = user.role;
    });
  }

}

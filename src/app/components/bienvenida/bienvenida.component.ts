import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
//import {NgbdCarouselNavigation } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class BienvenidaComponent implements OnInit {

  //cc: NgbCarousel;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  //images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images = [1,2,3,4,5,6].map((n) => '././assets/img/imagen'+n+'.jpg');
  
  //cc.cycle();
  
  constructor(config: NgbCarouselConfig, private router: Router) { 
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    
  }

  ingreso(){

  console.log("presionaste");
  this.router.navigate(['/app/login']);
  }

  ngOnInit() {
  }

}

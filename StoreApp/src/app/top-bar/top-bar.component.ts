import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutComponent } from '../checkout.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToCheckout() {
    this.route.navigate(['/checkout']);
  }
}

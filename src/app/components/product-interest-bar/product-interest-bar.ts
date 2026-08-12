import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductInterestService } from '../../services/product-interest.service';

@Component({
  selector: 'app-product-interest-bar',
  imports: [RouterLink],
  templateUrl: './product-interest-bar.html',
  styleUrl: './product-interest-bar.css',
})
export class ProductInterestBar {
  readonly interest = inject(ProductInterestService);
}

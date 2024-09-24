import { Component, input } from '@angular/core';
import { product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  product = input.required<product>();

}

import { Component, inject } from '@angular/core';
import { ProductService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductService]
})
export default class ProductListComponent {


  private productService = inject(ProductService)

  constructor(){
    this.productService.getProduct().subscribe((products)=> {
      console.log(products)
    });
  }

}

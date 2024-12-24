import { Component, effect, input, output } from '@angular/core';

import { Product } from '../../../../../interfaces/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // @Input({required: true}) product!: Product;
  // @Output() onIncrementQuantity = new EventEmitter<number>();
  product = input.required<Product>();
  onIncrementQuantity = output<number>();
  loginEffect = effect(() => console.log(this.product().name));

  incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketTotals } from '../../models/basket';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$: Observable<IBasketTotals>;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}

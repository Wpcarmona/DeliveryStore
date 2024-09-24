import { inject, Injectable } from "@angular/core";
import { product } from "../../shared/interfaces/product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductService } from "./products.service";
import { catchError, map, of, startWith, Subject, switchMap } from "rxjs";

interface State {
    products: product[],
    status: 'loading' | 'success' | 'error';
    page:number;
}

@Injectable()
export class ProductStateService {

    private productService = inject(ProductService)

    private initialState: State = {
        products: [],
        status:'loading' as const,
        page:1,
    };

    changePageS = new Subject<number>()

    loadPorducts$ = this.changePageS.pipe(
        startWith(1),
        switchMap((page) => this.productService.getProduct(page)),
        map((products) => ({products, status:'success' as const})),
        catchError(() => {
            return of({
                products:[],
                status: 'error' as const
            })
        })
    );

    state = signalSlice({
        initialState:this.initialState,
        sources: [
            this.changePageS.pipe(
                map((page)=> ({page, status:'loading' as const}))
            ),
            this.loadPorducts$
        ],
    })
}
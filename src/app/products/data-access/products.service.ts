
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { product } from "../../shared/interfaces/product.interface";


@Injectable()
export class ProductService extends BaseHttpService{

    getProduct():Observable<product[]>{
        return this.http.get<any[]>(`${this.apiUrl}/products`)
    }
}
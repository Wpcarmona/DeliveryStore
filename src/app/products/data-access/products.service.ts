/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { product } from "../../shared/interfaces/product.interface";

const LIMIT = 5

@Injectable({providedIn: 'root'})
export class ProductService extends BaseHttpService{

    getProduct(page:number):Observable<product[]>{
        return this.http.get<any[]>(`${this.apiUrl}/products`,{
            params:{
                limit:page * LIMIT
            }
        })
    }

    getProductById(id: number):Observable<product>{
        return this.http.get<product>(`${this.apiUrl}/products/${id}`)
    }
}
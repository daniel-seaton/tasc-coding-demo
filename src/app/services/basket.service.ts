import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBasketList } from '../models/basket';
import { Injectable } from '@angular/core';

@Injectable()
export class BasketService {
    private basketJsonPath = "http://localhost:4200/assets/baskets.json" 

    constructor(private http: HttpClient){
    }

    getBaskets(): Observable<IBasketList>{
        return this.http.get<IBasketList>(this.basketJsonPath);
    }
}
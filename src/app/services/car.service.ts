import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44361/api/cars/';

  constructor(private httpClient: HttpClient) { }

  getCarDetails() :Observable<ListResponseModel<CarDetail>> {
   let newPath = this.apiUrl+"getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getAllCars() :Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"getall"
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

  getCarsByBrand(brandName:string):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"getcarsbybrandname?brandName="+brandName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorName:string):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"getcarsbybrandname?colorName="+colorName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  // getCarsByColorAndBrand(brandName?:string,colorName?:string):Observable<ListResponseModel<Car>>{
  //   let newPath = this.apiUrl+"getcarsbybrandname?brandName="+brandName+"colorName="+colorName;
  //   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  // }
  carAdd(car:Car):Observable<ResponseModel>{
    let newPath = "https://localhost:44361/api/cars/addcar";
    return this.httpClient.post<ResponseModel>(newPath,car)
  }
  carDelete(id:number):Observable<ResponseModel>{
    let newPath = "https://localhost:44361/api/cars/deletecar?id="+id;
    return this.httpClient.get<ResponseModel>(newPath)
  }
  carUpdate(car:Car):Observable<ResponseModel>{
    let newPath = "https://localhost:44361/api/cars/updatecar";
    return this.httpClient.post<ResponseModel>(newPath,car)
  }
  getCarDetailsById(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"getbyid?id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(id:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"getcarbyid?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}

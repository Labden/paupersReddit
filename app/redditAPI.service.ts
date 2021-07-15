//1.
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//The job of the service is to handle the request.response
//and passing over the raw data

//The job of the component is to take that and get it into a format that we can use
@Injectable()
export class APITestService{
    apiBaseUrl: string = "https://www.reddit.com/r/aww/.json";
    constructor(private http:HttpClient){}
    
        //This is the equivalent of the CallAPI() method, its only job is to get an http response
        getThread(id: number): any {
            //the get method returns an observable object
            //obersvable is an async object that waits
            //for HTTP call to be done processing and spits it out
            let url = this.apiBaseUrl + id;
                return this.http.get(url);
        }
        
    
}
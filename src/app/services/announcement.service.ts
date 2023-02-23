import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})

export class AnnouncementService {

  constructor(private httpClient:HttpClient) { }
  
  baseURL="https://localhost:44345/Announcements";
  
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  serviceCall() {
    console.log("Service was called");
    }

   // readonly announcements: Announcement[]=[{id:'1', author:"Adrian",message:"Nu tin cursul", title:"Curs",category:Category.General, imageUrl:''},
  //{id:'2',author:"Nimeni",message:"Alt anunt", title:"Nimic interesenat",category:Category.Course,imageUrl:''},
  //{id:'3',author:"Eminescu",message:"Elemente de anatomie", title:"Anatomie",category:Category.Laboratory,imageUrl:''}];

  getAnnouncements():Observable<Announcement[]>{
    return this.httpClient.get<Announcement[]>(this.baseURL);
  }

  addAnnouncements(obj:Announcement):Observable<Announcement>{
    return this.httpClient.post<Announcement>(this.baseURL,obj,this.httpOptions);
  }

  deleteAnnouncement(id:string):Observable<unknown>{
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.delete(url,this.httpOptions);
  }
}

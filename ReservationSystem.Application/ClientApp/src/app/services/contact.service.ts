import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'variables';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${API_URL}/contacts`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BACKEND_URL} from "../util";
import {Observable} from "rxjs/Observable";
import {Persona} from "../persona";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PersonaService {

  constructor(private http: HttpClient) {
  }

  getListPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(BACKEND_URL + "/findAll");
  }

  savePersona(persona): Observable<Persona> {
    return this.http.post<Persona>(BACKEND_URL + "/save", persona, httpOptions);
  }

  findById(id): Observable<Persona>{
    return this.http.get<Persona>(BACKEND_URL + "/findById"+id);
  }
}

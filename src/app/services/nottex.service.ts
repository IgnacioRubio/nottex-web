import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Nottex } from 'src/app/models/nottex.model';

@Injectable()
export class NottexService {
  
  private nottexUrl = 'http://localhost:3000/nottexes';
  
  constructor(private http: HttpClient) {}

  // get all Nottex stored
  getAllNottex(): Observable<Nottex[]> {
    return this.http.get<Nottex[]>(this.nottexUrl).pipe(
      map(data => {
        // parse 'dateCreted' into date
        return processDateCreated(data);
      })
    );
  }
 
  // crete new Nottex
  createNottex(nottex: Nottex) {
    return this.http.post<Nottex>(this.nottexUrl, nottex);
  }

  // update a Nottex
  updateNottex(nottex: Nottex) {
    const updateUrl = `${this.nottexUrl}/${nottex.id}`;
    
    return this.http.put<Nottex>(updateUrl, nottex);
  }

  // delete Nottex
  deleteNottex(id: number) {
    const deleteUrl = `${this.nottexUrl}/${id}`;
    
    return this.http.delete(deleteUrl);
  }
}


function processDateCreated(data: Nottex[]): Nottex[] {
  let dataProcess: Nottex[] = [];

  for (let item of data) {
    item['dateCreated'] = new Date(item['dateCreated']);

    dataProcess.push(item);
  }

  return dataProcess;
}
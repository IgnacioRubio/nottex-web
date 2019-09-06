import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Nottex } from 'src/app/models/nottex.model';

@Injectable()
export class NottexService {
  
  private nottexUrl = 'http://localhost:3000/nottexes';
  
  constructor(private http: HttpClient) {}

  // get all Nottex stored
  getAllNottex() {
    return this.http.get<Nottex[]>(this.nottexUrl).pipe(
      map(data => {
        // parse 'dateCreted' into date
        let dataProcess: Nottex[] = [];

        for (let item of data) {
          item['dateCreated'] = new Date(item['dateCreated']);
    
          dataProcess.push(item);
        }

        return dataProcess;
      })
    );
  }
  
}
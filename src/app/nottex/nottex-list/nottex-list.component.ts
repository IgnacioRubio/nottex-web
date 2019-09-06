import { Component, OnInit } from '@angular/core';

import { NottexService } from 'src/app/services/nottex.service';
import { Nottex } from 'src/app/models/nottex.model';

@Component({
  selector: 'app-nottex-list',
  templateUrl: './nottex-list.component.html',
  styleUrls: ['./nottex-list.component.css'],
  providers: [ NottexService ]
})
export class NottexListComponent implements OnInit {
  nottexArray: Nottex[];

  constructor(private nottexService: NottexService)
   { }

   getNottex() {
     this.nottexService.getAllNottex().subscribe(data => {
       this.nottexArray = data;
     });
   }

  ngOnInit() {
    this.getNottex();
  }

}

import { Component, OnInit } from '@angular/core';

import { CommunicationService } from '@app/services/communication.service';

import { NottexService } from 'src/app/services/nottex.service';
import { Nottex } from 'src/app/models/nottex.model';

@Component({
  selector: 'app-nottex-list',
  templateUrl: './nottex-list.component.html',
  styleUrls: ['./nottex-list.component.css']
})
export class NottexListComponent implements OnInit {
  nottexArray: Nottex[];

  constructor(
    private nottexService: NottexService,
    private communicationService: CommunicationService
  ) { }

  onEdit() {
    this.getNottex();
  }
  
   onDelete() {
     this.getNottex();
   }   
   
   ngOnInit() {
     // get list for first time
     this.getNottex();

     // subscribe when nottex was added and updates list
     this.communicationService.nottexAddedSource.subscribe(
       () => this.getNottex(),
       err => console.error(err)
     );
    }
    
    private getNottex() {
      this.nottexService.getAllNottex().subscribe(data => {
        this.nottexArray = data;
      });
    }
}
